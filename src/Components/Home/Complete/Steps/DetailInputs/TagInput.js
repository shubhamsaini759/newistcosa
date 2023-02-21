import { Select, Space } from 'antd';



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
            value={props.value}
            onChange={(e)=>props.changeHandler(e)}
        />
  </Space.Compact>
);
export default TagInput;