import React from "react"
import Styles from '../../../../Styles/EditProfile/PersonalProfile.module.css'
import { Collapse } from "antd"
import ProfessionalInfo from "./ProfessionalInfo";

import PersonalInfo from "./PersonalInfo";
import { UserMoreDetail } from "../../../../Utils/api/UserMoreDetail";
import { useQuery } from "react-query";
const { Panel } = Collapse;

const EditProfile = () => {

    const { data: userData } = useQuery('UserMoreDetail',UserMoreDetail)

    return(
        <div className={Styles.collapseDetails}>
            <Collapse size="large">
                <Panel header="Personal Information" key="1">
                    <PersonalInfo userData={userData} />
                </Panel>
            </Collapse>
            
            <Collapse size="large">
                <Panel header="Professional Information" key="1">
                    <ProfessionalInfo />
                </Panel>
            </Collapse>
        
        </div>
    
  )
}

export default EditProfile