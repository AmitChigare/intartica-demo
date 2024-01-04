import React from "react";
import "./sconnect.css";

const Sconnect = () => {
  const bgImageee =
    "https://s3-alpha-sig.figma.com/img/5c4c/0e1d/9d8583f04607af873e278746e1dcd1c4?Expires=1704672000&Signature=VpICWeg68WBFcL-AtY3VNnDK-9Qa0oL1w8HsvI51pzmkR3WpYAIHjXagdgIap5bGCpEoHis-6UdcD-toU4zaoVwzFtj5AmgOT07Sey492OgQONiDddDFi7gZYMKGFb1aknR6EWA~eO0-i1DrUGnr8EbVmb16XsvwZtia2Xz3fyg4vMTjhKQqtqX-XpZcgZuXnIk1Lz0WAqTTxG4Ygpk~fpCgy-9PNr40SOYOr9VH6cfgDSIU0fAeggtXYKjQ2ncFMRFumwVPGnfcgIkTkfycTUOD~oYvr5uRxjmBAjV9sIoit6lyfO9ceXU4TSEVtyy7pqET0UjE1LetY-XoEy5GEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const containerStyle = {
    backgroundImage: `url(${bgImageee})`,
  };
  return (
    <div style={containerStyle} className="container sconnect-container my-7">
      <div className="main">
        <h6>Subscribe To Our Email</h6>
        <h4>Start Project With Us ?</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="btn">Start New</button>
      </div>
    </div>
  );
};

export default Sconnect;
