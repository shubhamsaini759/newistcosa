import React, { useEffect, useState } from "react";
import Styles from "../../../../Styles/UserProfile/UserProfile.module.css";
import { Divider } from "antd";
import { format } from "date-fns";

import PortraitIcon from "@mui/icons-material/Portrait";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const ProfileRight = (props) => {
  return (
    <>
      <div className={Styles.Bottom}>
        <Divider className={Styles.dividers} orientation="left" plain>
          About Myself
        </Divider>
        <div className={Styles.myself}>
          <p>{props?.data?.AboutYourSelf}</p>
        </div>

        <Divider className={Styles.dividers} orientation="left" plain>
          Experience
        </Divider>

        <div className={Styles.experience}>
          {props?.data?.ProfessionalInformation?.map((x, ind) => (
            <div className={Styles.expDetails} key={ind}>
              <div className={Styles.expinfo}>
                <h6>{x?.CompanyName}</h6>
                <div>
                  <BusinessIcon fontSize="small" style={{ marginRight: 10 }} />
                  <span>Industrial area phase 2,panchkula</span>
                </div>
                <div>
                  <PortraitIcon fontSize="small" style={{ marginRight: 10 }} />
                  <span>{x?.Designation}</span>
                </div>
                <div>
                  <BusinessCenterIcon
                    fontSize="small"
                    style={{ marginRight: 10 }}
                  />
                  <span>Profession : {x?.Profession}</span>
                </div>
                <div>
                  <CalendarMonthIcon
                    fontSize="small"
                    style={{ marginRight: 10 }}
                  />
                  <span>
                    {new Date(x?.FromDate).toDateString().slice(3, 15)} -{" "}
                    {x.ToDate
                      ? new Date(x.ToDate).toDateString().slice(3, 15)
                      : ""}
                  </span>
                </div>
              </div>
              <div className={Styles.expDescription}>
                <p>Description :</p>
                <p>{x?.Responsibility}</p>
              </div>
            </div>
          ))}
        </div>

        <Divider className={Styles.dividers} orientation="left" plain>
          About ISTCOSA
        </Divider>
        <div className={Styles.aboutIstcosa}>
          <div>
            <p>{props?.data?.ISTCAbout}</p>
          </div>
        </div>

        <Divider className={Styles.dividers} orientation="left" plain>
          Comments ISTC
        </Divider>
        <div className={Styles.commentsIstcosa}>
          <div>
            <p>{props?.data?.Commnets}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileRight;

// <div className={Styles.rightInfo}>
//     <Divider className={Styles.dividers} orientation="left" plain>Experience</Divider>
//     <div className={Styles.experience}>

//             <div className={Styles.expDetails}>
//                 <div className={Styles.expinfo}>
//                     <h6>Bitru Manufacturing Components Pvt. Ltd.</h6>
//                     <p>Industrial area phase 2,panchkula</p>
//                     <p>CEO</p>
//                     <p>Profession : Private Sector</p>
//                     <p>Dec-2018 - Nov-2018</p>
//                 </div>
//                 <div className={Styles.expDescription} >
//                     <p>Description :</p>
//                     <p>
//                         Coal is a very useful hard and black material collected from mines.
//                         The woods buried under the earth for a long time turn into coal by some chemical change.
//                         Earthquakes cause vast forest areas to dip underground and help to bring about
//                         such changes due to tremendous heat and pressure. In our country coal mines are
//                         found at Asansol, Raniganj, Dhanbad, Jharia, Giridih, Chaibasa, etc. India exports
//                         coal to Japan, Nepal, and Bangladesh.
//                     </p>
//                 </div>
//             </div>
//     </div>

//     <Divider className={Styles.dividers} orientation="left" plain>About ISTCOSA</Divider>
//     <div className={Styles.aboutIstcosa}>

//         <div>
//             <p>
//                 Coal is a very useful hard and black material collected from mines.
//                 The woods buried under the earth for a long time turn into coal by some chemical change.
//                 Earthquakes cause vast forest areas to dip underground and help to bring about
//                 such changes due to tremendous heat and pressure.
//             </p>
//         </div>
//     </div>

//     <Divider className={Styles.dividers} orientation="left" plain>Comments ISTC</Divider>
//     <div className={Styles.commentsIstcosa}>
//         <div>
//             <p>
//                 Coal is a very useful hard and black material collected from mines.
//                 The woods buried under the earth for a long time turn into coal by some chemical change.
//                 Earthquakes cause vast forest areas to dip underground and help to bring about
//                 such changes due to tremendous heat and pressure.
//             </p>
//         </div>
//     </div>
// </div>
