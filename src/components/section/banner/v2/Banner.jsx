import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useModal } from "../../../../utils/ModalContext";
import CountdDown from "../../../../common/countDown";
import Counter from "../../../../common/counter";
import Particle from "../../../../common/particle/v1";
import Button from "../../../../common/button";
import { Slider, SliderItem } from "../../../../common/slider/Slider";

import data from "../../../../assets/data/particle/bannerV2Particles";
import BannerStyleWrapper from "./Banner.style";

const Banner = () => {
  const { mintModalHandle } = useModal();

  return (
    <BannerStyleWrapper className="bithu_v2_baner_sect" id="home">
      <div className="container">
        <div className="bithu_v2_baner_content">
          <h3>
          <div className="bithu_menu_btns">
            {/* Wrap the button text with Link component */}
            <Link to="./mint-1">
              <Button
                sm
                variant="hovered"
                className="connect_btn"
              >
                Sign_here
              </Button>
            </Link>
            </div>
          </h3>
          {/* Rest of your component code */}
          {/* <Particle className="v2_baner_stars" particles={data} /> */}
        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;
