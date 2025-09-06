import { Link } from '@tanstack/react-router'

interface ISideBarProps {
  setSideBarVisible: (sideBarVisible: boolean) => void
}

const SideBar = ({ setSideBarVisible }: ISideBarProps) => {
  return (
    <nav className="fixed top-0 bottom-0 left-0 right-0 bg-black p-6">
      <div>
        <button onClick={() => setSideBarVisible(false)} className="text-white">
          CLOSE
        </button>
      </div>
      <div className="my-10 flex flex-col">
        <Link to="/" onClick={() => setSideBarVisible(false)}>
          HOME
        </Link>
        <Link to="/words" onClick={() => setSideBarVisible(false)}>
          PLAY
        </Link>
        <Link to="/view-words" onClick={() => setSideBarVisible(false)}>
          VIEW WORDS
        </Link>
        <Link to="/add-words" onClick={() => setSideBarVisible(false)}>
          ADD WORDS
        </Link>
      </div>
    </nav>
  )
}

export default SideBar
