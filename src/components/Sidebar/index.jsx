import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { fas } from '@fortawesome/free-solid-svg-icons'
import {colors} from '../../utils/style/colors';
import { useContext} from 'react';
import { EdgeContext } from '../../utils/context';

const StyledSidebar = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.2s;
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
        ({isClose}) => !isClose ? `
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
function Sidebar(){
    const {leftEdge, toggleLeftEdge} = useContext(EdgeContext);

    return (
        <StyledSidebar style={{width: leftEdge}}>
            <StyledSidebarHeader>
                <StyledButton
                    onClick={()=>{
                        toggleLeftEdge()
                        }
                    }
                    isClose = {leftEdge === 50}
                >
                    <FontAwesomeIcon icon={fas.faBars}/>
                </StyledButton>
            </StyledSidebarHeader>
        </StyledSidebar>
    );
}
export default Sidebar;