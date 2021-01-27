import styled from 'styled-components';

const Card = styled.div`

margin-top: 24px;
border-radius: 4px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 18px;
    text-align: justify;
    font-weight: 500;
    line-height: 1;
    color: ${({ theme }) => theme.colors.foreground};
  }
  input{
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 10px 0 20px 0;
    color: ${({ theme }) => theme.colors.foreground};
    border: 1px solid ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors.background};
  }
  button{
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.foreground};
    background-color: ${({ theme }) => theme.colors.purple};
  }
  button:disabled{
    
    background-color: ${({ theme }) => theme.colors.CurrentLine};
  }

`;

Card.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  background-color: ${({ theme }) => theme.colors.purple};
  
  * {
    margin: 0;
  }
`;

Card.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Card;
