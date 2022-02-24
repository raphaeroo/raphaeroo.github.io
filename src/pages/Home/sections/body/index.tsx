import { Plus } from 'react-feather'
import { Container } from './styles'

export const BodySection = () => {
  return (
    <section className="d-flex flex-grow-1 align-items-center justify-content-center flex-column">
      <Container>
        <h1 style={{ color: 'white', zIndex: 2, fontSize: 105, fontFamily: 'Orbitron' }}>
          React Native Developer <br />
          <Plus color="#a4ffaf" width={90} height={90} />
          Tech Lead
        </h1>
      </Container>
      {/* <div className="container">
        <h2 style={{ color: 'white', zIndex: 2, fontSize: 30, fontFamily: 'Jost' }}>
          Raphael Freitas
        </h2>
      </div> */}
    </section>
  )
}
