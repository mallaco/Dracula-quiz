import Card from "../card/card";
import react from 'react';

export default function LoadingWidget() {
    return (
      <Card>
        <Card.Header>
          Carregando...
        </Card.Header>
  
        <Card.Content>
          [Desafio do Loading]
        </Card.Content>
      </Card>
    );
  }