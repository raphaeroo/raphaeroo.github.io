import { Link } from './styles'

import { StorageService } from '~/services'
import { StorageKeys } from '~/constants'

export const FooterSection = () => {
  return (
    <footer className="d-flex">
      <Link
        selected={StorageService.get(StorageKeys.Language) === 'pt-BR'}
        onClick={() => {
          StorageService.set(StorageKeys.Language, 'pt-BR')
          window.location.reload()
        }}>
        Português
      </Link>
      <div style={{ margin: '0 10px' }} />
      <Link
        selected={StorageService.get(StorageKeys.Language) === 'en-US'}
        onClick={() => {
          StorageService.set(StorageKeys.Language, 'en-US')
          window.location.reload()
        }}>
        English
      </Link>
    </footer>
  )
}
