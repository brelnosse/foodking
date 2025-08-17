import styled from "styled-components";
import { colors } from "../../utils/style/colors";

const Header = styled.div`
    top: 0px;
    left: 0px;
    background-color: ${colors.white};
    width: 100%;
`;

const UserInfo = styled.div`
    display: grid;
    grip-template-columns: 90px 200px;
    grid-template-rows: 50px 20px;
    grid-template-areas: 
        "profile username"
        "profile actions"
    ;
`;

const Profile = styled.img`
    grid-area: profile;
`;
const Username = styled.h3`
    grid-area: username;
`;
const Actions = styled.p`
    grid-area: actions;
`;

export default function AdminHeader(){
    return (
        <Header>
            <UserInfo>
                <Profile src={require('../../assets/cooking.png')} height={50}/>
                <Username>NOSSE KENNE Brel</Username>
                <Actions>Add a receip</Actions>
            </UserInfo>
        </Header>
    );
}