import styled from "styled-components";
import Button from "../Button";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

function Actions(){
    return (
        <StyledAction>
            <Button isPrimary={true}><FontAwesomeIcon icon={fas.faStar}/></Button>
        </StyledAction>
    );
}
export default Actions;