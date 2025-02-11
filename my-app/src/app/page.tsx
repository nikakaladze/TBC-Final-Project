import { getCurrentSession } from "@/actions/auth";
import Header from "@/components/layout/Header";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const Home = async () => {
    const {user} = await getCurrentSession();
return(
    <div>
        <SalesCampaignBanner />

        <section className="container mx-auto py-8">
            {/* <ProductGrid /> */}

        </section>
    </div>
)   
}

export default Home;
