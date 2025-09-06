import { createFileRoute } from '@tanstack/react-router'
import AddWords from '../components/pages/addWords'

export const Route = createFileRoute('/add-words')({
  component: AddWords,
})
