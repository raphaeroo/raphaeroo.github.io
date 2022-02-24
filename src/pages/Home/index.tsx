import { HeaderSection } from './sections/header'
import { BodySection } from './sections/body'
import { FooterSection } from './sections/footer'

import { Main } from './styles'

export const HomeScreen = () => {
  return (
    <Main fluid className="min-vw-100 min-vh-100 p-2">
      <HeaderSection />
      <BodySection />
      <FooterSection />
    </Main>
  )
}

HomeScreen.displayName = 'HomeScreen'
