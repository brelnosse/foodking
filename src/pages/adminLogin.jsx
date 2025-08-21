import { useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { colors, HOST } from "../utils/style/colors";
import Button from "../components/Button";
import { AdminContext } from "../utils/context/AuthContext";
import Error from "../components/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
const Form = styled.form`
    padding: 20px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 10px;
    @media (max-width: 800px){
        max-width: 350px;
    }
`;
const H1 = styled.h1`
    margin: 20px 0px;
    margin-top: 0px;
`;
const Input = styled.input`
    padding-left: 10px;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    background-color: rgba(222, 222, 222, 1);
    box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.03);
    margin-top: 5px;
    border: 1px solid rgba(222, 222, 222, 1);
`;
export default function AdminLogin(){
    const [mdp, setMdp] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const {setUserToken, isAdmin} = useContext(AdminContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(mdp.trim().length !== 0 && email.trim().length !== 0){
            setIsLoading(true)
            axios.post(HOST+'/api/auth/check', {pwd: mdp, email: email})
            .then((res)=> {
                setUserToken(res.data.token)
                setError(null)
                window.location = '/admin/create'
            })
            .catch((error)=> {
                setError(error.message)
            })
            .finally(()=>{
                setIsLoading(false)
            })
        }else{
            setError('Please fill all the required fields.')
        }
    }
    return (!isAdmin ?
        <Form onSubmit={handleSubmit}>
            {error && <Error textColor={'red'} message={error} />}
            <H1>Admn login</H1>
            <label htmlFor="email">
                Your email address:
                <Input
                    type="email" 
                    name="email" 
                    placeholder="Enter your email address"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    id="email"
                    defaultValue={email}/>                 
            </label>   
            <label htmlFor="mdp">
                Password
                <Input 
                    type="password" 
                    name="admin" 
                    id="mdp"
                    placeholder="Enter your password"
                    onChange={(e)=>{
                        setMdp(e.target.value)
                    }}                
                    defaultValue={mdp}/>
            </label>

            <Button isPrimary={true} $loading={isLoading}>{isLoading && <FontAwesomeIcon icon={fas.faSpinner} spin/>} Connectez-vous</Button>
        </Form>
        : <Navigate to={'/admin/create'}/>
    );   
}