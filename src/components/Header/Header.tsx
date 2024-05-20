import styled from "styled-components";

export const Header=()=>{
    return(
        <HeaderContainer>
            <HaderWrapper>
                
            </HaderWrapper>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
    max-width: 100%;
    width: 100%;
    max-height: 10vh;
    height: 10vh;
    background-color: #58587f67;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`;

const HaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`