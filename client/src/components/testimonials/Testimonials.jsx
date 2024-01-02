import React from "react";
import "./testimonials.css";
import { Icon } from "@iconify/react";

const Testimonials = () => {
  return (
    <div className="container d-flex gap-4 py-2">
      <div className="t-image">
        <img
          src="https://s3-alpha-sig.figma.com/img/a5c2/11f7/e99af71b78e5335eda7930c6a7530ec8?Expires=1705276800&Signature=jcom~LD7RpUl4eyGSNdDwepfa0lDhI7cm2bi6T7q~CRMXVOWlUbIq0dlmubKTM909JSYwbdTckimjeqx0o27JXlmkuw3A70KyUS7XajT9OglgloyAfsJSYUOqJS95ws-v6aZ1WoxjZCEjAZ0yXAzldObm9gqs5r58NfIQqt2ifqnECMyo0AN4mIY~oP0SxpkCjSqKLQz3fyjPuJ1WXgoG1E~9we17W-5NCH6-ImKqlbDS8sKwtoE~nHbSgNLEMGiFW0nkjm-xSvEJ~zdaZebSgkiaDt3niuj9uQBKcfYcEvYp7Kflb9iCSAuhmCKAiA1Wr8COkoMiR~LiLJBYvS6cA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
      <div className="t-info">
        <h2>What Our Customers Say About Us</h2>
        <div className="t-cards d-flex">
          <div className="t-card-1 d-flex">
            <div className="t-icon">
              <Icon icon="bi:quote" />
            </div>
            <div className="t-quote">
              <p>
                Working with your design team was an absolute pleasure. The
                attention to detail and creativity exceeded my expectations.
                Thank you for making my home beautiful!
              </p>
            </div>
            <div className="t-author d-flex gap-3">
              <div className="t-profile"></div>
              <div className="t-name d-flex flex-column justify-content-center">
                <h6>Sophie Carter</h6>
                <p>New York, USA</p>
              </div>
            </div>
          </div>
          <div className="t-card-2 d-flex">
            <div className="t-icon">
              <Icon icon="bi:quote" />
            </div>
            <div className="t-quote">
              <p>
                Working with your design team was an absolute pleasure. The
                attention to detail and creativity exceeded my expectations.
                Thank you for making my home beautiful!
              </p>
            </div>
            <div className="t-author d-flex gap-3">
              <div className="t-profile"></div>
              <div className="t-name d-flex flex-column justify-content-center">
                <h6>Sophie Carter</h6>
                <p>New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
