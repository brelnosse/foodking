import styled from "styled-components";

// Container principal pour les inputs
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 2px;
`;

// Label stylisé
export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: #2d3748;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// Input de base
export const StyledInput = styled.input`
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  font-size: 16px;
  color: #2d3748;
  background-color: #ffffff;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a0aec0;
  }

  &:disabled {
    background-color: #f7fafc;
    color: #a0aec0;
    cursor: not-allowed;
  }
`;

// Textarea stylisé
export const StyledTextarea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  color: #2d3748;
  background-color: #ffffff;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;

  &:focus {
    outline: none;
    background-color: #fbfdff;
  }


  &::placeholder {
    color: #a0aec0;
  }

  &:disabled {
    background-color: #f7fafc;
    color: #a0aec0;
    cursor: not-allowed;
  }
`;

// Select stylisé
export const StyledSelect = styled.select`
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  color: #2d3748;
  background-color: #ffffff;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: #fbfdff;
  }

  option {
    padding: 8px;
    background-color: #ffffff;
    color: #2d3748;
  }
`;

// Container pour les ingrédients
export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 2px;
  padding: 12px;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
`;

// Item d'ingrédient individuel
export const IngredientItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
  }

  ${StyledInput} {
    margin: 0;
    flex: 1;
  }
`;

// Boutons pour les ingrédients
export const IngredientButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.variant === 'add' && `
    background-color: #48bb78;
    color: white;
    
    &:hover {
      background-color: #38a169;
      transform: scale(1.05);
    }
    
    &:active {
      transform: scale(0.95);
    }
  `}
  
  ${props => props.variant === 'remove' && `
    background-color: #f56565;
    color: white;
    
    &:hover {
      background-color: #e53e3e;
      transform: scale(1.05);
    }
    
    &:active {
      transform: scale(0.95);
    }
  `}
  
  &:disabled {
    background-color: #e2e8f0;
    color: #a0aec0;
    cursor: not-allowed;
    transform: none;
  }
`;

// Container pour l'upload de fichiers
export const FileUploadContainer = styled.div`
  position: relative;
`;

export const FileUploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  padding: 24px;
  border: 2px dashed #cbd5e0;
  border-radius: 12px;
  background-color: #f8fafc;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #4a5568;
  font-size: 16px;
  text-align: center;

  &:hover {
    border-color: #4299e1;
    background-color: #ebf8ff;
    color: #2b6cb0;
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    margin-bottom: 8px;
    font-size: 24px;
  }
`;

export const FileUploadInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

// Container pour la prévisualisation d'image
export const ImagePreview = styled.div`
  margin-top: 16px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #f8fafc;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Container principal du formulaire
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto;
  padding: 32px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin: 16px;
    padding: 24px;
  }
`;