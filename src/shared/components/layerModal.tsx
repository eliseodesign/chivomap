'use client'
import { usePathname, useRouter } from 'next/navigation'

export const LayerModal = () => {
  const path = usePathname()
  const router = useRouter()

  const isHome = path === '/'
  return (
    <div 
      onClick={()=>{
        router.push('/')
      }}
      className={`bg-black w-screen h-screen opacity-50 z-30 top-0 left-0 cursor-pointer ${isHome ? 'hidden' : 'fixed'}`}>  
    </div> 
  )
}
