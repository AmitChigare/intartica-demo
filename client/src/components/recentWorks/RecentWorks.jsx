import React from "react";
import "./recentWorks.css";
import HomeTag from "../homeTag/HomeTag";
import ImgCard from "../imgCard/ImgCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const RecentWorks = () => {
  const imageCardInfo = [
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/ca30/1603/593b8ba6aaacbe250e55cbaace8b20db?Expires=1702857600&Signature=ZXRk48lmw1dKKKFC8lgplQP1llDuZHUz80imcwi913ZG01bQ4zJKMfQfaOxVjBZuxhXiIWpEccz-sCFzsXZzgFzJN9p2CjYOhCE5~Y7pEswl0zcOaHhoiIxLLhDy5sfMJT5bPz7gKGgNTCXyY75S6S9I2Ujx-UdcwnP6lyWt2nKGLwb0~kgZaalZwcecMsc7TVZspo1-6OkVWlVKRax~Ih~XJCI3W8t4Ku6w4JmTN4NS7ueRDxhfr5kaDeESPsfjZS278-6W-I0oNX08IZhnsYMJAolBVFFvhz4w9JIgH3PFkRjtE9VZTxTHwM9tqJTM8TC8YZAbsgprkjWa0rH51A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "Luxury Hotel Renovation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus fringilla dui amet faucibus nam.",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/ca30/1603/593b8ba6aaacbe250e55cbaace8b20db?Expires=1702857600&Signature=ZXRk48lmw1dKKKFC8lgplQP1llDuZHUz80imcwi913ZG01bQ4zJKMfQfaOxVjBZuxhXiIWpEccz-sCFzsXZzgFzJN9p2CjYOhCE5~Y7pEswl0zcOaHhoiIxLLhDy5sfMJT5bPz7gKGgNTCXyY75S6S9I2Ujx-UdcwnP6lyWt2nKGLwb0~kgZaalZwcecMsc7TVZspo1-6OkVWlVKRax~Ih~XJCI3W8t4Ku6w4JmTN4NS7ueRDxhfr5kaDeESPsfjZS278-6W-I0oNX08IZhnsYMJAolBVFFvhz4w9JIgH3PFkRjtE9VZTxTHwM9tqJTM8TC8YZAbsgprkjWa0rH51A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "Villa Furnishing & Interior",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus fringilla dui amet faucibus nam.",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/ca30/1603/593b8ba6aaacbe250e55cbaace8b20db?Expires=1702857600&Signature=ZXRk48lmw1dKKKFC8lgplQP1llDuZHUz80imcwi913ZG01bQ4zJKMfQfaOxVjBZuxhXiIWpEccz-sCFzsXZzgFzJN9p2CjYOhCE5~Y7pEswl0zcOaHhoiIxLLhDy5sfMJT5bPz7gKGgNTCXyY75S6S9I2Ujx-UdcwnP6lyWt2nKGLwb0~kgZaalZwcecMsc7TVZspo1-6OkVWlVKRax~Ih~XJCI3W8t4Ku6w4JmTN4NS7ueRDxhfr5kaDeESPsfjZS278-6W-I0oNX08IZhnsYMJAolBVFFvhz4w9JIgH3PFkRjtE9VZTxTHwM9tqJTM8TC8YZAbsgprkjWa0rH51A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "Residence Swimming Pool",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus fringilla dui amet faucibus nam.",
    },
  ];
  return (
    <div className="container pt-5">
      <HomeTag text="Recent Works" />
      <div className="d-flex p-3 gap-5 rw-1">
        <div className="recent-container">
          <h1 className="black-heading">
            We will let our <span className="red-heading"> Masterpieces, </span>{" "}
            speak and cuddle your{" "}
            <span className="red-heading">imaginations</span> for us!
          </h1>
        </div>
        <div className="imgCard">
          <ImgCard
            imgUrl={imageCardInfo[0].imgUrl}
            heading={imageCardInfo[0].heading}
            desc={imageCardInfo[0].desc}
          />
        </div>
      </div>
      <div className="d-flex p-3 gap-5 rw-2">
        <div className="imgCard">
          <ImgCard
            imgUrl={imageCardInfo[1].imgUrl}
            heading={imageCardInfo[1].heading}
            desc={imageCardInfo[1].desc}
          />
        </div>
        <div className="imgCard">
          <ImgCard
            imgUrl={imageCardInfo[2].imgUrl}
            heading={imageCardInfo[2].heading}
            desc={imageCardInfo[2].desc}
          />
        </div>
      </div>
      <div className="px-4">
        <Link to={"/contact"}>
          <Button variant="danger" className="btn-d">
            Contact Us <Icon icon="ph:arrow-up-right-light" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecentWorks;
