import React from "react";
import {Space, Layout} from "antd";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";

import {useDispatch} from "react-redux";

import {logout} from "../services/actions";
import Sidebar from "../components/Sidebar";

const {Header, Content, Footer} = Layout;

const DashboardLayout = ({children}) => {
  const dispatch = useDispatch();

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Sidebar />
      <Layout style={{marginLeft: 200}}>
        <Header
          className='site-layout-sub-header-background'
          style={{
            backgroundColor: "#fff",
            padding: "0 2rem",
            color: "#222",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Space direction='horizontal'>
            <div className='logout' onClick={() => dispatch(logout())}>
              <Space direction='horizontal'>
                <LogoutOutlined color='#fff' />
                <span>Log Out</span>
              </Space>
            </div>
          </Space>
        </Header>
        <Content style={{margin: "24px 16px 0"}}>
          <div
            className='site-layout-background'
            style={{padding: 24, minHeight: 360}}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Novalab© 2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
