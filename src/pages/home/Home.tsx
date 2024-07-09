import Slider from "@/components/Carousel/Slider";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/ProductCard/ProductCard";

const Home = () => {
  return (
    <div>
      <Container>
        <Slider />
        <h1 className="text-4xl text-center uppercase ">latest products</h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </div>
  );
};
export default Home;
