import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
const ContactUs = () => {
  return (
    <div className="flex justify-center items-center gap-10 py-5">
        <img src="https://i.ibb.co/cN3wKCM/email.png" className="w-[30%] hidden lg:flex"/>
      <form className="space-y-5 w-96">
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
