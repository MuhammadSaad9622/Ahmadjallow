import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import avatarThumb1 from "../../images/nft/t1.png";
import avatarThumb2 from "../../images/nft/t2.png";
import avatarThumb3 from "../../images/nft/t3.png";
import avatarThumb4 from "../../images/nft/3.png";

const data = [
  {
     avatar: avatarThumb1,
    name: " Bullish Bear",
    designation: "",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  } ,

  {
     avatar: avatarThumb2,
    name: "BearySeal",
    designation: "",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  } 
  ,
  {
     avatar: avatarThumb3,
    name: "BearyBonds",
    designation: "",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  }
];

export default data;
