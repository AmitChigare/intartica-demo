import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./about.css";
import EssenceCard from "../../components/essenceCard/EssenceCard";
import HomeTag from "../../components/homeTag/HomeTag";
import TimelineAbout from "../../components/timelineAbout/TimelineAbout";
import Testimonials from "../../components/testimonials/Testimonials";
import NewletterSub from "../../components/newsletterSub/NewletterSub";

const About = () => {
  const essenceCardData = [
    {
      icon: "mdi:run-fast",
      heading: "Fast",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.",
    },
    {
      icon: "teenyicons:bulb-on-solid",
      heading: "Creative",
      desc: "Creativity is our heartbeat. At Intartica, we infuse every design with artistic flair and innovative thinking, crafting spaces that captivate the imagination and breathe life into your unique vision.",
    },
    {
      icon: "material-symbols:computer-outline",
      heading: "Modern",
      desc: "Modernity defines our designs. Intartica embraces contemporary aesthetics, staying at the forefront of design trends. Your space will be a testament to modern elegance, seamlessly blending style and functionality.",
    },
    {
      icon: "material-symbols:group",
      heading: "Budget-friendly",
      desc: "Luxury doesn't have to come at a high cost. Intartica is committed to delivering premium designs without breaking the bank. Our budget-friendly approach ensures quality and excellence within your financial framework.",
    },
    {
      icon: "material-symbols:group",
      heading: "Client-Centric",
      desc: "At Intartica, our focus is on you. We prioritize your needs, preferences, and satisfaction throughout the design journey. Our client-centric approach ensures that every decision, from concept to execution, revolves around realizing your vision and exceeding your expectations.",
    },
  ];

  const timelineData1 = [
    {
      icon: "material-symbols:lightbulb-circle",
      heading: "Turning Dreams into Reality: Our Mission",
      desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
    },
    {
      icon: "material-symbols:lightbulb-circle",
      heading: "Our Beliefs: Elevating Your Dreams",
      desc: "At Intartica, we believe our customers are positive, visionary, and ambitious individuals united by family, community, and society. We strive to be a one-stop solution for interior design and execution, a trusted partner in turning houses into dream abodes.",
    },
    {
      icon: "icon-park-solid:check-one",
      heading: "Turning Dreams into Reality: Our Vision",
      desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
    },
  ];

  const timelineData2 = [
    {
      icon: "material-symbols:lightbulb-circle",
      heading: "Turning Dreams into Reality: Our Mission",
      desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
    },
    {
      icon: "material-symbols:lightbulb-circle",
      heading: "Our Beliefs: Elevating Your Dreams",
      desc: "At Intartica, we believe our customers are positive, visionary, and ambitious individuals united by family, community, and society. We strive to be a one-stop solution for interior design and execution, a trusted partner in turning houses into dream abodes.",
    },
    {
      icon: "icon-park-solid:check-one",
      heading: "Turning Dreams into Reality: Our Vision",
      desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="d-flex container about-container">
        <div className="about-main">
          <h1 className="about-heading">
            Crafting Dreams, Building <br />
            Homes
          </h1>
          <p className="about-para">
            {" "}
            Welcome to Intartica, where we turn spaces into living masterpieces,
            infusing art, functionality, and soulfulness into every corner. Our
            journey began in 2017, in the vibrant city of Hyderabad, India,
            founded by the visionary Srinivas Reddy Puram. Intartica is more
            than an interior design brand; it's a commitment to bring dreams to
            life.
          </p>
          <p className="about-para">
            Integrity is at the core of everything we do—transparency, fairness,
            and honesty guide our actions. We take pride in going the extra
            mile, pushing boundaries, and continuously improving to bring out
            the best for our customers.
          </p>
          <div>
            <button className="btn btn-danger">Free Dream Counselling</button>
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <img
            src="https://s3-alpha-sig.figma.com/img/a6c0/a0cc/33ccb02319127b49cd5540dcaaccd008?Expires=1703462400&Signature=WfZ0PW3vdf7SpkGv9-JxU~zqAPObZf0RzI8MSPesQTQFrQFamVl5Gkup737X1oGfx3tLbcjrX~wkGQgCu6EcZ7tVQh8AfduRQXX2i-kzSndmim~rk5LgnkzFodK5Fs9rbsK-Rlg2wWZorO6oeSbRFC46VVpVfep3VaIpLqn~Ovo5IYFEdYL4m2V8WO~B6xwKvOmLlfKeNiF8tiN29bgU~RsHf-zVOl60qzncVBmxTjDmgOX7RQgKcHr7nJ3vvq8HSE7Lf~SqPpqU1Rqdqgt5cb-BEvA4d-HRO-tb~qAlldujBRrC8UdHsyWv-bEhp~OwzZErGcYuWfoxF27ztVuVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="aimg"
            className="img-1"
          />

          <img
            src="https://s3-alpha-sig.figma.com/img/3c0a/26b4/a09311ff347ec85361b64ca3b027c308?Expires=1703462400&Signature=S9zqcTdJ3~hTagu7rRyxTmzBx~au7~1huEEUjzXlUpUy9miUje83qYgCAT0lNUPaJA0CESXb~YzFkKUgmJX0tetP8fcKjZWfxphGDoKAaX50TdGS-ruW5iQmaPwgqOZ6DcnzkWgv~v24whqxuySSbdXPiRtU7Oyxt2Mv2PIdAL9JYnEwQG1lWZ4qzpDraSJLDskcyJmQ8ju68NbZv2PCB77ogkTPfEwETIqjsEtB42gp-FcrSRoNXuWn6txInji4LbBuO1gBGriV-IqKN25DVGr~KOwMpMlx8L~-VlDjKq8soaHyU-cxrg3KKrl~xpJ8Ilvnhue8aBWJ1qyQmHo~Mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="img1"
            className="img-2"
          />
        </div>
      </div>
      <div className="container pt-5">
        <HomeTag text="Interior's Essence" />
        <div className="d-flex tt">
          {essenceCardData.map((data, index) => (
            <EssenceCard
              icon={data.icon}
              heading={data.heading}
              desc={data.desc}
            />
          ))}
        </div>
      </div>

      <div className="d-flex container gap-5 py-4 cont-d">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a6c0/a0cc/33ccb02319127b49cd5540dcaaccd008?Expires=1703462400&Signature=WfZ0PW3vdf7SpkGv9-JxU~zqAPObZf0RzI8MSPesQTQFrQFamVl5Gkup737X1oGfx3tLbcjrX~wkGQgCu6EcZ7tVQh8AfduRQXX2i-kzSndmim~rk5LgnkzFodK5Fs9rbsK-Rlg2wWZorO6oeSbRFC46VVpVfep3VaIpLqn~Ovo5IYFEdYL4m2V8WO~B6xwKvOmLlfKeNiF8tiN29bgU~RsHf-zVOl60qzncVBmxTjDmgOX7RQgKcHr7nJ3vvq8HSE7Lf~SqPpqU1Rqdqgt5cb-BEvA4d-HRO-tb~qAlldujBRrC8UdHsyWv-bEhp~OwzZErGcYuWfoxF27ztVuVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="crashed"
            className="crashed"
          />
        </div>
        <div className="d-flex flex-column justify-content-between ">
          <div>
            <h1 className="interior-h">Our Inspirations</h1>
            <p className="interior-p">
              The name "Intartica" itself is a creative evolution, symbolizing a
              journey from a "collection of art" to "Collection of Interior Art"
              and culminating in the concept of the "Continent of Interiors." It
              encapsulates our philosophy of creating a collection of art that
              goes beyond mere aesthetics, combining form and function to design
              interiors that are not just beautiful but also have healing
              capabilities for the soul.
            </p>
          </div>
          <div>
            <button className="btn btn-danger px-5 py-3">Learn More</button>
          </div>
        </div>
      </div>
      <div className="d-flex container gap-5 py-4 cont-d">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a6c0/a0cc/33ccb02319127b49cd5540dcaaccd008?Expires=1703462400&Signature=WfZ0PW3vdf7SpkGv9-JxU~zqAPObZf0RzI8MSPesQTQFrQFamVl5Gkup737X1oGfx3tLbcjrX~wkGQgCu6EcZ7tVQh8AfduRQXX2i-kzSndmim~rk5LgnkzFodK5Fs9rbsK-Rlg2wWZorO6oeSbRFC46VVpVfep3VaIpLqn~Ovo5IYFEdYL4m2V8WO~B6xwKvOmLlfKeNiF8tiN29bgU~RsHf-zVOl60qzncVBmxTjDmgOX7RQgKcHr7nJ3vvq8HSE7Lf~SqPpqU1Rqdqgt5cb-BEvA4d-HRO-tb~qAlldujBRrC8UdHsyWv-bEhp~OwzZErGcYuWfoxF27ztVuVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="crashed"
            className="crashed"
          />
        </div>
        <div className="d-flex flex-column justify-content-between ">
          <div>
            <h1 className="interior-h">
              A Personal Touch: Cherishing Bonds, Celebrating Family
            </h1>
            <p className="interior-p">
              Founded with a deep-rooted belief in cherishing bonds and
              celebrating family, Intartica is more than a service; it's a
              commitment to turn your house into a home. Our founder, Srinivas
              Reddy Puram, understands the value of hard work and dreams,
              resonating with individuals like Sujata—a single mother and
              investment banker who trusted us to design her dream abode. <br />{" "}
              Our success lies in the harmonious collaboration of people and
              technology, creating an easier, faster, and cost-effective way to
              bring your dreams to life. This is combined with our
              determination, passion, and integrity, underpinning every aspect
              of who we are, what we do, and why we do it.
            </p>
          </div>
        </div>
      </div>
      <TimelineAbout
        type1={true}
        heading="Designing Your Dream in Three Simple Steps"
        timelineData={timelineData1}
      />
      <TimelineAbout
        type2={true}
        heading="Crafting Your Dream Space:The Intartica Experience in Three Simple Steps"
        timelineData={timelineData2}
      />
      <Testimonials />
      <NewletterSub />
      <Footer />
    </>
  );
};

export default About;
