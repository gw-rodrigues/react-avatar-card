import { useContextSelector } from 'use-context-selector'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CardContext } from '../../contexts/CardContext'
import { Card } from './card'

export function CardList() {
  return (
    <main className="flex flex-col items-center min-w-full min-h-screen text-base bg-gradient-to-b from-sky-500 to-slate-900">
      <Header />
      <Card />
      <Footer />
    </main>
  )
}
