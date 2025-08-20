import { useContext, useEffect, useRef, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { GoogleGenAI } from "@google/genai";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import axios from "axios";
// Import des styled components
import {
    FormContainer,
    InputContainer,
    StyledLabel,
    StyledInput,
    StyledTextarea,
    StyledSelect,
    IngredientsContainer,
    IngredientItem,
    IngredientButton,
    FileUploadContainer,
    FileUploadLabel,
    FileUploadInput,
    ImagePreview
} from "./StyledComponents";
import { AdminContext } from "../../utils/context/AuthContext";
import { HOST } from "../../utils/style/colors";

export default function CreateRecipe(){
    const ingRef = useRef();
    const [form, setForm] = useState({
        title: '',
        description: '',
        ingredients: [''],
        category: '',
        image: null, // Changé de image_url à image
        video_url: ''
    });
    
    // États pour la gestion des erreurs et validations
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const {token} = useContext(AdminContext)
    const [generalError, setGeneralError] = useState(null);
    // Validation des champs
    const validateField = (field, value) => {
        let error = '';
        
        switch (field) {
            case 'title':
                if (!value.trim()) {
                    error = 'Le nom du plat est requis';
                } else if (value.trim().length < 3) {
                    error = 'Le nom du plat doit contenir au moins 3 caractères';
                } else if (value.trim().length > 100) {
                    error = 'Le nom du plat ne peut pas dépasser 100 caractères';
                }
                break;
                
            case 'description':
                if (!value.trim()) {
                    error = 'La description est requise';
                } else if (value.trim().length < 10) {
                    error = 'La description doit contenir au moins 10 caractères';
                } else if (value.trim().length > 1000) {
                    error = 'La description ne peut pas dépasser 1000 caractères';
                }
                break;
                
            case 'category':
                if (!value) {
                    error = 'Veuillez sélectionner une catégorie';
                }
                break;
                
            case 'video_url':
                if (value && value.trim()) {
                    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}/;
                    if (!youtubeRegex.test(value.trim())) {
                        error = 'Veuillez entrer un lien YouTube valide';
                    }
                }
                break;
                
            default:
                break;
        }
        
        return error;
    };

    // Validation des ingrédients
    const validateIngredients = (ingredients) => {
        const validIngredients = ingredients.filter(ing => ing.trim() !== '');
        if (validIngredients.length === 0) {
            return 'Au moins un ingrédient est requis';
        }
        if (validIngredients.length > 50) {
            return 'Maximum 50 ingrédients autorisés';
        }
        return '';
    };

    // Validation de l'image
    const validateImage = (file) => {
        // Image is optional. If not provided, it's valid.
        if (!file) return '';

        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            return 'Format d\'image non supporté. Utilisez JPG, JPEG ou PNG';
        }

        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            return 'La taille de l\'image ne doit pas dépasser 5MB';
        }

        return '';
    };

    const handleChange = (field, value, i) => {
        if (field !== 'ingredients') {
            setForm({ ...form, [field]: value });
            
            // Valider le champ en temps réel
            const error = validateField(field, value);
            setErrors(prev => ({
                ...prev,
                [field]: error
            }));
        } else {
            const newIngredients = [...form.ingredients];
            newIngredients[i] = value;
            setForm({ ...form, ingredients: newIngredients });
            
            // Valider les ingrédients
            const ingredientError = validateIngredients(newIngredients);
            setErrors(prev => ({
                ...prev,
                ingredients: ingredientError
            }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Valider l'image
            const imageError = validateImage(file);
            setErrors(prev => ({
                ...prev,
                image: imageError
            }));
            
            if (!imageError) {
                setForm({ ...form, image: file });
                const imageUrl = URL.createObjectURL(file);
                setImagePreview(imageUrl);
            } else {
                setForm({ ...form, image: null });
                setImagePreview(null);
            }
        }
    };

    const addIngredient = (e) => {
        e.preventDefault();
        if (form.ingredients.length < 50) {
            setForm({ ...form, ingredients: [...form.ingredients, ''] });
        }
    };

    const removeIngredient = (e, index) => {
        e.preventDefault();
        if (form.ingredients.length > 1) {
            const newIngredients = form.ingredients.filter((_, i) => i !== index);
            setForm({ ...form, ingredients: newIngredients });
            
            // Revalider les ingrédients
            const ingredientError = validateIngredients(newIngredients);
            setErrors(prev => ({
                ...prev,
                ingredients: ingredientError
            }));
        }
    };

    // Validation complète du formulaire
    const validateForm = () => {
        const newErrors = {};
        
        // Valider tous les champs
        newErrors.title = validateField('title', form.title);
        newErrors.description = validateField('description', form.description);
        newErrors.category = validateField('category', form.category);
        newErrors.video_url = validateField('video_url', form.video_url);
        newErrors.ingredients = validateIngredients(form.ingredients);
    // image is optional
    const imageErr = validateImage(form.image);
    if (imageErr) newErrors.image = imageErr;
        
        // Supprimer les erreurs vides
        Object.keys(newErrors).forEach(key => {
            if (!newErrors[key]) delete newErrors[key];
        });
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGeneralError(null);

        if (!validateForm()) {
            console.log('Formulaire invalide:', errors);
            return;
        }

        setIsSubmitting(true);
        
        try {
            const cleanedForm = {
                ...form,
                ingredients: form.ingredients.filter(ingredient => ingredient.trim() !== '')
            };
            
            const formData = new FormData();
            formData.append('title', cleanedForm.title.trim());
            formData.append('description', cleanedForm.description.trim());
            formData.append('category', cleanedForm.category);
            formData.append('video_url', cleanedForm.video_url.trim());
            formData.append('ingredients', JSON.stringify(cleanedForm.ingredients));
            
            if (cleanedForm.image) {
                formData.append('image', cleanedForm.image);
            }
            
            // Ensure we don't send 'Bearer null'. Try context token, fallback to localStorage.
            const localToken = token || localStorage.getItem('token');
            if (!localToken) {
                setGeneralError('Session invalide ou expirée. Veuillez vous reconnecter.');
                setIsSubmitting(false);
                return;
            }

            const response = await axios.post(HOST+'/api/create', formData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    ...(localToken ? { Authorization: 'Bearer '+localToken } : {})
                }
            });
            
            console.log('Recipe created successfully:', response.data);
            
            // Réinitialiser le formulaire après succès
            setForm({
                title: '',
                description: '',
                ingredients: [''],
                category: '',
                image: null,
                video_url: ''
            });
            setImagePreview(null);
            setErrors({});
            
            // Optionnel: Afficher un message de succès
            alert('Recette créée avec succès !');
            
        } catch (error) {
            console.error('Error creating recipe:', error.response?.data || error.message);

            // Gérer les erreurs du serveur
            const serverData = error.response?.data;
            if (serverData) {
                // If backend returns structured validation errors
                if (serverData.errors) {
                    setErrors(serverData.errors);
                }
                // If backend returns a general message
                if (serverData.message) {
                    setGeneralError(serverData.message);
                }
                // If backend returns other data, try to display a reasonable message
                if (!serverData.errors && !serverData.message) {
                    setGeneralError(JSON.stringify(serverData));
                }
            } else {
                setGeneralError('Erreur lors de la création de la recette. Veuillez réessayer.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{marginTop: 95}}>
            <FormContainer onSubmit={handleSubmit}>
                <InputContainer>
                    <StyledLabel>
                        Dish name: *
                        <StyledInput
                            type="text"
                            name="title"
                            placeholder="Enter dish name"
                            value={form.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                            style={{
                                borderColor: errors.title ? '#ff4757' : '#ddd'
                            }}
                        />
                        {errors.title && (
                            <span style={{color: '#ff4757', fontSize: '0.875rem', marginTop: '4px', display: 'block'}}>
                                {errors.title}
                            </span>
                        )}
                    </StyledLabel>
                </InputContainer>

                <InputContainer>
                    <StyledLabel>
                        Description: *
                        <StyledTextarea
                            name="description"
                            placeholder="Enter the dish description (minimum 10 characters)"
                            value={form.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                            style={{
                                borderColor: errors.description ? '#ff4757' : '#ddd'
                            }}
                        />
                        {errors.description && (
                            <span style={{color: '#ff4757', fontSize: '0.875rem', marginTop: '4px', display: 'block'}}>
                                {errors.description}
                            </span>
                        )}
                    </StyledLabel>
                </InputContainer>

                <InputContainer>
                    <StyledLabel>
                        Ingredients: *
                        <IngredientsContainer ref={ingRef}>
                            {form.ingredients.map((ingredient, i) => (
                                <IngredientItem key={i}>
                                    <StyledInput
                                        type="text"
                                        value={ingredient}
                                        placeholder={`Ingredient ${i + 1}`}
                                        onChange={(e) => handleChange('ingredients', e.target.value, i)}
                                        style={{
                                            borderColor: errors.ingredients ? '#ff4757' : '#ddd'
                                        }}
                                    />
                                    {i === form.ingredients.length - 1 ? (
                                        <IngredientButton
                                            type="button"
                                            variant="add"
                                            onClick={addIngredient}
                                            title="Add ingredient"
                                            disabled={form.ingredients.length >= 50}
                                        >
                                            <FontAwesomeIcon icon={fas.faPlus} />
                                        </IngredientButton>
                                    ) : (
                                        <IngredientButton
                                            type="button"
                                            variant="remove"
                                            onClick={(e) => removeIngredient(e, i)}
                                            title="Remove ingredient"
                                        >
                                            <FontAwesomeIcon icon={fas.faMinus} />
                                        </IngredientButton>
                                    )}
                                </IngredientItem>
                            ))}
                        </IngredientsContainer>
                        {errors.ingredients && (
                            <span style={{color: '#ff4757', fontSize: '0.875rem', marginTop: '4px', display: 'block'}}>
                                {errors.ingredients}
                            </span>
                        )}
                    </StyledLabel>
                </InputContainer>

                <InputContainer>
                    <StyledLabel>
                        Category: *
                        <StyledSelect
                            name="category"
                            value={form.category}
                            onChange={(e) => handleChange('category', e.target.value)}
                            style={{
                                borderColor: errors.category ? '#ff4757' : '#ddd'
                            }}
                        >
                            <option value="">Select a category</option>
                            <option value="patisserie">Pâtisserie</option>
                            <option value="main-course">Main Course</option>
                            <option value="appetizer">Appetizer</option>
                            <option value="dessert">Dessert</option>
                            <option value="beverage">Beverage</option>
                        </StyledSelect>
                        {errors.category && (
                            <span style={{color: '#ff4757', fontSize: '0.875rem', marginTop: '4px', display: 'block'}}>
                                {errors.category}
                            </span>
                        )}
                    </StyledLabel>
                </InputContainer>

                <InputContainer>
                    <StyledLabel>
                        Image (optionnelle):
                        <FileUploadContainer>
                            <FileUploadLabel style={{
                                borderColor: errors.image ? '#ff4757' : '#ddd'
                            }}>
                                <FontAwesomeIcon icon={fas.faCloudUploadAlt} />
                                Click to select an image or drag and drop (optionnel)
                                <small>PNG, JPG, JPEG up to 5MB</small>
                                <FileUploadInput
                                    type="file"
                                    accept="image/jpeg,image/jpg,image/png"
                                    onChange={handleImageChange}
                                />
                            </FileUploadLabel>
                        </FileUploadContainer>
                        {errors.image && (
                            <span style={{color: '#ff4757', fontSize: '0.875rem', marginTop: '4px', display: 'block'}}>
                                {errors.image}
                            </span>
                        )}
                        {imagePreview && (
                            <ImagePreview>
                                <img src={imagePreview} alt="Recipe preview" />
                            </ImagePreview>
                        )}
                    </StyledLabel>
                </InputContainer>

                <InputContainer>
                    <StyledLabel>
                        Youtube video link:
                        <StyledInput
                            type="url"
                            name="youtubelink"
                            placeholder="https://www.youtube.com/watch?v=... (optional)"
                            value={form.video_url}
                            onChange={(e) => handleChange('video_url', e.target.value)}
                            style={{
                                borderColor: errors.video_url ? '#ff4757' : '#ddd'
                            }}
                        />
                        {errors.video_url && (
                            <span style={{color: '#ff4757', fontSize: '0.875rem', marginTop: '4px', display: 'block'}}>
                                {errors.video_url}
                            </span>
                        )}
                    </StyledLabel>
                </InputContainer>

                {generalError && (
                    <div style={{color: '#ff4757', marginBottom: 10}}>{generalError}</div>
                )}

                <Button 
                    isPrimary={true} 
                    type="submit" 
                    // disabled={isSubmitting || Object.keys(errors).length > 0}
                >
                    <FontAwesomeIcon style={{marginRight: 5}} icon={isSubmitting ? fas.faSpinner : fas.faPlusCircle} />
                    {isSubmitting ? 'Creating...' : 'Create the recipe'}
                </Button>
            </FormContainer>
        </div>
    );
}