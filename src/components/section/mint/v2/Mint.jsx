import { useState } from "react";
import CountdDown from "../../../../common/countDown"
import { useModal } from "../../../../utils/ModalContext";
import { Slider, SliderItem } from "../../../../common/slider/Slider";
import Button from "../../../../common/button";
import Particle from "./Particles";
import MintStyleWrapper from "./Mint.style";

import thumb1 from "../../../../assets/images/nft/v4-slider-img.png";
import thumb2 from "../../../../assets/images/nft/v4-slider-img2.png";
import thumb3 from "../../../../assets/images/nft/v4-slider-img3.png";
import checkIcon from "../../../../assets/images/icon/mint-right-text-icon.svg";
import discordIcon from "../../../../assets/images/icon/dis_logo.svg";
import twitterIcon from "../../../../assets/images/icon/Twitter.svg";

const Mint = () => {
  const [count, setCount] = useState(1);
  const { mintModalHandle } = useModal();

  const slideImages = [thumb1, thumb2, thumb3];

  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChenge = () => { };

  return (
    <MintStyleWrapper>
      <Particle />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mint_left_content">
              <div className="mint_left_inner">
                <div className="mint_slider">
                  {/* <Slider {...sliderSettings}>
                    {slideImages?.map((thumb, idx) => (
                      <SliderItem key={idx}>
                        <div className="mint_thumb">
                          <img src={thumb} alt="thumb" />
                        </div>
                      </SliderItem>
                    ))}
                  </Slider> */}
                  <iframe  src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x589b915D7877Cb71130155a66f838764120F5D53&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=dd8d935a7ea3a876d645c59e2de86798&theme=dark&primaryColor=green" width="900px" height="900px" style={{maxWidth: '100%'}} frameBorder={0} />
                </div>
                {/* <ul className="mint_count_list">
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      4583/50000<span></span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>0.15 ETH</h5>
                  </li>
                  <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button
                        className="input_number_decrement"
                        onClick={() =>
                          count > 1 ? setCount(count - 1) : count
                        }
                      >
                        -
                      </button>
                      <input
                        className="input_number"
                        type="text"
                        value={count}
                        onChange={handleChenge}
                      />
                      <button
                        className="input_number_increment"
                        onClick={() =>
                          count > 0 ? setCount(count + 1) : count
                        }
                      >
                        +
                      </button>
                    </div>
                    <h5>
                      <span>0.15</span> ETH
                    </h5>
                  </li>
                </ul> */}
                {/* <Button lg variant="mint" onClick={() => mintModalHandle()}>
                  {" "}
                  Mint now
                </Button> */}
                <p>
                  By clicking “MINT”, You agree to our{" "}
                  <a href="#">Terms of Service</a> and our{" "}
                  <a href="#">Privacy Policy.</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mint_right_content">
              <div className="content_header">
                <h4>
                
                  <span>
                    
                  </span>
                </h4>
                <h4>
              
                  <span>
                  
                  </span>
                </h4>

                <h1>PUBLIC MINT LIVE</h1>
              </div>

              {/* <div className="mint_timer">
                <h5>Public Mint End in</h5>
                <CountdDown date={Date.now() + 1675076996} />
              </div> */}
              <div className="content_footer">
                {/* <h5>Max 5 NFTs per wallet</h5> */}
                <h5>Price 15 matic + gas</h5>
                {/* <h5>Mint is live until 25 apr 04:00H</h5> */}
              </div>
              <div className="mint_btns">
  <a href="https://discord.gg/4hWVdgdf">
    <Button lg variant="outline">
      <img src={discordIcon} alt="icon" />
      join discord
    </Button>
  </a>
  <a href="https://twitter.com/ByeGaryNFT?t=8v1TEKRZriGIVltbeP-XIw&s=09&fbclid=IwAR0Yq3C_iPYROMTIXpBSAoKg7G72sxMaPV0hsGabfUgZ3A4xcIIGpe-DwjM">
    <Button lg variant="outline">
      <img src={twitterIcon} alt="icon" />
      join twitter
    </Button>
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </MintStyleWrapper>
  );
};

export default Mint;
