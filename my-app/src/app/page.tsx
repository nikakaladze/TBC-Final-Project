import Header from "@/components/layout/Header";
import Image from "next/image";

const AnnouncementBar: any = () => {
  return(
    <div className="w-full  bg-black py-2">
      <div className="container mx-auto flex items-center justify-center"></div>
    </div>
  )
}

export default function Home() {

 return(
  <>
  <p>Home</p>
  <Header />
  </>
 )
}
