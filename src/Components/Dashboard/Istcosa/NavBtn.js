import React from 'react'

const NavBtn = () => {
  return (
    <div >
      <Dropdown
        menu={{
        items,
        onClick,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
        <Space>
            Hover me, Click menu item
            <DownOutlined />
        </Space>
        </a>
    </Dropdown>

    </div>
  )
}

export default NavBtn