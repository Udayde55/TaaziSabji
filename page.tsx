import { getCategories, getProducts } from "@/lib/data";
import { Hero, Categories, NearbySellers, Offers, WhyUs, MapSection } from "@/components/home/HomeSections";
import HomeTitles from "@/components/home/HomeTitles";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [cats, all] = await Promise.all([getCategories(), getProducts({ sort: "popular" })]);
  const featured = all.slice(0, 8);
  const seasonal = all.filter((p) => p.seasonal).slice(0, 4);
  const bestSellers = [...all].sort((a, b) => b.sold - a.sold).slice(0, 4);

  return (
    <div className="pb-8">
      <Hero />
      <Categories cats={cats} />
      <HomeTitles featured={featured} seasonal={seasonal} bestSellers={bestSellers} />
      <Offers />
      <NearbySellers />
      <WhyUs />
      <MapSection />
    </div>
  );
}
