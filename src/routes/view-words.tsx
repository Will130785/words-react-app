import { createFileRoute } from '@tanstack/react-router'
import ViewWords from '../components/pages/viewWords'

export const Route = createFileRoute('/view-words')({
  component: ViewWords,
})
