import styled from "styled-components";
import { HeaderLogo } from '../../assets/HeaderLogo'
import Dropdown from "../Dropdown/Dropdown";

export const Header=()=>{
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLeft>
                    <HeaderLogo/>
                    <HeaderTitle>Test for German articles</HeaderTitle>
                </HeaderLeft>   
                
                <HeaderRight>
                    {/* <BlockCard></BlockCard> */}
                    <Dropdown children="Выбери блок"/>
                </HeaderRight>   
            </HeaderWrapper>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
    max-width: 100%;
    width: 100%;
    max-height: 10vh;
    height: 10vh;
    background-color: #58587f67;
    backdrop-filter: blur(5px);
    box-shadow: 0 10px 10px -3px black;
`;

const HeaderWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5vw;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
    svg{
        width: 4vw;
        height: 4vw;
    }
`;

const HeaderTitle = styled.div`
    color: white;
    font-size: 1.5rem; 
`;

const HeaderRight = styled.div``;
