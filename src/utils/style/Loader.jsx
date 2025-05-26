import styled, {keyframes} from "styled-components";
import { colors } from "./colors";

const spin = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    height: 40px;
    width: 40px;
    border: 8px solid ${colors.primary};
    border-top-color: transparent;
    animation: ${spin} linear 1s infinite;
    border-radius: 50%;
`;
