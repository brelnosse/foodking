import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { colors } from "../../utils/style/colors";

const StyledGobackBtn = styled(Link)`
    color: ${colors.black};
    font-size: 1.3em;
    padding: 16px 20px;
    border-radius: 50%;
    transition: all 0.3s;
    margin-right: 10px;
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
            <StyledGobackBtn onClick={handleGoback}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </StyledGobackBtn>
    );
}
export default GobackBtn;