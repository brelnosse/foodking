import { useContext, useEffect, useRef } from 'react';
import Actions from '../Actions';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import { EdgeContext } from '../../utils/context';
import GobackBtn from '../GobackBtn';
import { useLocation } from 'react-router-dom';

const StyledHeader = styled.div`
    background-color: transparent;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    z-index: 99;
    padding-left: 30px;
    padding-right: 30px;
    position: fixed;
    top: 0px;
`;
function Header(){
    const {leftEdge} = useContext(EdgeContext);
    const location = useLocation();
    const ref = useRef();
    function setWith(){
        if(ref.current){
            ref.current.style.width = (window.innerWidth - leftEdge)+'px';
        }
    }
    useEffect(()=>{
        setWith();
    }, [leftEdge])
    window.onresize = () =>{
        setWith()
    };
    return (
        <StyledHeader ref={ref}>
            {!location.pathname.endsWith('/') && <GobackBtn />}
            {(location.pathname.startsWith('/search') || location.pathname.endsWith('/'))  && <SearchBar />}
            <Actions />
        </StyledHeader>
    );
}
export default Header;