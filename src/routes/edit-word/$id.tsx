import { createFileRoute } from '@tanstack/react-router'
import EditWord from '../../components/pages/editWord'

export const Route = createFileRoute('/edit-word/$id')({
  component: EditWord,
})
