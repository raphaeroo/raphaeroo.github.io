import { useEffect } from 'react'
import { HeaderSection } from './sections/header'
import { BodySection } from './sections/body'
import { FooterSection } from './sections/footer'

import { Main } from './styles'
import { StorageService } from '~/services'
import { StorageKeys } from '~/constants'

export const HomeScreen = () => {
  useEffect(() => {
    const x = StorageService.get(StorageKeys.Language)

    console.log('LANGUAGE', x)
  }, [])

  return (
    <Main fluid className="min-vw-100 min-vh-100 p-2">
      <HeaderSection />
      <BodySection />
      <FooterSection />
    </Main>
  )
}

HomeScreen.displayName = 'HomeScreen'
