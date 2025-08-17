import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { fas } from '@fortawesome/free-solid-svg-icons'
import {colors} from '../../utils/style/colors';
import { useContext} from 'react';
import { EdgeContext } from '../../utils/context';
import cooking from '../../assets/cooking.png';
import { Link } from 'react-router-dom';
import "../../styles/Sidebar.css";
import { useLocation } from 'react-router-dom';
import { AdminContext } from '../../utils/context/AuthContext';

const StyledSidebar = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.2s;
    overflow: hidden;
`;
const StyledSidebarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
`;

const StyledButton = styled.button`
    font-size: 1.1em;
    padding: 10px; 
    cursor: pointer;
    background-color: ${colors.white};
    transition: all 0.2s;
    border: none;
    border-radius: 8px;

    ${
        ({$isClose}) => !$isClose ? `
            border: 3px solid ${colors.borderColor};
            &:hover{
                background-color: ${colors.fadePrimary};
                box-shadow: 0px 0px 0px 5px rgba(0,0,0,0.05)
            }  
        ` : ``
    }
    &:hover{
        box-shadow: 0px 0px 0px 5px rgba(0,0,0,0.05)
    }  
`;

const StyledSidebarFooter = styled.div`
    background-color: transparent;
    flex: 1;
    display: flex;
    align-items: flex-end;
`;
const StyledSidebarBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 10px;  
    margin-top: 50px; 
`;
const StyledLink = styled(Link)`
    display: inline-flex;
    text-decoration: none;
    padding: 10px;
    align-items: center;
    border-radius: 8px;
    border: 2px solid ${colors.borderColor};
    height: 40px;
    fontSize: 15px;
    width: 80%;
    color: ${colors.borderColor};
    background-color: white;
    transition: all 0.3s;
    ${({$isSelected})=> $isSelected && `
        background-color: ${colors.primary};
        color: black;
        
        border-color: ${colors.primary};    
    `}
    &:hover{
        background-color: ${colors.primary};
        color: black;
        border-color: ${colors.primary}
    }
`;
function Sidebar(){
    const {leftEdge, toggleLeftEdge} = useContext(EdgeContext);
    const location = useLocation();
    const {isAdmin} = useContext(AdminContext)

    return (
        <StyledSidebar style={{width: leftEdge}}>
            <StyledSidebarHeader>
                <StyledButton
                    onClick={()=>{
                        toggleLeftEdge()
                        }
                    }
                    $isClose = {leftEdge === 50}
                >
                    <FontAwesomeIcon icon={fas.faBars}/>
                </StyledButton>
            </StyledSidebarHeader>
            <h1 style={{textAlign: 'center', margin: "20px 0px"}}>
                <FontAwesomeIcon icon={fas.faKitchenSet} title="Logo de l'application"/> 
                {leftEdge === 200 && " Miam"}
            </h1>
            <StyledSidebarBody>
                <StyledLink to={"/"} $isSelected={((location.pathname.endsWith('/') || location.pathname.startsWith('/viewRecipe')) && !location.pathname.startsWith('/search'))} style={{justifyContent: (leftEdge !== 200) ? "center" : 'flex-start'}}><FontAwesomeIcon icon={fas.faBowlFood} style={{marginRight: (leftEdge === 200) && 10}}/>{leftEdge === 200 && "Recipes"}</StyledLink>
                <StyledLink to={"/search"} $isSelected={location.pathname.startsWith('/search')} style={{justifyContent: (leftEdge !== 200) ? "center" : 'flex-start'}}><FontAwesomeIcon icon={fas.faMagnifyingGlass} style={{marginRight: (leftEdge === 200) && 10}}/>{leftEdge === 200 && "Search"}</StyledLink>
                {isAdmin && <StyledLink to={"/admin/create"} $isSelected={location.pathname.startsWith('/admin/create')} style={{justifyContent: (leftEdge !== 200) ? "center" : 'flex-start'}}><FontAwesomeIcon icon={fas.faReceipt} style={{marginRight: (leftEdge === 200) && 10}}/>{leftEdge === 200 && "Add a recipe"}</StyledLink>}
                <StyledLink to={"/contact"} $isSelected={location.pathname.startsWith('/contact')} style={{justifyContent: (leftEdge !== 200) ? "center" : 'flex-start'}}>
                <FontAwesomeIcon icon={fas.faAddressCard} style={{ marginRight: (leftEdge === 200) && 10 }} />
                {leftEdge === 200 && "Contact"}
                </StyledLink>   
            </StyledSidebarBody>
            <StyledSidebarFooter>
                <img src={cooking} alt='' style={{width: "120%", objectFit: "cover"}}/>
            </StyledSidebarFooter>
        </StyledSidebar>
    );
}
export default Sidebar;