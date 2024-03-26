import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/images/329D3B5A-F778-44C3-97A5-83DCD757B9DA.jpeg";
import { FaChevronDown } from 'react-icons/fa';


const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        header.classList.add("sticky");
      } 
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper className="bithu_header" id="navbar" >
        <div className="container">
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="bithu nft logo" />
                </a>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_list">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  
                  {/* <li className="dropdown">
        <a href="#home">Mint <FaChevronDown /></a>
        {/* Dropdown content */}
       
      <li>
                    <a href="https://itishstudios.net/assert/saad1.pdf">WhitePaper</a>
                  </li>
                  

      <li>
                    <a href="#about">About</a>
                  </li>
                  {/* <li>
                    <a href="./mint-1">Sign_here</a>
                  </li> */}
                 
                  {/* <li>
                    <a href="#team">Team</a>
                  </li> */}
                  <li>
                    <a href="#roadmap">RoadMap</a>
                  </li>
                  {/* <li>
                    <a href="#faq">FAQ</a>
                  </li> */}
                </ul>
              </div>
              <div className="bithu_menu_btns">
    <button className="menu_btn" onClick={() => handleMobileMenu()}>
      <MdNotes />
    </button>
    <Button
      sm
      variant="hovered"
      className="connect_btn"
      onClick={() => walletModalHandle()}
    >
      <FaWallet /> Connect
    </Button>
  </div>
            </div>
          </div>
        </div>
      </NavWrapper>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
