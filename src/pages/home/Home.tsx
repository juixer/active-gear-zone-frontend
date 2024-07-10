import Slider from "@/components/Carousel/Slider";
import CategoryCarouSel from "@/components/CategoryCarousel/CategoryCarouSel";
import ContactUs from "@/components/ContactUs/ContactUs";
import Container from "@/components/layout/Container";
import Headline from "@/utils/Headline/Headline";
const Home = () => {
  return (
    <div>
      <Container>
        <Slider />
        <Headline text="latest product" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5"></div>

        <Headline text="our categories" />

        <CategoryCarouSel />

        <Headline text="Contact Us" />

        <ContactUs />
      </Container>
    </div>
  );
};
export default Home;
