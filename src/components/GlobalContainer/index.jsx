import { useContext } from 'react';
import styled from 'styled-components';
import { EdgeContext } from '../../utils/context';
import { colors } from '../../utils/style/colors';

const StyledGlobalContainer = styled.div`
    background-color: ${colors.smokeWhite};
    height: 100vh;
    overflow: auto;
    overflow-x: hidden;
`;
function GlobalContainer({children}){
    const {leftEdge, toggleLeftEdge} = useContext(EdgeContext);

    return (
        <StyledGlobalContainer style={{paddingLeft: leftEdge}}>
            {children}
        </StyledGlobalContainer>
    );
}
export default GlobalContainer;