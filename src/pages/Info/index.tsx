import { HeaderSection } from '../common/sections/header'
import { FooterSection } from '../common/sections/footer'

import { BodySection } from './sections/body'
import { Main } from './styles'

export const InfoScreen = () => {
  return (
    <Main fluid className="min-vw-100 min-vh-100 p-2">
      <HeaderSection />
      <BodySection />
      <FooterSection />
    </Main>
  )
}

InfoScreen.displayName = 'InfoScreen'
