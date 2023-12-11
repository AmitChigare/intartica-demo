import AboutSection from "../../components/aboutSection/AboutSection";
import MyCarousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/Navbar";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import RecentWorks from "../../components/recentWorks/RecentWorks";
import ServiceSection from "../../components/serviceSection/ServiceSection";
import "./home.css";

const Home = () => {
  const carouselImages = [
    "https://s3-alpha-sig.figma.com/img/fc1f/24ff/6f7ad2b6addde44c97e2e9165ad32656?Expires=1702252800&Signature=PJP-Fd~jd0hoy-SJZMfS-E8fCKP9i7tUFETPrsrZL6Y5rFarUFv1msiVR6IgbiKBHlG7YVfBlDYFPo9byGs7-q31Y1lEg1A8YecXh0DPKNdG2jQlMT~2WkXyRnIbh0eJUmGL0s-~86oCJH0C98vj-D1pK39GHaPcYvsCrqrebZZqv9viCs1cQwDlqNodpXYiA3pzv169YVAhwrOYyiGNtXLGoriVrE1fCHs1Mg~bCK9Hk1BO3VdnZt3xgsbo3RVfQM~cI3Kw4Izgve6m46VotGN7Srx0I5I7suPr5C8QENolr6ozsLkTeB5XTG0ipAmU-KA84iUQuM-o16xUhuBqRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://media.designcafe.com/wp-content/uploads/2022/09/07162345/kitchen-interior-design-cost.jpg",
    "https://media.designcafe.com/wp-content/uploads/2021/09/15180410/pop-ceiling-designs-for-hall.jpg",
  ];

  const aboutImages = [
    "https://s3-alpha-sig.figma.com/img/3bc5/cc04/6e3997c352a990e64ff8770f8940b41f?Expires=1702857600&Signature=VDukuBNDOdEPJOUWHH77Y6-EuChl6VIT3k0USC1z1SDgGX5lv~j2ooXLmZb9y-b6ANyEI-L8xSzIICTGuuneLTVjAlUj-Ls32Xpd8E4VvfFA9vzNamK0ZAmfkSrI8qbW2MATdxdBPZn82V0EY3~M6tBBymMrxb7YC0Us9bkKJ57WvS9k5t1L-XMt8G7y5P4b4XHvjbmlfYXy6rv~A9UtO0f3ZM6TVr3YDAY5HWwFeA6sYhpafkZL3I--9Q0QgLzle7dPUDXtsfcnyYEcwSqVeAU1yN2SeSbyzhHRgShUqF2QZHOg~O-axeRZ0q0M13XPNEirNHwf9P5KZLBbJDiwiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/aecf/931e/f3a661f4290c17763377ec5fcbfc0581?Expires=1702857600&Signature=OiucEoaE1mp-MTJSZF3ZCe4i2EB8eIrSELR0M~CHMTXdJsM4jRnuV5IdJQ6tivEsPmUr4xqPvRwfc3M5j98tw~HZeZbgw6v6NuKtZ49fQfoUdlqFZatqfymjtMyjVeVyeWSOkmOK~u1I4gfmKSYDq6sk25z3ktZ01OubAnPevzuBXdO5CahCE73WBB-l3ktRfAjFkgoPsRmSdBXGDmBIhV~JmYncbaVQ3Li~jsNiDX5PJLO3TdisjgqLQVR5vQ4DpPIlyFdPEtah-0kyANeOiKcpEvINvHGOvu4Kk3i3LMA2s5OOt5wztmg9B-KFw8eNjrVLW61PZwUpOeDYOFSzFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];

  const servicesImages = [];

  const awards = [
    {
      heading: "Fast",
      desc: "Streamlined design processes for efficient results.",
    },
    {
      heading: "Creative",
      desc: "Infusing artistic flair into every detail of your space.",
    },
    {
      heading: "Modern",
      desc: "Embracing contemporary trends for timeless designs.",
    },
    {
      heading: "Budget-Friendly",
      desc: "Ensuring excellence without compromising your financial plan.",
    },
  ];

  return (
    <>
      <MyNavbar />
      <div className="container pb-2 ht">
        <h1 className="heading">
          Welcome to Intartica - Where Dreams Reside in Design
        </h1>
        <p className="heading-tagline">
          Ready to transform your living space into a dream abode? Let's embark{" "}
          on this journey together. Explore our services or connect with us to
          discuss your vision.
        </p>
      </div>
      <MyCarousel images={carouselImages} main={true} />
      <div className="d-flex awards">
        <div className="why-us">Why Us?</div>
        {awards.map((award, index) => (
          <div className="award" key={index}>
            <h6>{award.heading}</h6>
            <p className="m-0">{award.desc}</p>
          </div>
        ))}
      </div>
      <AboutSection images={aboutImages} />
      <ServiceSection images={servicesImages} />
      <RecentWorks />
      <NewletterSub />
      <Footer />
    </>
  );
};

export default Home;
