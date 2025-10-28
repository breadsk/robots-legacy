import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RobotsApp } from './RobotsApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RobotsApp />
  </StrictMode>,
)
