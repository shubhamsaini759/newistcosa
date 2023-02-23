import { message } from 'antd';
import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => {


    const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };
  return (
    <div>
     {contextHolder}
     
    </div>
    );
  }