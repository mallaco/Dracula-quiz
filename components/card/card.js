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

Card.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.purple}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Card;
