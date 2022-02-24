import { styled } from '@stitches/react'
import { Colors } from '~/constants'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const RightContainer = styled('div', {})

export const Separator = styled('div', {
  margin: '0 10px'
})

export const Hero = styled('h1', {
  color: Colors.White,
  fontFamily: 'Orbitron'
})
