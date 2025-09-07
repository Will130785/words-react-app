import { X } from 'lucide-react'
import CustomLink from './link'

interface ISideBarProps {
  setSideBarVisible: (sideBarVisible: boolean) => void
}

const SideBar = ({ setSideBarVisible }: ISideBarProps) => {
  return (
    <nav className="fixed top-0 bottom-0 left-0 right-0 bg-black p-6">
      <div className="flex justify-end">
        <button
          onClick={() => setSideBarVisible(false)}
          className="text-white cursor-pointer"
        >
          <X />
        </button>
      </div>
      <div className="my-10 flex flex-col">
        <CustomLink
          link="/"
          text="HOME"
          handler={() => setSideBarVisible(false)}
        />
        <CustomLink
          link="/words"
          text="PLAY"
          handler={() => setSideBarVisible(false)}
        />
        <CustomLink
          link="/view-words"
          text="VIEW WORDS"
          handler={() => setSideBarVisible(false)}
        />
        <CustomLink
          link="/add-words"
          text="ADD WORDS"
          handler={() => setSideBarVisible(false)}
        />
      </div>
    </nav>
  )
}

export default SideBar
