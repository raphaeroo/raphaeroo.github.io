import { HeaderSection } from './sections/header'

import { Main } from './styles'

export const HomeScreen = () => {
  return (
    <Main fluid className="min-vw-100 min-vh-100 p-2">
      <HeaderSection />
    </Main>
  )
}

HomeScreen.displayName = 'HomeScreen'
