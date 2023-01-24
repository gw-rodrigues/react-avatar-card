import React from 'react'
import ReactDOM from 'react-dom/client'
import { CardContextProvider } from './contexts/CardContext'
import { CardList } from './pages/cardList'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardContextProvider>
      <CardList />
    </CardContextProvider>
  </React.StrictMode>,
)
