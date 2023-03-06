import { Avatar, Card, Tooltip } from 'antd'
import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Meta from 'antd/es/card/Meta';

const SearchCard = () => {

  
  return (
    <div>
        <Card
            style={{
            width: 300,
            marginTop: 16,
            }}
            actions={[
                <Tooltip title="Badge" color='green'  >
                    <SettingOutlined key="setting" />,
                </Tooltip>,

                <Tooltip title="Life Member" color='green'  >
                    <WorkspacePremiumIcon key="edit" />,
                </Tooltip>,

                <Tooltip title="More Details" color='green'  >
                    <EllipsisOutlined key="ellipsis" />
                </Tooltip>,
            ]}
            hoverable
                   

        >
            <Meta
                avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
                title="Shubham Saini"
                description= "Roll No. : 1006 " 
    
                
            />
              
        </Card>
    </div>
  )
}

export default SearchCard