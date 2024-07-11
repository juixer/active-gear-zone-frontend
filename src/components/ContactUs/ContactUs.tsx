import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "sonner";
const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Please wait...");

    if (form.current) {
      emailjs
        .sendForm('service_2qjsz3l', 'template_2trtxm6', form.current, {
          publicKey: 'NBJyE0fwy8IYJVc1o',
        })
        .then(
          () => {
            toast.success("Mail sent!", { id: toastId, duration: 4000 });
            location.reload();
          },
          (error) => {
            console.log("FAILED...", error);
            toast.error("Something went wrong!", { id: toastId, duration: 4000 });
          }
        );
    }
  };

  return (
    <div className="flex justify-center items-center gap-10 py-5">
      <img
        src="https://i.ibb.co/cN3wKCM/email.png"
        className="w-[30%] hidden lg:flex"
      />
      <form onSubmit={sendEmail} ref={form} className="space-y-5 w-96">
        <Input
          className="max-w-96"
          placeholder="Enter Your Full Name"
          type="text"
          name="user_name" 
          required
        />
        <Input
          className="max-w-96"
          placeholder="Enter Your Email"
          type="email"
          name="user_email"
          required
        />
        <Input
          className="max-w-96"
          placeholder="Enter Your Subject"
          type="text"
          name="user_subject"
          required
        />
        <Textarea required name="message" className="max-w-96 h-52" placeholder="Enter Your Message" />
        <Button className="bg-baseColor text-black hover:bg-lime-600 duration-300">
          Send Message
        </Button>
      </form>
    </div>
  );
};
export default ContactUs;
