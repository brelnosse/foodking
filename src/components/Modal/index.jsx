import styled from "styled-components";
import { colors } from "../../utils/style/colors";

const ModalContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.2);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledModal = styled.div`
    height: 90%;
    width: 90%;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
`;

const FavContainer = styled.div`
    background-color: ${colors.smokeWhite};
    padding: 5px;
    border-radius: 5px;
`;

const CloseModal = styled.span`
    background-color: ${colors.white};
    padding: 18px 20px;
    border-radius: 50%;
    transition: all 0.2s;
    cursor: pointer;
    &:hover{
        background-color: ${colors.smokeWhite};
    }
`;

export default function Modal({isVisible, setIsVisible}){
    return (isVisible &&
        <ModalContainer>
            <StyledModal>
                <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}>
                    Your favorites
                    <CloseModal 
                        style={{fontSize: '0.5em'}}
                        onClick={()=>{
                            setIsVisible(false)
                        }}>X</CloseModal>
                </h1>
                <FavContainer>
                    <p>bonjour</p>
                </FavContainer>
            </StyledModal>
        </ModalContainer>
    );
}