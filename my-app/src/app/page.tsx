import { getCurrentSession } from "@/actions/auth";
import Header from "@/components/layout/Header";
import { getAllProducts } from "@/sanity/lib/client";
import Image from "next/image";


const Home = async () => {
    const {user} = await getCurrentSession();
    const products  = await getAllProducts()
    return(
        <>
        <div>

            {JSON.stringify(products)}
        </div>
        <Header user={user}/>
        </>
    )
}

export default Home;
