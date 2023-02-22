import { Button } from 'antd'
import React from 'react'
import Styles from '../../../../../Styles/Dashboard/StepTwoModal.module.css'
import AutoInputs from '../DetailInputs/AutoInputs'
import SimpleInputs from '../DetailInputs/SimpleInputs'
import TextAreaInput from '../DetailInputs/TextAreaInput'

const StepTwoModal = () => {
  return (
        <div className={Styles.AddModal}>   
            <div className={Styles.firstRow}>
                <SimpleInputs label='Company Name' />
                <SimpleInputs label='Contact Number' />
            </div>
            <div className={Styles.secondRow}>
                <SimpleInputs label='Compnay Email' />
            </div>
            <div className={Styles.thirdRow}>
            <TextAreaInput label='Company Address' />
            </div>
            <div className={Styles.fourthRow}>
                // <AutoInputs sw="24%" aw="66%" label="Country"/>
                // <AutoInputs sw="24%" aw="66%" label="State"/>
                // <AutoInputs sw="24%" aw="66%" label="City"/>
            </div>
            <div className={Styles.SixthRow}>
                <Button>Close</Button>
                <Button>Add</Button>
            </div>
            
        </div>
    )
}

export default StepTwoModal