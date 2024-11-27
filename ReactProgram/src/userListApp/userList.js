import React, { useEffect, useState } from 'react'
import { Space, Table, Button, Avatar, Layout, Tag, Form, Typography, Modal, Col, Row, Input  } from 'antd';
import { LogoutOutlined, SearchOutlined, TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../LoginRedux/Redux/userSlice';

export default function UserList() {

  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { Header, Content } = Layout;
  const { Text, Title } = Typography;
  const { Search } = Input;

  const [form] = Form.useForm();

  useEffect(() =>{
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => 
        {
            console.log(res);
            setUsers(res.data);
        });
  }, [])

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
  }

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const showModal = () => {  setIsModalOpen(true);} ;
  const handleOk = (e) => { 
    console.log("handleOk",e.target.value)
    setIsModalOpen(false); 
};
// const onFinish = (values) => {
//     console.log("onFinish",values)
// }
  const handleCancel = () => { setIsModalOpen(false); };

  const showEditModal = () => {  setIsEditModalOpen(true);} ;
  const handleEditOk = (e) => {
    console.log("handleEditOk",form, e)
     setIsEditModalOpen(false); 
  };
  const handleEditCancel = () => { setIsEditModalOpen(false); };


  const columns = [
    {
        title: '',
        key: 'avatar',
        dataIndex: 'avatar',
        align: 'center',
        render: (avatar) => (
                <Avatar size={40} src={avatar}/>
        )
    },
    { title: 'Email', dataIndex: 'email', key: 'email', },
    { title: 'First Name', dataIndex: 'first_name', key: 'first_name', },
    { title: 'Last Name', dataIndex: 'last_name', key: 'last_name', },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space>
              <Button type="primary" variant="solid" onClick={showEditModal}>
                            Edit
               </Button>
                <Modal title="Edit User" open={isEditModalOpen} onOk={handleEditOk} onCancel={handleEditCancel}>
                    <hr/>
                    <Form form={form} layout="vertical">
                        <Form.Item label="First Name"  required>
                            <Input value={"Firstname"}/>
                        </Form.Item>
                        <Form.Item label="Last Name" required>
                            <Input value={"Firstname"} />
                        </Form.Item>
                        <Form.Item label="Email" required>
                            <Input value={"test@testing.com"} />
                        </Form.Item>
                        <Form.Item label="Profile Image Lnk" required>
                            <Input value={"https://image.url.com"} />
                        </Form.Item>
                    </Form>
                    <hr/>
                </Modal>
              <Button color="danger" variant="solid"> Delete </Button>
            </Space>
        )
    },
  ];
  return (
    <Layout>
        <Header>
            <div style={{display:"flex", justifyContent:"flex-end", alignItems:"end",}}>
                    <Title level={5} type="warning" style={{padding:"0 20px"}}> { " " || users[0].first_name} </Title>
                    <Button color="danger" variant="solid" style={{margin:"20px"}} onClick={(e) => handleLogout(e)}> <LogoutOutlined /> </Button>
            </div>
        </Header>
        <Content>      
            <div style={{ padding: 64}} >
                <div style={{backgroundColor: "white", padding: 10}}>
                    <Row style={{display:"flex", alignItems:"center"}}> 
                        <Col span={18}><Title level={2} > Users </Title></Col>
                        <Col span={4}> <Search placeholder="input search text" onSearch={onSearch} style={{width: 200,}}/></Col>
                        <Col span={2}>
                            <Button type="primary" onClick={showModal}>
                                Create User
                            </Button>
                            <Modal title="Create New User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <hr/>
                                <Form form={form} layout="vertical" >
                                    <Form.Item label="First Name" required>
                                        <Input placeholder="Please enter first name"/>
                                    </Form.Item>
                                    <Form.Item label="Last Name" required>
                                        <Input placeholder="Please enter last name" />
                                    </Form.Item>
                                    <Form.Item label="Email" required>
                                        <Input placeholder="Please enter email" />
                                    </Form.Item>
                                    <Form.Item label="Profile Image Lnk" required>
                                        <Input placeholder="Please enter profile page link" />
                                    </Form.Item>
                                </Form>
                                <hr/>
                            </Modal>
                        </Col>
                    </Row>  
                    <Row style={{display:"flex", alignItems:"center"}}> 
                        <Col span={2}> <Button icon={<TableOutlined/>}>Table</Button> </Col>
                        <Col span={1}> <Button icon={<UnorderedListOutlined/>}>Card</Button> </Col>
                    </Row>
                </div>   
                <Table dataSource={users} columns={columns} />;
            </div>
      </Content>
    </Layout>
  )
}
