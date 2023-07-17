import { MapView, BtnCenter } from './components'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline fixed z-30 mx-[50px] my-4">ChivoMap</h1>
      <p>Project in progress</p>
      <MapView />
      <BtnCenter />
    </>
  )
}