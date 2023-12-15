import React from "react";
import "./timelineAbout.css";
import { Icon } from "@iconify/react";

const TimelineAbout = ({ type1, type2, heading, timelineData }) => {
  const image =
    "https://s3-alpha-sig.figma.com/img/79ba/bf30/17497c6191cb773fb741bd9893bb6527?Expires=1703462400&Signature=h3ajaqhv0UKpW84l~0hKJ6dtcktkmVKv825ND3pAcpPiaGcLpF~Zyz4YumJpDvn1JNOQYT8UsDeNabodNTPUHFBFjQfUfOuxBDIder-vW~x00qMdwNasQynpUSG~eulgYSpc4l3kefuHIrv6WewXEwn~MOpECAN~PztVGbrpAwhiDYzPLWOaPKeI2Y3EplSXMK7JFIGn6JfjqiVfDYH5iYpN1xLfV3LJlC8DHS9Yn8~RhES1ZG5YUsxfVipSzdjwzqA7HMREwSsMvQKG0BbOJ7djI4uvZm2iDzGRCOWB21N8g~prQX7j-NfmugctUofTY8ZZlLA3cuENtu37sA7y8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  return (
    <div className="container py-5 d-flex gap-5 cont-t">
      {type2 && (
        <div>
          <img src={image} alt="/" className="crashed-1" />
        </div>
      )}
      <div>
        <h1 className="dream-heading">{heading}</h1>
        {timelineData.map((data, index) => (
          <div className="d-flex pt-3" key={index}>
            <Icon icon={data.icon} className="styling" />
            <div className="mx-3">
              <h4>{data.heading}</h4>
              <p className="dream-para">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {type1 && (
        <div>
          <img src={image} alt="/" className="crashed-1" />
        </div>
      )}
    </div>
  );
};

export default TimelineAbout;
