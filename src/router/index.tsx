import { Routes, Route } from 'react-router-dom'

import { HomeScreen, InfoScreen } from '../pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/info" element={<InfoScreen />} />
    </Routes>
  )
}
