import NavBarItem from "./navBarItem";

export default function NavBar() {
  return (
    <div className="flex justify-center bg-amber-100 lg:text-lg p-4">
        <NavBarItem title="트랜드" param="fetchTrending"></NavBarItem>
        <NavBarItem title="순위" param="fetchTopRated"></NavBarItem>
    </div>
  )
}
