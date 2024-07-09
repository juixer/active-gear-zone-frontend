import contactUsAni from "../../assets/contactUsAnimation.json";
import Lottie from "lottie-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
const ContactUs = () => {
  return (
    <div className="flex items-center justify-center gap-5 py-5">
        <Lottie animationData={contactUsAni} loop={true} className="w-96 hidden lg:flex" />
      <form className="space-y-5 w-1/2">
        <Input className="max-w-96" placeholder="Enter Your Full Name"  type="text" />
        <Input className="max-w-96" placeholder="Enter Your Email" type="email" />
        <Textarea className="max-w-96 h-52" placeholder="Enter Your Message" />
        <Button className="bg-baseColor text-black hover:bg-lime-600 duration-300">
          Send Message
        </Button>
      </form>
    </div>
  );
};
export default ContactUs;
