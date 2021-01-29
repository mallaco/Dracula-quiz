import Card from "../card/card";
import react from 'react';
import db from '../../db.json'
//import gif from '../../images/loadindGif'; 

export default function LoadingWidget() {
    return (
      <Card>
        <Card.Header>
          Carregando...
        </Card.Header>
  
        <Card.Content>
          <img src={db.loadingGif} alt="gifLoading" width="100%" height="200px"></img>
        </Card.Content>
      </Card>
    );
  }