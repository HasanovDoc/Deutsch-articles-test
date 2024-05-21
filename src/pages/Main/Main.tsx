import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import {block_1} from "../../assets/block-1"

const Main=()=>{
    return(
        <MainContainer>
            <Header/>
            <QuestionList>
                {block_1.map((item)=>{
                    return (
                        <QuestionListItem>
                            <QuestionCard 
                            eng_word={item.eng_word} 
                            questiodId={item.id} 
                            children={item.article_list} 
                            answer_1={item.de_word} 
                            answer_2={item.answer} />
                        </QuestionListItem>
                    )
                })
                }
            </QuestionList>
        </MainContainer>
    )
};

export default Main

const MainContainer = styled.div`
    max-height: 100vh;
    max-width: 100vw;
    
    /* background-color: #2c3e50;  */
`;

const QuestionList = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const QuestionListItem = styled.div`

`;
