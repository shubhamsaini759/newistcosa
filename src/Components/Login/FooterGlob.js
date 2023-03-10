import React from "react";
import Styles from "../../Styles/Login/Footer.module.css";
import FooterCard from "./FooterCard/FooterCard";

import president from "../../Assets/Login/president.jpg";
import gen from "../../Assets/Login/gen.jpg";
import vice from "../../Assets/Login/vice.jpg";
import admin from "../../Assets/Login/admin.png";


import LocationOnIcon from "@mui/icons-material/LocationOn";

import {  Tag } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons/lib/icons";

const FooterGlob = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.upperLeft}>
        <FooterCard
          image={president}
          role="President"
          name="Anil Selhi (8446)"
          num="+919814099760"
          gmail="president@istcosa.com"
        />
        <FooterCard
          image={vice}
          role="Vice president"
          name="Sripall Singh Chagar (6905)"
          num="+919872045209"
          gmail="vicepresident@istcosa.com"
        />
        <FooterCard
          image={gen}
          role="Gen. Secretary"
          name="M. K. Aggarwal (7866)"
          num="+91815578844"
          gmail="gensecretary@istcosa.com"
        />
        <FooterCard
          image={admin}
          role="Admin"
          name="Inderpreet Singh (9968)"
          num="+919872469996"
          gmail="admin@istcosa.com"
        />
      </div>

      <div className={Styles.upperRight}>
        <div className={Styles.texts}>
          <h2>Get In Touch</h2>
          <div className={Styles.loc}>
            <div>
              <LocationOnIcon />
            </div>
            <div className={Styles.locPara}>
              <p>
              ISTCOSA Office old hostel Building Indo-Swiss Training Centre CSIO
              Sector 30-C Chandigarh-160030
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.icons}>
          {/* <Tooltip title="Facebook">
            <FacebookIcon sx={{ cursor: "pointer" }} fontSize="large" />
          </Tooltip>
          <Tooltip title="linkedin">
            <LinkedInIcon sx={{ cursor: "pointer" }} fontSize="large" />
          </Tooltip>
          <Tooltip title="twitter">
            <TwitterIcon sx={{ cursor: "pointer" }} fontSize="large" />
          </Tooltip>
          <Tooltip title="youtube">
            <YouTubeIcon sx={{ cursor: "pointer" }} fontSize="large" />
          </Tooltip> */}
            <Tag icon={<TwitterOutlined />} color="#55acee" style={{ display : 'flex', alignItems : 'center', cursor : 'pointer' }}>
              Twitter
            </Tag>
            <Tag icon={<YoutubeOutlined />} color="#cd201f" style={{ display : 'flex', alignItems : 'center', cursor : 'pointer' }}>
              Youtube
            </Tag>
            <Tag icon={<FacebookOutlined />} color="#3b5999" style={{ display : 'flex', alignItems : 'center', cursor : 'pointer' }}>
              Facebook
            </Tag>
            <Tag icon={<LinkedinOutlined />} color="#55acee" style={{ display : 'flex', alignItems : 'center', cursor : 'pointer' }}>
              LinkedIn
            </Tag>
        </div>
      </div>
    </div>
  );
};

export default FooterGlob;
