import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@mui/icons-material';
import { Button, Form, Modal, Popconfirm, Table, Tooltip } from 'antd'
import React, { useState } from 'react'
import EditIconModal from './EditIconModal';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Styles from '../../../../Styles/EditProfile/ProfessionalInfo.module.css'

const ProfessionalInfo = () => {

  const [ modal, setModal ] = useState(false);
  const [ addCompany, setAddCompany ] = useState(false);


  const EditIconHandler = () =>{
    setModal(true);
  }

  const editCancelHandler = (e) =>{
    setModal(e)
  }
  const editDoneHandler = (e) =>{
    setModal(e)
  }

  const addCompanyHandler = () =>{
    setAddCompany(true);
  }
  const addDoneHandler = (e) =>{
    setAddCompany(e);
  }
  const addCancelHandler = (e) =>{
    setAddCompany(e);
  }


  
  const columns = [
    {
      
      title: 'Designation',
      dataIndex: 'Designation',
      
    },
    {
      title: 'Company Name',
      dataIndex: 'CompanyName',
    },
    {
      title: 'Profession',
      dataIndex: 'Profession',
    },
    {
      title: 'From date',
      dataIndex: 'Fromdate',
    },
    {
      title: 'To Date',
      dataIndex: 'Todate',
    },
    {
        
      title: '' ,
      dataIndex: 'Add',
    },
  ];



 
  const data = [
    {
      key: '1',
      Designation: 'John Brown',
      Fromdate: '32/03/2020',
      Profession: 18889898989,
      Todate : '32/03/2020',
      CompanyName: 'London No. 1 Lake Park',
      Add : [
        <Tooltip title="Edit" color='Green'>
          <EditOutlined fontSize='small' style={{ paddingLeft : 5, cursor : 'pointer' }} onClick={EditIconHandler} />
        </Tooltip>
        ,
        <Tooltip title="Delete" color='red'>
          <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
            <DeleteOutlined  fontSize='small' style={{ paddingLeft : 15, cursor : 'pointer' }} />
          </Popconfirm>
        </Tooltip>
      ]
    },
    {
      key :2,
      Designation : 'hello',
      Profession: 18889898989,

      Add : [<EditOutlined fontSize='small' style={{ paddingLeft : 5, cursor : 'pointer' }} />,<Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No"><DeleteOutlined  fontSize='small' style={{ paddingLeft : 15, cursor : 'pointer' }} /></Popconfirm>]

    },
    {
      key: '3',
      Designation: 'Jim Green',
      CompanyName: 'London No. 1 Lake Park ryhehy  gheg erg',

      Profession: 18889898888,
      Fromdate: '42/20/2990',
      Todate : '32/03/2020',
      Add : [<EditOutlined fontSize='small' style={{ paddingLeft : 5, cursor : 'pointer' }} />,<DeleteOutlined  fontSize='small' style={{ paddingLeft : 15, cursor : 'pointer' }} />]

    },
  ]

  

  return (
    <>
      <Table columns={columns} dataSource={data} bordered />
      
      <Modal
        title="Add Company"
        centered
        open={modal}
        onCancel={() => setModal(false)}
        footer={null}
      >
        <EditIconModal onDone={editDoneHandler} onCancel={editCancelHandler} />
      </Modal>

      <div className={Styles.addCompany}>
        <Tooltip title="Add Company" color='Green'> 
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
          <EditIconModal onDone={addDoneHandler} onCancel={addCancelHandler} />
        </Modal>
      </div>
     
      
    </>
  )
}

export default ProfessionalInfo