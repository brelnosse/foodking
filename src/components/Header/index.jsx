import SearchBar from '../SearchBar';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    padding-left: 30px;
`;
function Header(){

    return (
        <StyledHeader>
            <SearchBar />
        </StyledHeader>
    );
}
export default Header;