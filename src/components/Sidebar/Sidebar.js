import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {
  UserOutlined,
  BookOutlined,
  InfoCircleOutlined,
  PicCenterOutlined,
  UsergroupAddOutlined,
  ProfileFilled,
} from "@ant-design/icons";

import {Layout, Menu} from "antd";
import withLink from "../../containers/HOC/withLink";

const {Sider} = Layout;

const renderMenuItem = (route, key, empty = false, icon) => {
  const {path, name} = route;

  const children = (
    <React.Fragment {...{key}}>
      <span>{name}</span>
    </React.Fragment>
  );

  if (empty) return children;

  return (
    <Menu.Item icon={icon} {...{key}}>
      {withLink(path)(children)}
    </Menu.Item>
  );
};
const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      path: "/",
      icon: <PicCenterOutlined />,
    },

    {name: "Products", path: "/products", icon: <UsergroupAddOutlined />},

    {
      name: "Users",
      path: "/users",
      icon: <UserOutlined />,
    },
    {name: "Businesses", path: "/businesses", icon: <InfoCircleOutlined />},
    {name: "Recipes", path: "/recipes", icon: <ProfileFilled />},
  ];
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint='lg'
      collapsedWidth='0'
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className='logo-container'>{/*<img src={logo} alt="Logo"/>*/}</div>
      <Menu theme='dark' mode='inline' selectedKeys={[location.pathname]}>
        {items.map((route) => {
          if (!route.name) return null;

          return renderMenuItem(route, route.path, false, route.icon);
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
