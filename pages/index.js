import BackgroundQuiz from '../components/backgroundQuiz/backgroundQuiz'
import QuizContainer from '../components/quizContainer/quizContainer'
import Card from '../components/card/card'
import db from '../db.json'
import Footer from '../components/footer/footer'
import GitHubCorner from '../components/gitHubCorner/gitHubCorner'


export default function Home() {
  return (
    <BackgroundQuiz>
      <QuizContainer>
        <Card>
          <Card.Header>
            <h1>{db.title}</h1>
          </Card.Header>
          <Card.Content>
            <p>{db.description}</p>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <h1>{db.title}</h1>
          </Card.Header>
          <Card.Content>
            <p>{db.description}</p>
          </Card.Content>
        </Card>
        
      <Footer></Footer>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </BackgroundQuiz>
  )
}
