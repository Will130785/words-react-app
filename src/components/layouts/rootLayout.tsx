import { useState } from 'react'
import { Outlet } from '@tanstack/react-router'
import TopBar from '../global/navigation/topBar'
import SideBar from '../global/navigation/sideBar'

const RootLayout = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false)
  return (
    <div className="h-screen bg-slate-800 text-white">
      <TopBar setSideBarVisible={setSideBarVisible} />
      {sideBarVisible && <SideBar setSideBarVisible={setSideBarVisible} />}
      <div className="p-10 flex justify-center">
        <div className="w-full max-w-[900px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default RootLayout
