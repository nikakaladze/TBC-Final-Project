import { getCurrentSession } from "@/actions/auth";
import Header from "@/components/layout/Header";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import ProductGrid from "@/components/product/page";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const Home = async () => {
    const {user} = await getCurrentSession();
    const products = await getAllProducts();

return(
    <div>
        
        <SalesCampaignBanner />

        <section className="container mx-auto py-8">
            <ProductGrid  products={products}/>

        </section>
    </div>
)   
}

export default Home;
