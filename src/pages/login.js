import { Form, Input, Button, Checkbox, Modal } from "antd";
import { useHistory, Redirect } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword, login } from "../actions/AuthActions";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const header = {
  //   align: "center",
  style: {
    textAlign: "center",
    color: "red",
  },
};

export default function Login() {
  let [isModalVisible, setIsModalVisible] = useState(false);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const currentUser = useSelector((state) => state.auth.user);
  let history = useHistory();
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function handleLogin() {
    dispatch(login());
  }

  const renderLoginContent = () => {
    return (
      <Form {...layout} name="basic" initialValues={{ remember: true }}>
        <h1 {...header}>Login</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            value={email}
            onChange={(event) => dispatch(changeEmail(event.target.value))}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={password}
            onChange={(event) => dispatch(changePassword(event.target.value))}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => handleLogin()}
          >
            Submit
          </Button>
        </Form.Item>
        <Modal
          title="Thông báo"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Đăng nhập sai</p>
        </Modal>
      </Form>
    );
  };
  return currentUser ? <Redirect to='todo' /> : renderLoginContent();
}
