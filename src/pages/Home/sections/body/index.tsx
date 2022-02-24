import { Plus, GitHub, Linkedin } from 'react-feather'
import { Row } from 'react-bootstrap'
import { Container, RightContainer, Separator, Hero } from './styles'

import { Text, Button } from '~/components'
import { Colors } from '~/constants'

export const BodySection = () => {
  return (
    <Row className="flex-grow-1 align-items-md-center justify-content-md-around g-0">
      <Container className="col-12 col-sm-12 col-md-6">
        <Hero className="home-hero">
          React Native Developer <br />
          <Plus color={Colors.Secondary} width={90} height={90} />
          Tech Lead
        </Hero>
      </Container>
      <RightContainer className="col-12 col-sm-12 col-md-4">
        <Text textKey="home.body.text" variant="P" />
        <div className="d-flex">
          <a href="https://github.com/raphaeroo" target="_blank" rel="noreferrer">
            <Button compact>
              <GitHub />
            </Button>
          </a>
          <Separator />
          <a
            href="https://www.linkedin.com/in/o-raphaelfreitas-dev/"
            target="_blank"
            rel="noreferrer">
            <Button compact>
              <Linkedin />
            </Button>
          </a>
        </div>
      </RightContainer>
    </Row>
  )
}
