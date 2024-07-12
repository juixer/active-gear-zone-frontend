import Container from "@/components/layout/Container";
import Lottie from "lottie-react";
import ErrorAni from "../../assets/errorAni.json";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    // THIS IS ERROR PAGE FOR REACT ROUTER
    <Container>
      <div className="flex lg:flex-row flex-col gap-5">
        <div>
          <Lottie animationData={ErrorAni} loop={true} />
        </div>
        <div className="flex justify-center flex-col items-center gap-5">
          <h1 className="text-5xl font-semibold">Oops!</h1>
          <h1 className="text-3xl font-medium">Something went wrong</h1>
          <div className="flex justify-center items-center gap-5">
            <Button onClick={() => navigate(-1)} className="gap-2">
              <FaArrowLeft /> Go Back
            </Button>
            <NavLink to={'/'}>
              <Button className="bg-baseColor gap-2 text-black hover:bg-lime-600">
                <FaHouse /> Home
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ErrorPage;
