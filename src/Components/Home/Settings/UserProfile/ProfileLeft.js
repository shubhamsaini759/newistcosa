import React, { useEffect, useState } from "react";
import Styles from "../../../../Styles/UserProfile/UserProfile.module.css";
import { Button, Divider, Image } from "antd";
import PlaceIcon from "@mui/icons-material/Place";

import BoyIcon from "@mui/icons-material/Boy";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { EditOutlined } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import PortraitIcon from "@mui/icons-material/Portrait";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const ProfileLeft = (props) => {
  const [dob, setDob] = useState("");

  useEffect(() => {
    const x = new Date(props?.data?.DateOfBirth).toDateString();
    setDob(x.slice(4, 15));
    
  }, []);

  return (
    <>
      <div className={Styles.Topleft}>
        <div className={Styles.photos}>
          <Image width={100} src={props?.data?.ImagePath} />
          <Image
            width={100}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>

        <div className={Styles.name}>
          <p>{props?.data?.FullName} </p>
        </div>
        <div className={Styles.member}>
          <WorkspacePremiumIcon />
          <span>{props?.data?.MembershipType}</span>
        </div>
        <div className={Styles.editPro}>
          <Button type="dashed">
            <EditOutlined fontSize="small" /> Edit Profile
          </Button>
        </div>
      </div>
      <div className={Styles.topRight}>
        <div className={Styles.info}>
          <div>
            <PlaceIcon fontSize="small" style={{ marginRight: 10 }} />
            <span>{props?.data?.Address}</span>
          </div>

          <div>
            <BoyIcon fontSize="small" style={{ marginRight: 10 }} />
            <span>{props?.data?.Gender}</span>
          </div>
          <div>
            <CelebrationIcon fontSize="small" style={{ marginRight: 10 }} />
            <span>{dob}</span>
          </div>
          <div>
            <FavoriteIcon fontSize="small" style={{ marginRight: 10 }} />
            <span>{props?.data?.MaritalStatus}</span>
          </div>
          <div>
            <EmailIcon fontSize="small" style={{ marginRight: 10 }} />
            <span>{props?.data?.Email}</span>
          </div>
          <div>
            <CallIcon fontSize="small" style={{ marginRight: 10 }} />
            <span>{props?.data?.WhatsappNumber}</span>
          </div>
          <div>
            <BusinessIcon fontSize="small" style={{ marginRight: 10 }} />
            <span>{props?.data?.CompanyName}</span>
          </div>
          <div>
            <PortraitIcon fontSize="small" style={{ marginRight: 10 }} />
            <span>{props?.data?.Profession}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLeft;
