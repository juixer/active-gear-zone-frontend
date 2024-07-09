import Slider from "@/components/Carousel/Slider";
import CategoryCarouSel from "@/components/CategoryCarousel/CategoryCarouSel";
import Container from "@/components/layout/Container";
import Headline from "@/utils/Headline/Headline";
import ProductCard from "@/utils/ProductCard/ProductCard";

const Home = () => {
  return (
    <div>
      <Container>
        <Slider />
        <Headline text="latest product" />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <Headline text="our categories" />

        <CategoryCarouSel />
      </Container>
    </div>
  );
};
export default Home;
