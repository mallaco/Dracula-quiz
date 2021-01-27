import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BackgroundQuiz from '../components/backgroundQuiz/backgroundQuiz';
import QuizContainer from '../components/quizContainer/quizContainer';
import Card from '../components/card/card';
import db from '../db.json';
import Footer from '../components/footer/footer';
import GitHubCorner from '../components/gitHubCorner/gitHubCorner';

export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <BackgroundQuiz>
        <QuizContainer>
          <Card>
            <Card.Header>
              <h1>{db.title}</h1>
            </Card.Header>
            <Card.Content>
              <p>{db.description}</p>
              <form onSubmit={
                function (event) {
                  event.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }
              }>
                <input
                  onChange={function (event) {
                    setName(event.target.value)
                  }} 
                  placeholder="Diga seu nome para jogar :)">
                  </input>
                <button type="submit" onChange="event.tag" disabled={name.length === 0}>Vamos Jogar {name} :)</button>
              </form>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <p>{db.description}</p>
            </Card.Content>
          </Card>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/mallaco/" />
      </BackgroundQuiz>
    </>
  );
}
