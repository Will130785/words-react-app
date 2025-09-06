import { createFileRoute } from '@tanstack/react-router'
import Index from '../components/pages'

export const Route = createFileRoute('/')({
  component: Index,
})
