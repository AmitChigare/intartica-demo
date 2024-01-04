import React from "react";
import "./services.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
// import TimelineAbout from "../../components/timelineAbout/TimelineAbout";
// import InspirationDiv from "../../components/inspirationDiv/InspirationDiv";
// import AboutSection from "../../components/aboutSection/AboutSection";
// import FeatureSSection from "../../components/featureSSection/FeatureSSection";
import Testimonials from "../../components/testimonials/Testimonials";
import ServiceProfile from "../../components/serviceProfile/ServiceProfile";
import { motion } from "framer-motion";
import { ROUTE_PATHS } from "../../config";

const Services = () => {
  // const timelineData1 = [
  //   {
  //     icon: "material-symbols:lightbulb-circle",
  //     heading: "Turning Dreams into Reality: Our Mission",
  //     desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
  //   },
  //   {
  //     icon: "material-symbols:lightbulb-circle",
  //     heading: "Our Beliefs: Elevating Your Dreams",
  //     desc: "At Intartica, we believe our customers are positive, visionary, and ambitious individuals united by family, community, and society. We strive to be a one-stop solution for interior design and execution, a trusted partner in turning houses into dream abodes.",
  //   },
  //   {
  //     icon: "icon-park-solid:check-one",
  //     heading: "Turning Dreams into Reality: Our Vision",
  //     desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
  //   },
  // ];

  // const timelineData2 = [
  //   {
  //     icon: "material-symbols:lightbulb-circle",
  //     heading: "Turning Dreams into Reality: Our Mission",
  //     desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
  //   },
  //   {
  //     icon: "material-symbols:lightbulb-circle",
  //     heading: "Our Beliefs: Elevating Your Dreams",
  //     desc: "At Intartica, we believe our customers are positive, visionary, and ambitious individuals united by family, community, and society. We strive to be a one-stop solution for interior design and execution, a trusted partner in turning houses into dream abodes.",
  //   },
  //   {
  //     icon: "icon-park-solid:check-one",
  //     heading: "Turning Dreams into Reality: Our Vision",
  //     desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
  //   },
  // ];

  const aboutImages = [
    "",
    "https://s3-alpha-sig.figma.com/img/aecf/931e/f3a661f4290c17763377ec5fcbfc0581?Expires=1702857600&Signature=OiucEoaE1mp-MTJSZF3ZCe4i2EB8eIrSELR0M~CHMTXdJsM4jRnuV5IdJQ6tivEsPmUr4xqPvRwfc3M5j98tw~HZeZbgw6v6NuKtZ49fQfoUdlqFZatqfymjtMyjVeVyeWSOkmOK~u1I4gfmKSYDq6sk25z3ktZ01OubAnPevzuBXdO5CahCE73WBB-l3ktRfAjFkgoPsRmSdBXGDmBIhV~JmYncbaVQ3Li~jsNiDX5PJLO3TdisjgqLQVR5vQ4DpPIlyFdPEtah-0kyANeOiKcpEvINvHGOvu4Kk3i3LMA2s5OOt5wztmg9B-KFw8eNjrVLW61PZwUpOeDYOFSzFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];

  const serviceList = [
    {
      linkTo: ROUTE_PATHS.SERVICE_BUILDER,
      imageUrl: "",
      number: "01",
      heading: "Builders",
      desc: "At the ultimate smart home, you're met with technology before you even step through the front door.",
    },
    {
      linkTo: ROUTE_PATHS.SERVICE_OWNER,
      imageUrl: "",
      number: "02",
      heading: "Individual House Owners",
      desc: "Transforming Structures into Spectacles.Showcase developments with captivating model flats and add meticulous finishing touches that redefine perfection to your interiors or finishing works.",
    },
    {
      linkTo: ROUTE_PATHS.SERVICE_ARCHITECTtst,
      imageUrl: "",
      number: "03",
      heading: "For Designers/Architects",
      desc: "Realize your dreams with our design services that reflect your lifestyle. We offer functional and aesthetically pleasing solutions for kitchens and wardrobes.ase and wall cabinets. ",
    },
  ];

  return (
    <>
      <Navbar />

      <motion.AboutSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        images={aboutImages}
      />

      {serviceList.map((data, index) => (
        <ServiceProfile key={index} {...data} />
      ))}

      {/* <FeatureSSection /> */}

      {/* <InspirationDiv /> */}

      {/* <TimelineAbout
        type1={true}
        heading="Designing Your Dream in Three Simple Steps"
        timelineData={timelineData1}
      />
      <TimelineAbout
        type2={true}
        heading="Crafting Your Dream Space:The Intartica Experience in Three Simple Steps"
        timelineData={timelineData2}
      /> */}

      <Testimonials />

      <NewletterSub />
      <Footer />
    </>
  );
};

export default Services;
