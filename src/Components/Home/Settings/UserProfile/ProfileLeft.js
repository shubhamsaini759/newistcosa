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
import { NavLink } from "react-router-dom";
import { DateFormatter } from "../../../../Utils/Helpers";

const ProfileLeft = (props) => {
  const [dob, setDob] = useState("");

  useEffect(() => {
    setDob( DateFormatter(props?.data?.DateOfBirth) )
  
  }, []);

  return (
    <>
      <div className={Styles.Topleft}>
        <div className={Styles.photos}>
          <Image
            width={100}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width={100}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>

        <div className={Styles.name}>
          <p>{props?.data?.FullName} </p>
        </div>

        {props?.data?.MembershipType ? (
          <div className={Styles.member}>
            <WorkspacePremiumIcon />
            <span>{props?.data?.MembershipType}</span>
          </div>
        ) : (
          ""
        )}

        <div className={Styles.editPro}>
          <NavLink to="/home/settings/editprofile">
            <Button type="dashed">
              <EditOutlined fontSize="small" /> Edit Profile
            </Button>
          </NavLink>
        </div>
      </div>
      <div className={Styles.topRight}>
        <div className={Styles.info}>
          {props?.data?.Address ? (
            <div>
              <PlaceIcon fontSize="small" style={{ marginRight: 10 }} />
              <span>{props?.data?.Address}</span>
            </div>
          ) : (
            ""
          )}

          {props?.data?.Gender ? (
            <div>
              <BoyIcon fontSize="small" style={{ marginRight: 10 }} />
              <span>{props?.data?.Gender}</span>
            </div>
          ) : (
            ""
          )}
          {dob ? (
            <div>
              <CelebrationIcon fontSize="small" style={{ marginRight: 10 }} />
              <span>{dob}</span>
            </div>
          ) : (
            ""
          )}
          {props?.data?.MaritalStatus ? (
            <div>
              <FavoriteIcon fontSize="small" style={{ marginRight: 10 }} />
              <span>{props?.data?.MaritalStatus}</span>
            </div>
          ) : (
            ""
          )}

          {props?.data?.Email ? (
            <div>
              <EmailIcon fontSize="small" style={{ marginRight: 10 }} />
              <span>{props?.data?.Email}</span>
            </div>
          ) : (
            ""
          )}
          {props?.data?.WhatsappNumber ? (
            <div>
              <CallIcon fontSize="small" style={{ marginRight: 10 }} />
              <span>{props?.data?.WhatsappNumber}</span>
            </div>
          ) : (
            ""
          )}
          {props?.data?.CompanyName ? (
            <div>
              <BusinessIcon fontSize="small" style={{ marginRight: 10 }} />
              <span>{props?.data?.CompanyName}</span>
            </div>
          ) : (
            ""
          )}
          {props?.data?.Profession ? (
            <div>
              <PortraitIcon fontSize="small" style={{ marginRight: 10 }} />
              <span>{props?.data?.Profession}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileLeft;
