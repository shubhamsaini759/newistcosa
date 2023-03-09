import React, { useState } from "react";

import Styles from '../../../../Styles/EditProfile/PersonalProfile.module.css'
import { Collapse } from "antd"
import ProfessionalInfo from "./ProfessionalInfo";

import { Button, Form, Modal, Popconfirm, Table, Tooltip } from "antd";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddCompModal from "./AddCompModal";


import PersonalInfo from "./PersonalInfo";
import { UserMoreDetail } from "../../../../Utils/api/UserMoreDetail";
import { useQuery } from "react-query";
const { Panel } = Collapse;

const EditProfile = () => {

    const { data: userData } = useQuery('UserMoreDetail',UserMoreDetail)

  const [addCompany, setAddCompany] = useState(false);

  
  const addCompanyHandler = () => {
    setAddCompany(true);
  };
  const addDoneHandler = (e) => {
    setAddCompany(e);
  };
  const addCancelHandler = (e) => {
    setAddCompany(e);
  };


    return(
        <div className={Styles.collapseDetails}>
            <Collapse size="large">
                <Panel header="Personal Information" key="1">
                    <PersonalInfo userData={userData} />
                </Panel>
            </Collapse>
            
            <Collapse size="large">
                <Panel header="Professional Information"  key="1" 
                    extra={
                        <div className={Styles.addCompany}>
                            <Tooltip title="Add Company" color="Green">
                            <Button type="dashed" className={Styles.addButton}>
                                <AddBusinessIcon onClick={addCompanyHandler} />
                            </Button>
                            </Tooltip>
                            <Modal
                            title="Add Company"
                            centered
                            open={addCompany}
                            onCancel={() => setAddCompany(false)}
                            footer={null}
                            >
                            <AddCompModal onDone={addDoneHandler} onCancel={addCancelHandler} />
                            </Modal>
                        </div>
                    }
                >
                    <ProfessionalInfo  />
                </Panel>
            </Collapse>
        
        </div>
    
  )
}

export default EditProfile