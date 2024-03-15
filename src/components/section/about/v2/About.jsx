import SectionTitle from "../../../../common/sectionTitle";
import Counter from "../../../../common/counter";

import aboutImageLeft from "../../../../assets/images/nft/about_image_left.png";
import aboutImageRight from "../../../../assets/images/nft/about_image_right.png";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./About.style";

const About = () => {
  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      {/* <div className="v2_about_overlay"></div> */}
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="About Us"
          subtitle=""
        />
        <div className="v2_about_us_content" >
          <div className="v2_about_us_text">
            <p>
            Welcome to BYE GARY Petition where innovation meets advocacy in the world of cryptocurrency. 
We are a passionate team of political science and law students who share a common belief in the 
transformative power of crypto technology. Our mission is to harness the potential of blockchain 
and NFTs while addressing the challenges posed by regulatory barriers. In an era where the future 
is defined by decentralized solutions, we recognize the need for a platform that not only empowers 
creators and collectors but also advocates for the wider adoption of crypto. We firmly believe that 
the freedom to innovate should not be stifled by unnecessary regulations.
            </p>
            <p>
            Our team, comprised of individuals with diverse backgrounds in political science and law, brings a 
unique perspective to the table. We understand the intricate balance required between innovation 
and regulation, and we strive to create an environment that fosters growth and collaboration within 
the crypto community. At the heart of our platform lies a groundbreaking initiative – the NFT 
Signature Petition Smart Contract. This innovative contract serves as a rallying point for the crypto 
community, bringing together like-minded individuals to advocate for a more inclusive and 
supportive regulatory framework.

            </p>
            <p>
            Through our NFT Signature Petition Smart Contract, users can actively participate in influencing 
change. By minting a unique NFT signature, individuals become a part of a collective voice that 
advocates for the recognition and acceptance of crypto technology. This powerful initiative is a 
testament to our commitment to shaping a future where innovation and regulation coexist 
harmoniously. Join us on this journey towards a more inclusive and vibrant crypto ecosystem. 
Whether you are a creator, investor or a collector seeking unique NFTs, BYE GARY is not just a 
platform – it's a movement. Together, let's pave the way for a future where crypto thrives, 
unencumbered by unnecessary obstacles. Join us in making history with the first NFT signature 
petition, sign our petition now by minting your NFT and say bye to Gary, let’s have 100,000 Bye 
Gary NFTs as our profile pics to show the world that we have a voice, and we are here to stay and 
grow
            </p>

</div>
</div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
