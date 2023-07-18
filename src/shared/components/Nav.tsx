import { LinksContainer } from './Links'
export const Nav = () => {
  return (
    <nav className="px-7 bg-primary shadow-lg max-w-md rounded-xl">
      <div className="flex">
        <LinksContainer />
      </div>
    </nav>
  )
}