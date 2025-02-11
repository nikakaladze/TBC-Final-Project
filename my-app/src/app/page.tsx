import { getCurrentSession } from "@/actions/auth";
import Header from "@/components/layout/Header";
import Image from "next/image";


const Home = async () => {
    const {user} = await getCurrentSession();

    return(
        <>
        <div>

            {JSON.stringify(user)}
        </div>
        <Header user={user}/>
        </>
    )
}

export default Home;
