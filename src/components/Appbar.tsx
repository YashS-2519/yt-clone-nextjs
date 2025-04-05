import { Searchbar } from "./Searchbar";

export const Appbar = () => {
  return (
    <div className="flex justify-between p-3">
      <div className="text-md inline-flex items-center pb-2" >Youtube</div>
      <div>
        <Searchbar />
      </div>
      <div>Sign in</div>
    </div>
  )
}
