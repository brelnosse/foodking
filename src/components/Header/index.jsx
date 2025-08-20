import { useContext, useEffect, useRef, useState } from 'react';
import Actions from '../Actions';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import { EdgeContext } from '../../utils/context';
import GobackBtn from '../GobackBtn';
import { useLocation } from 'react-router-dom';
import Modal from '../Modal';

const StyledHeader = styled.div`
    background-color: transparent;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    z-index: 99;
    padding-left: 30px;
    padding-right: 30px;
    position: fixed;
    top: 0px;
    @media (max-width: 700px){
        padding-left: 10px;
        padding-right: 10px;
    }    
`;
function Header(){
    const {leftEdge} = useContext(EdgeContext);
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
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
            <Actions/>
        </StyledHeader>
    );
}
export default Header;