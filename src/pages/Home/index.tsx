import { useEffect } from 'react'
import { HeaderSection } from '../common/sections/header'
import { FooterSection } from '../common/sections/footer'

import { BodySection } from './sections/body'

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
