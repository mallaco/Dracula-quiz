import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import BackgroundQuiz from '../components/backgroundQuiz/backgroundQuiz';
import QuizContainer from '../components/quizContainer/quizContainer';
import Card from '../components/card/card';
import Footer from '../components/footer/footer';
import GitHubCorner from '../components/gitHubCorner/gitHubCorner';
import Input from '../components/inputBase/InputBase';
import Button from '../components/Button/button';

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
                  //nao deixa com que o evento padrão faça a pagina recarregar
                  event.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }
              }>
                <Input placeholder="Diga seu nome para jogar :)"
                  onChange={(event) => { setName(event.target.value) }}>
                </Input>
                <Button type="submit" onChange="event.tag" disabled={name.length === 0}>
                  {`Vamos Jogar ${name} :)`}
                </Button>
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
