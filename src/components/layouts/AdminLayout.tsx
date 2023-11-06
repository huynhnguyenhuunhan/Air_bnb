import React, { useEffect, useState } from "react";
import {
  BankOutlined,
  FileImageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Menu, Popover } from "components/ui";
import { PATH } from "constant";
import { RootState, useAppDispatch } from "store";
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung/slice";
import { showSuccess } from "../../main";
import { useSelector } from "react-redux";
import { getUserIDThunk } from "store/quanLyNguoiDung/thunk";
const { Header, Content, Footer, Sider } = Layout;

export const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { getUserID } = useSelector((state: RootState) => {
    return state.quanLyNguoiDung;
  });
  console.log("getUserIdStore layout", getUserID);
  const idUserString = localStorage.getItem("idUser");
  // dispatch(getUserIDThunk(idUserString));
  useEffect(() => {
    dispatch(getUserIDThunk(idUserString));
  }, []);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical">
          <img
            src="/images/logo-header.png"
            className="w-full h-full px-[30px] py-[10px]"
          />
        </div>
        {/* <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        /> */}
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" title="Người dùng" icon={<UserOutlined />}>
            <NavLink to={PATH.users}>Người dùng</NavLink>
          </Menu.Item>
          <Menu.Item
            key="2"
            title="Thông Tin Vị Trí"
            icon={<FileImageOutlined />}
          >
            <NavLink to={PATH.location}>Thông tin vị trí</NavLink>
          </Menu.Item>
          <Menu.Item key="3" title="Thông Tin Phòng" icon={<BankOutlined />}>
            <NavLink to={PATH.room}> Thông tin phòng</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0 }}
          className="flex justify-end items-center"
        >
          <Popover
            trigger="click"
            content={
              <div>
                <h2 className="font-600 mb-10 p-10">Hi! {getUserID?.name}</h2>
                <div
                  className="!p-10 !mt-5 cursor-pointer hover:bg-rose-400 hover:text-white rounded-lg transition-all duration-300"
                  onClick={() => {
                    dispatch(quanLyNguoiDungActions.logout());
                    showSuccess("Đã đăng xuất tài khoản!");
                    navigate("/");
                  }}
                >
                  Đăng xuất
                </div>
              </div>
            }
          >
            <div className="nav-user flex justify-center items-center gap-[12px] rounded-full border-[2px] border-green-500 h-[40px] w-[80px] py-[20px] pr-[24px] pl-[28px] mt-[5px] mr-[15px] bg-yellow-50 cursor-pointer">
              {!getUserID?.avatar ? (
                <div className="bg-green-400 text-white rounded-full text-center w-7 h-7 ">
                  {/* <UserOutlined className="w-full h-full mr-[7px]" /> */}
                </div>
              ) : (
                <img
                  src={getUserID?.avatar}
                  className="rounded-full text-center w-7 h-7"
                  alt=""
                />
              )}
            </div>
          </Popover>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          {/* <div style={{ padding: 24, minHeight: 360 }}></div> */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          AirBnb ©2023 Created by Admin
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
