import { Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const TagInput = (props) => (

    <Space.Compact block >
        <Select
            showArrow = {false}
            value={props.label}
            style={{
            width: props.sw,
            paddingLeft : props.padd
            }}
        />
        <Select
            mode="tags"
            style={{
            width: props.nsw,
            }}
            placeholder={props.label}
            onChange={handleChange}
        />
  </Space.Compact>
);
export default TagInput;