import { Link } from '@tanstack/react-router'
import { Play } from 'lucide-react'

const Index = () => {
  return (
    <div className="w-full p-10 flex flex-col items-center justify-center text-4xl font-bold">
      <div>
        <h1>WORDS</h1>
      </div>
      <div className="my-6">
        <Link to="/words">
          <p className="flex text-2xl items-center">
            PLAY
            <Play />
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Index
