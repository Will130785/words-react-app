import { createFileRoute } from '@tanstack/react-router'
import Words from '../components/pages/words'

export const Route = createFileRoute('/words')({
  component: Words,
})
