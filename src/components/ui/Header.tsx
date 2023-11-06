import {
  BarsOutlined,
  GlobalOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Popover } from ".";
import { PATH } from "constant";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung/slice";
import { showSuccess } from "../../main";
import { useEffect, useState } from "react";
import { getUserIDThunk } from "store/quanLyNguoiDung/thunk";
import { Tabs } from "antd";
import Active from "./Active";
import { getLocationAtHeaderThunk } from "store/quanLyViTri/thunk";
import { ViTri } from "types/quanLyViTri";

interface ParentProps {
  LocationHeader: ViTri[];
  type: string;
}
export const Header: React.FC<ParentProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { getUserID } = useSelector((state: RootState) => {
    return state.quanLyNguoiDung;
  });

  const { LocationHeader } = useSelector(
    (state: RootState) => state.quanLyViTri
  );
  const idUserString = localStorage.getItem("idUser");
  useEffect(() => {
    dispatch(getUserIDThunk(idUserString));
    dispatch(getLocationAtHeaderThunk());
  }, [dispatch]);
  //Xử lý hiệu ứng header click
  const [expanded, setExpanded] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("80px");
  const handleClick = () => {
    setExpanded(!expanded);
    setHeaderHeight(expanded ? "80px" : "180px");
  };
  //Xử lý scroll header
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      }
      handleClick();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  const getViTri = localStorage.getItem("tenViTri");
  return (
    <HeaderX style={{ height: headerHeight }}>
      <div className="grid grid-cols-3 items-center ">
        <img
          src="/images/logo-header.png"
          className="nav-logo"
          onClick={() => {
            navigate("/");
            showSuccess("Về trang chủ");
          }}
        />
        {expanded ? (
          <div className="h-12 header2">
            <TabX>
              <Tabs
                defaultActiveKey="1"
                centered
                type="line"
                items={[
                  {
                    label: (
                      <div className="font-mono text-left rounded-lg p-10">
                        Nơi ở
                      </div>
                    ),
                    key: "stays",
                    children: "",
                  },
                  {
                    label: (
                      <div className="font-mono text-left rounded-lg p-10">
                        Trải nghiệm
                      </div>
                    ),
                    key: "Experiences",
                    children: "",
                  },
                  {
                    label: (
                      <div className="font-mono text-left rounded-lg p-10">
                        Trực tuyến
                      </div>
                    ),
                    key: "Online Experiences",
                    children: "",
                  },
                ]}
              />
            </TabX>
            <Active LocationHeader={LocationHeader} />
          </div>
        ) : (
          <div
            className="nav-search flex justify-evenly items-center border rounded-full shadow-md h-12 w-96"
            onClick={handleClick}
          >
            <button className="border-r-2 text-sm font-medium px-[16px]">
              {getViTri ? getViTri : "Muôn nơi"}
            </button>
            <button className="border-r-2 text-sm  font-medium px-[16px]">
              {getViTri ? "Đặt lịch" : "Mọi lúc"}
            </button>
            <button className="add-guest text-sm text-gray-500 font-medium px-[16px]">
              Thêm khách
            </button>
            <SearchOutlined className="bg-red-500 search text-white rounded-full p-8" />
          </div>
        )}
        <div className="nav-airbnb flex justify-end items-center gap-[24px]">
          <div className="text-Airbnb font-medium">Trở thành chủ nhà</div>
          <div className="text-Airbnb">
            <GlobalOutlined />
          </div>
          {!getUserID ? (
            <Popover
              trigger="click"
              content={
                <div>
                  <div
                    className="!p-10 !mt-5 cursor-pointer hover:bg-gray-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => {
                      navigate(PATH.login);
                    }}
                  >
                    Đăng nhập
                  </div>
                  <div
                    className="!p-10 !mt-5 cursor-pointer hover:bg-gray-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => {
                      navigate(PATH.register);
                    }}
                  >
                    Đăng kí
                  </div>
                  <div
                    className="!p-10 !mt-10 cursor-pointer hover:bg-gray-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Cho thuê chỗ ở qua Airbnb
                  </div>
                </div>
              }
            >
              <div className="nav-user flex justify-center items-center gap-[12px] rounded-full border h-[40px] w-[80px] py-[20px] pr-[24px] pl-[28px]">
                <BarsOutlined />
                <div className="bg-gray-600 text-white rounded-full text-center">
                  <UserOutlined className="w-7 h-7" />
                </div>
              </div>
            </Popover>
          ) : (
            <Popover
              trigger="click"
              content={
                <div>
                  <h2 className="font-600 mb-10 p-10">Hi! {getUserID?.name}</h2>
                  <div
                    className="!p-10 !mt-5 w-[150px] cursor-pointer hover:bg-rose-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => {
                      navigate(PATH.account);
                    }}
                  >
                    Thông tin tài khoản
                  </div>
                  <div
                    className="!p-10 !mt-5 w-[150px] cursor-pointer hover:bg-rose-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => {
                      navigate(PATH.roomchecked);
                    }}
                  >
                    Phòng bạn đã đặt
                  </div>
                  <div
                    className="!p-10 !mt-5 cursor-pointer hover:bg-rose-500 hover:text-white rounded-lg transition-all duration-300"
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
              <div className="nav-user flex justify-center items-center gap-[12px] rounded-full border h-[40px] w-[80px] py-[20px] pr-[24px] pl-[28px]">
                <BarsOutlined />
                {!getUserID?.avatar ? (
                  <div className="bg-green-300 text-white rounded-full text-center w-7 h-7">
                    <UserOutlined className="w-full h-full mr-[7px]" />
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
          )}
        </div>
      </div>
    </HeaderX>
  );
};

