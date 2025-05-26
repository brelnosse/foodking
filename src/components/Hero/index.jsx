import styled from 'styled-components';

const StyledHero = styled.div`
    padding: 30px 30px;
`;
function Hero(){
    return (
        <StyledHero>
            <h1>Learn, Cook, & Eat your food</h1>
        </StyledHero>
    );
}
export default Hero;