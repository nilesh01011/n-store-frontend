import Wrapper from '@/components/Wrapper'
import HeroBanner from '@/components/HeroBanner'
import ProductCard from '@/components/ProductCard'
import { fetchDataFromApi } from '@/utils/api';

export default function Home({ products }) {

  return (
    <Wrapper>
      <main className="">
        {/* banner */}
        <HeroBanner />
        {/* contents */}
        <Wrapper className='px-0'>
          {/* heading and paragraph start */}
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Cushioning for Your Miles
            </div>
            <div className="text-md md:text-xl">
              A lightweight Nike ZoomX midsole is combined with
              increased stack heights to help provide cushioning
              during extended stretches of running.
            </div>
          </div>
          {/* heading and paragraph end */}
          {/* products grid start */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
            {products?.data?.map((product) => (
              <ProductCard key={product?.id} data={product} />
            ))}
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
          {/* products grid end */}
        </Wrapper>
      </main>
    </Wrapper>
  )
}

export async function getStaticProps() {
  // ?populate=* means fetch all the data from strapi

  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}