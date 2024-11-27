import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Flex, Input, Layout, Alert } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate  } from "react-router-dom";


export default function Login() {

const [users, setUsers] = useState([]);
const [formErrors, setFormErrors] = useState({});
const [isValidateSuccess, setIsValidateSuccess] = useState(false);

const navigate = useNavigate ();

useEffect(() =>{
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => 
        {
            console.log(res);
            setUsers(res.data);
        });
  }, [])

  const checkRegisteredUser = (values) => {
    console.log(checkRegisteredUser)
    navigate('/')
  }

  const onFinish = (values) => {
    console.log('Finish:', values);
    const errors = {};
    const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if(!emailRegex.test(values.email)){
        errors.email = "Enter Valid Email";
    } 
    if(values.password.length < 3 || values.password.length > 10){
        errors.password = "Enter password length min 3 and max 10";
    }
    if(Object.keys(errors).length === 0){
        setIsValidateSuccess(true)
        setFormErrors(errors);
        checkRegisteredUser(values)
    }else{
        setFormErrors(errors);
    }
  };



  return (
    <div style={{ backgroundColor:"#f0f0f0", height: "100vh", padding:"100px 0"}} >
    <Layout.Content >      
        
        {
        Object.keys(formErrors).length != 0 ? (formErrors.email ?
            <Alert message={formErrors.email} type="warning" showIcon style={{ maxWidth: 360, margin:"20px auto"}}/> :
                    <Alert message={formErrors.password} type="warning" showIcon style={{ maxWidth: 360, margin:"20px auto"}}/>):""
        }

        <Form name="login" initialValues={{remember: true }}
        style={{ maxWidth: 360, backgroundColor:"white", padding:20, margin:"auto"}}
        onFinish={onFinish}
        >

        <Form.Item
            name="email"
            rules={[ { required: true, message: 'Please input your Email!'},]}
        >
            <Input prefix={<UserOutlined />} placeholder="Email"/>
        </Form.Item>

        <Form.Item
            name="password"
            rules={[ { required: true, message: 'Please input your Password!',},]}
        >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        
        <Form.Item>
            <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            </Flex>
        </Form.Item>

        <Form.Item>
            <Button block type="primary" htmlType="submit">
                Log in
            </Button>
        </Form.Item>

        </Form>
    </Layout.Content>   
    </div>   
  )
}
