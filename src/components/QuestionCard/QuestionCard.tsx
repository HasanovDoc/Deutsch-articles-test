import { useEffect, useState } from "react";
import styled from "styled-components";

interface IQuestionCard{
    eng_word: string
    questiodId: number
    children: string
    answer_1: string
    answer_2: string
}

interface ICheckBox{
    checked: boolean
    visible: boolean
}

interface IQuestionContainer {
    visible: boolean
}

const QuestionCard = ({eng_word, questiodId, children, answer_1, answer_2}:IQuestionCard) => {
    const variants = children.split(' ');
    const [checkedStates, setCheckedStates] = useState(variants.map(() => false));
    const [userInput, setUserInput] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = (index: number) => {
        setCheckedStates(checkedStates.map((checked, i) => i === index));
        if (userInput !== answer_1 || variants[index] !== answer_2) {
            // console.log('Ответ не засчитан');
        }
        else{
            setIsVisible(false);
            // console.log('Урааааааа Ответ засчитан!!!!!!!!!!');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return shouldRender ? (
        <QuestionCardContainer visible={isVisible}>
            <QuestionHeader>
                {eng_word}
            </QuestionHeader>
            <QuestionCardMain>
                <QuestionInputContainer>
                    <StyledInput placeholder="Введите перевод" onChange={handleInputChange}/>
                </QuestionInputContainer>
                <QuestionCardAnswersList>
                    {variants.map((item, index)=>{
                        return(
                            <CheckboxButton 
                            key={index}
                            checked={checkedStates[index]}
                            onClick={() => handleClick(index)}
                            visible={isVisible}
                            >
                                {item}
                            </CheckboxButton>
                        )
                    })}
                </QuestionCardAnswersList>
            </QuestionCardMain>
        </QuestionCardContainer>
    ):null;
};

export default QuestionCard;


const hideContainer = `
    transform: translateX(-100%);
    opacity: 0;
    display: none;
`;


const QuestionCardContainer = styled.div<IQuestionContainer>`
    transition: all 1s ease-in-out;
    ${props => props.visible ? `` : `${hideContainer}`};
    margin: 5vh 5vw;
    width: 30vw;
    height: 13vh;
    padding: 2px 5px;
    background-color: rgba(255,255,255,0.13);
    backdrop-filter: blur(3px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const QuestionHeader = styled.div`
    font-size: 25px;
    display: flex;
    color: white;
    text-transform: capitalize;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    /* padding: 2px 5px; */
`

const QuestionCardMain = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    /* margin-top: 5%; */
    /* padding: 2px 5px; */
`

const QuestionInputContainer = styled.div`
    
`

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #5546c5;
  border-radius: 4px;
  outline: none;
  /* color: white; */
  transition: all 0.3s ease-in-out;
  /* background-color: cyan; */
  /* background-color: black; */
  opacity: 0.72;

  &:focus {
    /* border-color: purple; */
    opacity: 0.9;
    box-shadow: 0 0 5px #5546c5;
  }
`;

const QuestionCardAnswersList = styled.div`
    display: flex;
    max-width: 50%;
`;

const CheckboxButton = styled.button<ICheckBox>`
  background-color: ${props => props.checked ? (props.visible ? 'red' : 'green') : 'rgba(255,255,255,0.27)'};
  /* background-color: rgba(255, 255, 255, 0.496); */
  color: white;
  opacity: 0.85;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 3px;
  scale: ${props => props.checked ? '110%' : '100%'};
  &:hover{
    opacity: 1;
    scale: 110%;
  }
`;