import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { colors } from "../../utils/style/colors";

const SytledGobackbtnContainer = styled.div`
    background-color:transparent;
    padding: 20px 30px;
`;
const StyledGobackBtn = styled(Link)`
    color: ${colors.black};
    font-size: 1.3em;
    padding: 16px 20px;
    border-radius: 50%;
    transition: all 0.3s;
    &:hover{
    background-color: rgba(0,0,0,0.1);
    }
`;
function GobackBtn(){
    const navigate = useNavigate();

    const handleGoback = () => {
        navigate(-1);
    }
    return (
        <SytledGobackbtnContainer>
            <StyledGobackBtn 
                onClick={handleGoback}
            >
                <FontAwesomeIcon icon={faArrowLeft}/>
            </StyledGobackBtn>
        </SytledGobackbtnContainer>
    );
}
export default GobackBtn;