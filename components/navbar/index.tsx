import { Button } from "../ui/button"
import Link from "next/link"

function Navbar() {
  return (
    <div className='flex justify-around items-center px-8 py-2 backdrop-blur-sm border-[#2f2f2f] border-b-[0.5px] sticky top-0 z-10' >
        <div className="">
            <h2 className="text-xl text-[#e9eaeb]">100xDevs Projects</h2>
        </div>
        <div className="flex items-center text-center gap-32 text-[#9ba3b4] bg-[#1a1a1a] px-20 py-2 rounded-full ">   
          <h2 className="hover:text-[#e9eaeb]"><Link href="/">Home</Link></h2>
          <h2 className="hover:text-[#e9eaeb]"> <Link href="/view">View</Link></h2>
          <h2 className="hover:text-[#e9eaeb]"><Link href="/post">Post</Link></h2>
        </div>
      <div className="flex gap-5">
        <Button className="bg-red-500 px-5 hover:bg-red-800"><Link href="/auth">Login / Sign Up</Link></Button>
      </div>
    </div>
  )
}

export default Navbar
