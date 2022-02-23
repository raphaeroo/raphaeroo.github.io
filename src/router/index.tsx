import { Routes, Route } from 'react-router-dom'

import { HomeScreen } from '../pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  )
}
