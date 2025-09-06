interface ITopBarProps {
  setSideBarVisible: (sideBarVisibke: boolean) => void
}

const TopBar = ({ setSideBarVisible }: ITopBarProps) => {
  return (
    <nav className="h-14 bg-black flex items-center justify-between p-4">
      <p className="text-white">WORDS</p>
      <button className="text-white" onClick={() => setSideBarVisible(true)}>
        MENU
      </button>
    </nav>
  )
}

export default TopBar
