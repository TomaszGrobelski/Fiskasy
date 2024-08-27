import React from 'react'

interface IMainContainer{
    children: React.ReactNode
}
const MainContainer = ({children}:IMainContainer) => {
  return (
    <div className=' relative max-w-[1000px] sm:max-w-[1920px] mx-auto xl:px-[143px] overflow-x-clip'>{children}</div>
  )
}

export default MainContainer