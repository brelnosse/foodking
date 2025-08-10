import {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
const SearchBarContainer = styled.div`
    background-color: ${colors.smokeWhite};
    height: 50px;
    width: 300px;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 8px rgba(0,0,0,0.01);
    overflow: hidden;
`;

const StyledSearchBar = styled.input`
    height: 100%;
    width: 300px;
    padding: 10px;
    padding-left: 20px;
    border: none;
    background-color: ${colors.white}
`;

const StyledSearchBtn = styled.button`
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
    const {MealName} = useParams();
    const navigate = useNavigate();
    return (
        <SearchBarContainer>
            <StyledSearchBar 
                placeholder="Search recipes..." 
                defaultValue = {MealName !== '' ? MealName : search}
                onInput={(e)=> setSearch(e.target.value)} />
            <StyledSearchBtn 
            onClick={()=>{
                navigate('/search/'+search)
            }}
            disabled={search.trim() === '' ? true : false}
            ><FontAwesomeIcon icon={fas.faSearch}/></StyledSearchBtn>
        </SearchBarContainer>
    );
}
export default SearchBar;