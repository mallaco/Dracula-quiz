import styled from 'styled-components';
import db from '../../db.json';

const BackgroundQuiz = styled.div`

  display:flex;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${db.bg});
  color: white;
`;

export default BackgroundQuiz;
