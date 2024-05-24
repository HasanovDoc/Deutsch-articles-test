import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import {block_1 , block_2, block_3, block_4} from "../../assets/blockQuestions"
import { useEffect, useState } from "react";

const Main=()=>{

    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);        
    }, []);


    const QuestionBlock = () =>{
        
        switch (hash) {
            case '#action1':
                return(<QuestionList>
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
            </QuestionList>)
                break;
            case '#action2':
                return(<QuestionList>
                {block_2.map((item)=>{
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
            </QuestionList>)
                break;

            case '#action3':
                return(<QuestionList>
                {block_3.map((item)=>{
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
            </QuestionList>)
                break;
            
            case '#action4':
                return(<QuestionList>
                {block_4.map((item)=>{
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
            </QuestionList>)
                break;
        
            default:
                console.log(hash)
                return(<QuestionList>
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
                </QuestionList>)
                break;
        }
    }

    return(
        <MainContainer>
            <Header/>
            {QuestionBlock()}
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
    gap: 4vh;
`;

const QuestionListItem = styled.div`
    max-height: 13vh;
    /* transition: all 2s ease-in-out; */
`;
