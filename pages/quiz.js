import React from 'react';
import db from '../db.json';
import BackgroundQuiz from '../components/backgroundQuiz/backgroundQuiz';
import QuizContainer from '../components/quizContainer/quizContainer';
import Card from '../components/card/card';
import GitHubCorner from '../components/gitHubCorner/gitHubCorner';
import Button from '../components/Button/button';
import LoadingWidget from '../components/loadingCard/loadingCard';

export default function QuizPage() {

  const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };

  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const questionTotal = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const questionID = `question__${questionIndex}`;
  const question = db.questions[questionIndex];

  React.useEffect(() => {

    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questionTotal) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <BackgroundQuiz>
      <QuizContainer>
        <Card>
          {screenState === screenStates.QUIZ && (
            <>
              <Card.Header>
                <h1>{`Questão ${questionIndex + 1} de ${questionTotal}`}</h1>
              </Card.Header>
              <img
                alt="Descrição"
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                }}
                src="https://placehold.it/400x400"
              />
              <Card.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                <form onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}>
                  {question.alternatives.map((alternative, alternativeIndex) => {
                    const alternativeId = `alternative__${alternativeIndex}`;
                    return (
                      <Card.Topic
                        as="label"
                        htmlFor={alternativeId}
                      >
                        <input
                          // style={{ display: 'none' }}
                          id={alternativeId}
                          name={questionID}
                          type="radio"
                        />
                        {alternative}
                      </Card.Topic>
                    );
                  })}

                  <Button type="submit">CONFIRMAR</Button>
                </form>
              </Card.Content>
            </>
          )}
          {screenState === screenStates.LOADING && <LoadingWidget />}

          {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
        </Card>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mallaco/" />
    </BackgroundQuiz>
  );
}
