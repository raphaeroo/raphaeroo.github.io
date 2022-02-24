import { styled } from '@stitches/react'
import { Container } from 'react-bootstrap'
import { Colors } from '~/constants'

export const Main = styled(Container, {
  backgroundColor: Colors.Background,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})