export default Header;
const HeaderX = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 3rem;
  z-index: 10;
  contain: size style layout;
  will-change: height;
  background: white;
  transition: height 3000ms var(--itr-yy-z);
  box-shadow: 0px 1px 7px 0px rgba(224, 211, 211, 0.75);
  -webkit-box-shadow: 0px 1px 7px 0px rgba(224, 211, 211, 0.75);
  -moz-box-shadow: 0px 1px 7px 0px rgba(224, 211, 211, 0.75);
  .nav-logo {
    height: 2rem;
  }
  .nav-user {
    cursor: pointer;
    .anticon svg {
      margin-left: 6px;
    }
  }
  .nav-search {
    .add-guest {
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
    box-shadow: -1px 3px 7px -6px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: -1px 3px 7px -6px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: -1px 9px 7px -6px rgba(230, 212, 212, 0.48);
    &:hover {
      --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
        0 2px 4px -2px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  }
  .nav-airbnb {
    .text-Airbnb {
      font-size: 1rem;
      font-weight: 500;
      color: #4b4949;
      padding: 0.8rem;
      border-radius: 2rem;
      &:hover {
        background-color: rgba(243, 234, 234, 0.48);
      }
    }
    .nav-user {
      box-shadow: -1px 3px 7px -6px rgba(0, 0, 0, 0.48);
      -webkit-box-shadow: -1px 3px 7px -6px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: -1px 9px 7px -6px rgba(230, 212, 212, 0.48);
      &:hover {
        --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
          0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      }
    }
  }
  /* .nav-search-header2 {
    transform: translateX(-160px);
    .search-header2 {
      margin-right: 10px;
      svg {
        font-size: 20px;
        margin-left: 8px;
      }
    }
    .search-item {
      transition: all 0.5s;
      height: 100%;
      &:hover {
        background: #f7f4f4;
        border-radius: 20px;
        .border-right {
          border-right: none;
          border-left: none;
        }
        .search-item-input {
          outline: none;
        }
      }
    }
  } */
`;
const TabX = styled.div`
  .ant-tabs-tab-btn {
    color: black;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      Helvetica Neue, sans-serif;
    font-size: 17px;
    div {
      padding: 0 !important;
    }
    :hover {
      color: #b4aaaa;
    }
    /* :active {
      color: yellow !important;
    } */
  }
`;
