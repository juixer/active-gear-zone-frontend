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
  const { isLoading, data } = useGetLatestProductQuery(undefined, {
    pollingInterval: 5000,
    skipPollingIfUnfocused: true,
  });

  return (
      <Container>
        <HelmetElement text="Home"/>
        <Slider />
        <Headline text="latest product" />

        
          {isLoading ? (
            <LoadingAni/>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-5">
           { data?.data.map((product: TProduct) => (
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
