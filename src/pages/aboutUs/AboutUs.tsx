import Container from "@/components/layout/Container";
import Headline from "@/utils/Headline/Headline";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      bio: "John is the visionary behind Active Gear, with over 20 years of experience in the sports industry. His passion for sports and dedication to quality drive the company's mission.",
      img: "https://i.ibb.co/V9QYKD2/person28.png", // Replace with actual image URL
    },
    {
      name: "Sarah Johnson",
      position: "Chief Operating Officer",
      bio: "Sarah oversees the day-to-day operations at Active Gear. With a background in business management, she ensures everything runs smoothly and efficiently.",
      img: "https://i.ibb.co/PWnp7nJ/person2.png", // Replace with actual image URL
    },
    {
      name: "David Williams",
      position: "Head of Product Development",
      bio: "David leads our product development team, bringing innovative and high-quality sports gear to our customers. He has a keen eye for detail and a commitment to excellence.",
      img: "https://i.ibb.co/nf8RDzr/person20.png", // Replace with actual image URL
    },
    {
      name: "Emily Brown",
      position: "Marketing Director",
      bio: "Emily is responsible for all marketing and promotional activities. Her creative strategies and strong communication skills help to build our brand and connect with customers.",
      img: "https://i.ibb.co/wp46sKB/person13.png", // Replace with actual image URL
    },
    {
      name: "Michael Davis",
      position: "Customer Service Manager",
      bio: "Michael ensures that our customers receive top-notch service. He leads a team dedicated to assisting customers with their needs and ensuring their satisfaction.",
      img: "https://i.ibb.co/RbFL3Dt/person14.png", // Replace with actual image URL
    },
    {
      name: "Jessica Miller",
      position: "Head of Sales",
      bio: "Jessica drives our sales efforts, working closely with clients and partners to meet their needs. Her expertise in sales and customer relations is invaluable to our success.",
      img: "https://i.ibb.co/72tvnDJ/person25.png", // Replace with actual image URL
    },
  ];
  return (
    <Container>
      <div className="py-5">
        <Headline text="About us" />

        <div className=" py-5 space-y-3">
          <h1 className="text-2xl font-medium">
            Information about the Company
          </h1>
          <p>
            Welcome to Active Gear, your premier destination for top-quality
            sports gear and equipment. We are passionate about sports and
            dedicated to providing athletes of all levels with the best products
            to enhance their performance and enjoyment. Our carefully curated
            selection includes everything from apparel and footwear to
            specialized equipment for a wide range of sports.
          </p>
        </div>

        <div className="py-5 space-y-3">
          <h1 className="text-2xl font-medium">Mission Statement</h1>
          <p>
            Our mission is to inspire and support athletes of all levels by
            providing high-quality sports gear and exceptional customer service.
            We strive to help our customers achieve their athletic goals and
            promote a healthy, active lifestyle.
          </p>
        </div>

        <div className="py-5 space-y-3">
          <h1 className="text-2xl font-medium">Vision Statement</h1>
          <p>
            Our vision is to become a leading provider of sports equipment and
            apparel, known for our commitment to quality, innovation, and
            customer satisfaction. We aim to create a community of passionate
            athletes who trust Active Gear for all their sporting needs.
          </p>
        </div>

        <div className=" py-5 space-y-3">
          <h1 className="text-2xl font-medium">Contact Information</h1>
          <p>
            If you have any questions, concerns, or feedback, please don’t
            hesitate to contact us:
          </p>
          <li>
            <span className="font-medium">Email:</span> support@activegear.com
          </li>
          <li>
            <span className="font-medium">Phone:</span> (123) 456-7890
          </li>
          <li>
            <span className="font-medium">Address:</span> 123 Sports Avenue,
            City, State, ZIP Code
          </li>
        </div>

        <div className="py-5 space-y-3">
          <h1 className="text-2xl font-medium">Our Team</h1>
          <p>
            Meet the passionate team behind Active Gear Zone. Our team consists
            of dedicated professionals who are enthusiastic about sports and
            committed to providing the best products and services to our
            customers.
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 border p-2 rounded-md"
              >
                <img
                  className="w-28 h-28 rounded-full"
                  src={member.img}
                  alt={member.name}
                />
                <div>
                  <h2 className="text-lg font-medium">{member.name}</h2>
                  <p className="text-sm font-medium">{member.position}</p>
                  <p className="text-sm font-light">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-5 space-y-3">
          <h1 className="text-2xl font-medium">Our Store Location</h1>
          <p>
            Visit our physical store to explore our wide range of sports gear
            and apparel in person. We are located at:
          </p>
          <li>
            <span className="font-medium">Store Hours:</span> Monday - Saturday:
            9 AM - 8 PM, Sunday: 10 AM - 6 PM
          </li>
          <li>
            <span className="font-medium">Address:</span> 123 Sports Avenue,
            City, State, ZIP Code
          </li>
        </div>
      </div>
    </Container>
  );
};
export default AboutUs;
