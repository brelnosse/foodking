import styled from "styled-components";
import { colors } from "../../utils/style/colors";
import { keyframes } from "styled-components";

const line = keyframes`
    from{
        background-position: 0% 0%;
    }
    to{
        background-position: 100% 100%;
    }
`;
const Category = styled.span`
    text-transform: capitalize;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    background-color: none;
    padding: 25px 50px;
    border-radius: 50px;
    color: ${colors.borderColor};
    cursor: pointer;
    transition: all 0.2s;
    background-image: linear-gradient(to left, rgba(209, 209, 209, 1), rgba(239, 239, 239, 1));
    background-size: 150% 150%;
    animation: ${line} linear infinite 1s;
`;
export default function HintCategory(){
    return (
        <Category>
            <span style={{}}></span>
        </Category>
    );
}