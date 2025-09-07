import { Link } from '@tanstack/react-router'
import { Menu, House } from 'lucide-react'

interface ITopBarProps {
  setSideBarVisible: (sideBarVisibke: boolean) => void
}

const TopBar = ({ setSideBarVisible }: ITopBarProps) => {
  return (
    <nav className="h-14 bg-black flex items-center justify-between p-4">
      <Link to="/">
        <p className="text-white">
          <House />
        </p>
      </Link>
      <button
        className="text-white cursor-pointer"
        onClick={() => setSideBarVisible(true)}
      >
        <Menu />
      </button>
    </nav>
  )
}

export default TopBar
