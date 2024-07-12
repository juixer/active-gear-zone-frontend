import Slider from "@/components/Carousel/Slider";
import CategoryCarouSel from "@/components/CategoryCarousel/CategoryCarouSel";
import ContactUs from "@/components/ContactUs/ContactUs";
import Container from "@/components/layout/Container";
import { useGetLatestProductQuery } from "@/redux/features/product/product.api";
import Headline from "@/utils/Headline/Headline";
import HelmetElement from "@/utils/Helmet/HelmetElement";
import LoadingAni from "@/utils/LoadingAni/LoadingAni";
import ProductCard, { TProduct } from "@/utils/ProductCard/ProductCard";
const Home = () => {
  // LEAST PRODUCTS FROM DB
  const { isLoading, data } = useGetLatestProductQuery(undefined, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: true,
  });

  return (
    <Container>
      {/* HELMET */}
      <HelmetElement text="Home" />
      {/* CAROUSEL */}
      <Slider />
      {/* HEADLINE */}
      <Headline text="latest product" />

      {isLoading ? (
        <LoadingAni />
      ) : !data.data.length ? (
        <div className="py-5">
          <h1 className="text-xl text-center">
           No Products Available
          </h1>
          <h1 className="text-xl text-center">
           Please Stay Connected to get latest product
          </h1>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-5">
          {data?.data.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      <Headline text="our categories" />

      <CategoryCarouSel />

      <Headline text="Contact Us" />

      <ContactUs />
    </Container>
  );
};
export default Home;
