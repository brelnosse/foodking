import {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const SearchBarContainer = styled.div`
    background-color: ${colors.blue};
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid ${colors.borderColor};
`;

const StyledSearchBar = styled.input`
    height: 100%;
    width: ${colors.maxPadding};
    padding: 10px;
    padding-left: 20px;
    border: none;
    background-color: ${colors.white}
`;

const StyledSearchBtn = styled(Link)`
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: 0px 15px;
    cursor: pointer;
    color: black;
    border: none;
    background-color: ${colors.white}
`;
function SearchBar(){
    const [search, setSearch] = useState("");

    return (
        <SearchBarContainer>
            <StyledSearchBar 
                placeholder="Search recipes..." 
                defaultValue = {search}
                onInput={(e)=> setSearch(e.target.value)} />
            <StyledSearchBtn to={`/search/${search}`}><FontAwesomeIcon icon={fas.faSearch}/></StyledSearchBtn>
        </SearchBarContainer>
    );
}
export default SearchBar;