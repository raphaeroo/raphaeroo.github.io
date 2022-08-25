import { Container, Col, Row } from 'react-bootstrap'
import { Plus, ArrowDownRight } from 'react-feather'
import { Link } from 'react-router-dom'

import { ItemContainer, MobileHeader, DesktopHeader } from './styles'

import { Text } from '~/components'
import { Colors } from '~/constants'

export const HeaderSection = () => {
  return (
    <header>
      <Container fluid>
        <DesktopHeader className="d-none d-md-block">
          <Row>
            <Col>
              <Link to="/">
                <ItemContainer size="w50">
                  <Text textKey="Raphael Freitas" fontSize="small" />
                </ItemContainer>
              </Link>
            </Col>
            <Col>
              <Row className="d-md-flex d-none">
                <Col className="justify-content-end">
                  <ItemContainer size="w100">
                    <Link to="#">
                      <div className="d-flex justify-content-between">
                        {/* <Text textKey="home.header.work" fontSize="small" />
                        <ArrowDownRight color={Colors.Secondary} /> */}
                      </div>
                    </Link>
                  </ItemContainer>
                </Col>
                <Col className="justify-content-end">
                  <ItemContainer size="w100">
                    <Link to="/info">
                      <div className="d-flex justify-content-between">
                        {/* <Text textKey="home.header.information" fontSize="small" />
                        <ArrowDownRight color={Colors.Secondary} /> */}
                      </div>
                    </Link>
                  </ItemContainer>
                </Col>
              </Row>
            </Col>
          </Row>
        </DesktopHeader>
        <MobileHeader className="d-block d-md-none">
          <Row>
            <Col>
              <Link to="/">
                <ItemContainer size="w100">
                  <Text textKey="Raphael Freitas" fontSize="small" />
                </ItemContainer>
              </Link>
            </Col>
            <Col>
              <ItemContainer size="w100">
                <div className="d-flex justify-content-between">
                  <Text textKey="home.header.menu" fontSize="small" />
                  <Plus color={Colors.Secondary} />
                </div>
              </ItemContainer>
            </Col>
          </Row>
        </MobileHeader>
      </Container>
    </header>
  )
}
