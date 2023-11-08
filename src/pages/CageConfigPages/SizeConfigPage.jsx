import {useCallback, useContext, useState} from "react";
import {Form} from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthProvider, useAuth} from "../../contexts/AuthContext";
import Cookies from "js-cookie";

function SizeConfigPage({ data,setData }) {
  const [disabled, setDisabled] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const auth = useAuth()
  const userIdC = Cookies.get("loggedInUser")
  const onFinish = async values => {
    try {
      const body = {
        username: userIdC,
        shape: data.shape,
        material: data.material,
        basePrice: data.basePrice,
        birdtypeId: data.birdtypeId,
        description: `birdName: ${data.birdName}, height: ${values.height}, width: ${values.width}, bar: ${values.bar}`,
      };

      const response = await axios.post("http://localhost:8089/cart/add-to-cart-v2", body);
      if(userIdC) {
        navigate("/checkout?customize-cage=true",{
          state: {
            data: body
          }
        });
      } else {
        navigate("/login")
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeBar = useCallback(event => {
    setData(data => ({
      ...data,
      bar: event.target.value
    }))
  },[data])

  const onChangeHeight = useCallback(event => {
    setData(data => ({
      ...data,
      height: event.target.value
    }))
  },[data])

  const onChangeWidth = useCallback(event => {
    setData(data => ({
          ...data,
          width: event.target.value
    }))
  },[data])

  const onValuesChange = (values, allValues) => {
    if(allValues.bar && allValues.width && allValues.height) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  };

  return (<Form
          onFinish={onFinish}
          onValuesChange={onValuesChange}
          form={form}
      >
      <div className="p-2">
        <h1 className="h3">Chọn kích thước lồng</h1>
      </div>
      <hr />
      <div className="container mb-3">
        <h3 className="h5">Số nan</h3>
        <Form.Item
            name="bar"
            rules={[{
              required: true, message: "Vui lòng chọn số nan mong muốn!",
            },]}
        >
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          onChange={onChangeBar}
        >
          <option value="">Chọn số nan</option>
          <option value="17">17</option>
          <option value="52">52</option>
          <option value="56">56 </option>
          <option value="60">60 </option>
          <option value="64">64 </option>
          <option value="68">68 </option>
          <option value="72">72 </option>
        </select>
        </Form.Item>

        <h3 className="h5">Chiều cao</h3>
        <Form.Item
            name="height"
            rules={[{
              required: true, message: "Vui lòng chọn chiều cao mong muốn!",
            },]}
        >
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          onChange={onChangeHeight}
        >
          <option value="">Chọn chiều cao</option>
          <option value="Thường">Thường</option>
          <option value="Đấu">Đấu</option>
          <option value="Cao">Cao</option>
        </select>
        </Form.Item>
        <h3 className="h5">Đường kính</h3>
        <Form.Item
            name="width"
            rules={[{
              required: true, message: "Vui lòng chọn đường kính mong muốn !",
            },]}
        >
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={onChangeWidth}
        >
          <option value="">Chọn đường kính</option>
          <option value="30">30cm</option>
          <option value="33">33cm</option>
          <option value="36">36cm</option>
          <option value="40">40cm</option>
          <option value="45">45cm</option>
        </select>
        </Form.Item>
      </div>
      <div className="text-center mb-4">
        <Form.Item>
          <button
              className="btn btn-primary px-5"
              type="submit"
              disabled={disabled}
          >
            Tiến hành thanh toán
          </button>
        </Form.Item>
      </div>

      </Form>
  );
}

export default SizeConfigPage;
