import { Container, Col, Row } from 'react-bootstrap'
import { Plus, ArrowDownRight } from 'react-feather'

import { ItemContainer, MobileHeader, DesktopHeader } from './styles'

import { Text } from '~/components'

export const HeaderSection = () => {
  return (
    <header>
      <Container fluid>
        <DesktopHeader className="d-none d-md-block">
          <Row>
            <Col>
              <ItemContainer size="w50">
                <Text textKey="Raphael Freitas" />
              </ItemContainer>
            </Col>
            <Col>
              <Row className="d-md-flex d-none">
                <Col className="justify-content-end">
                  <ItemContainer size="w100">
                    <div className="d-flex justify-content-between">
                      <Text textKey="Work" />
                      <ArrowDownRight color="#a4ffaf" />
                    </div>
                  </ItemContainer>
                </Col>
                <Col className="justify-content-end">
                  <ItemContainer size="w100">
                    <div className="d-flex justify-content-between">
                      <Text textKey="Information" />
                      <ArrowDownRight color="#a4ffaf" />
                    </div>
                  </ItemContainer>
                </Col>
              </Row>
            </Col>
          </Row>
        </DesktopHeader>
        <MobileHeader className="d-block d-md-none">
          <Row>
            <Col>
              <ItemContainer size="w100">
                <Text textKey="Raphael Freitas" />
              </ItemContainer>
            </Col>
            <Col>
              <ItemContainer size="w100">
                <div className="d-flex justify-content-between">
                  <Text textKey="Menu" />
                  <Plus color="#a4ffaf" />
                </div>
              </ItemContainer>
            </Col>
          </Row>
        </MobileHeader>
      </Container>
    </header>
  )
}
