import { DatePicker } from "antd";
import { PATH } from "constant";
import { showError, showSuccess } from "../../main";
import React, { useState } from "react";
import { NavigateFunction, generatePath, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ViTri } from "types/quanLyViTri";

interface TabData {
  id: number;
  title: JSX.Element;
  component?: React.ComponentType<{ LocationHeader: ViTri[] }> | any;
  content: JSX.Element;
}

const tabsData: TabData[] = [
  {
    id: 1,
    title: (
      <div className="text-left search-item">
        <div className="border-right ml-[30px] py-[11px]">
          <p className=" text-[13px] font-medium ">Địa điểm </p>
          <p className="text-[15px]">Bạn muốn đi đâu?</p>
        </div>
      </div>
    ),
    // component: ChildComponent,
    content: <div></div>,
  },
  {
    id: 2,
    title: (
      <div className="text-center search-item">
        <div className="py-[8px] px-[12px]">
          <p className="text-[13px] font-medium px-[16px] ">Nhận phòng</p>
          <div className="text-[15px]">
            <DatePicker format="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
          </div>
        </div>
      </div>
    ),
    content: <span></span>,
  },
  {
    id: 3,
    title: (
      <div className="text-center search-item">
        <div className="py-[8px] px-[11px]">
          <p className="text-[13px] font-medium px-[16px]">Trả phòng</p>
          <div className="text-[15px]">
            {" "}
            <DatePicker format="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
          </div>
        </div>
      </div>
    ),
    content: <span></span>,
  },
  {
    id: 4,
    title: (
      <div className="search-id flex justify-between search-item py-[12px] px-[18px]">
        <div className="search-id-left">
          <p className="text-[13px] font-medium px-[16px] mb-[5px] ">Khách</p>
          <p className="text-[15px]">Thêm khách</p>
        </div>
        <div className="ml-[10px] w-[100px] h-[40px] search-header2 mt-[5px] cursor-pointer">
          <p className="bg-red-500 search text-white rounded-[20px] w-full h-full text-center flex items-center justify-center">
            Tìm kiếm
          </p>
        </div>
      </div>
    ),
    content: <span></span>,
  },
];

interface SearchBarProps {
  handleTabClick: (tabId: number) => void;
  activeTab: number;
  searchValueInput: string;
  handleInput: (ev: any) => void;
  LocationHeader: ViTri[];
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOption: any;
  navigate: NavigateFunction;
}

const SearchBar: React.FC<SearchBarProps> = ({
  handleTabClick,
  activeTab,
  searchValueInput,
  handleInput,
  setShowDropdown,
  selectedOption,
  navigate,
}) => {
  const path = selectedOption
    ? generatePath(PATH.roomslist, { maViTri: selectedOption?.id })
    : generatePath(PATH.roomslist, { maViTri: 1 });
  return (
    <ActiveBar>
      <div className="nav-search-header2 flex border items-center rounded-full shadow-md h-[65px] w-[900px]">
        {tabsData.map((tab) => (
          <div
            key={tab?.id}
            className={`search-tab  ${1 === tab?.id ? "w-[40%]" : "w-25%"} ${
              4 === tab?.id ? "w-[30%]" : "w-25%"
            } ${activeTab === tab?.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab?.id)}
          >
            {tab?.id === 1 ? (
              <div className="text-left search-item">
                <div className="ml-[30px] py-[11px] flex">
                  <div className="px-[5px]">
                    <p className=" text-[13px] font-medium ">Địa điểm </p>
                    <input
                      className="outline-none"
                      placeholder="Bạn muốn đi đâu?"
                      onChange={(ev) => {
                        handleInput(ev);
                      }}
                      value={searchValueInput}
                      onFocus={() => setShowDropdown(true)}
                    />
                  </div>
                  <div className="w-[80px] h-[50px] ml-[15px">
                    {selectedOption ? (
                      <img
                        src={selectedOption?.hinhAnh}
                        className="w-full h-full rounded-full"
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ) : tab?.id === 4 ? (
              <div className="search-id flex justify-between search-item py-[12px] px-[18px]">
                <div className="search-id-left">
                  <p className="text-[13px] font-medium px-[16px] mb-[5px] ">
                    Khách
                  </p>
                  <p className="text-[15px]">Thêm khách</p>
                </div>
                <div
                  className="ml-[10px] w-[100px] h-[40px] search-id-right mt-[5px] cursor-pointer"
                  onClick={() => {
                    if (selectedOption?.tenViTri) {
                      navigate(path);
                      localStorage.setItem("tenViTri", selectedOption.tenViTri);
                      showSuccess("Đã tới danh sách phòng");
                    } else {
                      showError("Bạn chưa chọn địa điểm muốn đến á!?");
                    }
                  }}
                >
                  <p className="bg-red-500 search text-white rounded-[20px] w-full h-full text-center flex items-center justify-center">
                    Tìm kiếm
                  </p>
                </div>
              </div>
            ) : (
              tab?.title
            )}
          </div>
        ))}
      </div>
    </ActiveBar>
  );
};

interface SearchContentProps {
  activeTab: number;
  LocationHeader: ViTri[];
  showDropdown: boolean;
  filteredOptions: any;
  handleOptionClick: (option: any) => void;
}
const SearchContent: React.FC<SearchContentProps> = ({
  activeTab,
  showDropdown,
  filteredOptions,
  handleOptionClick,
}) => {
  const activeTabData = tabsData.find((tab) => tab.id === activeTab);
  return (
    <ContentBar>
      <div className="search-content">
        {activeTabData && (
          <div
            key={activeTabData.id}
            id={`tab${activeTabData.id}-content`}
            className="tab-content active"
          >
            {activeTabData.id === 1
              ? showDropdown && (
                  <div className="dropdown ml-[10px] p-[5px]">
                    {filteredOptions?.map((item) => (
                      <p
                        key={item.id}
                        className="dropdown-option cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-300 px-[5px]"
                        onClick={() => handleOptionClick(item)}
                      >
                        {item.tenViTri}, {item.tinhThanh}, {item.quocGia}
                      </p>
                    ))}
                  </div>
                )
              : ""}
          </div>
        )}
      </div>
    </ContentBar>
  );
};

interface LocationHeaderProps {
  LocationHeader: ViTri[];
}
const Active: React.FC<LocationHeaderProps> = ({ LocationHeader }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };
  const [searchValueInput, setSearchValueInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const handleInput = (ev: any) => {
    const searchValueInput = ev.target.value;
    setSearchValueInput(searchValueInput);

    const filteredOptions = LocationHeader.filter((option: any) =>
      option.tenViTri.toLowerCase().includes(searchValueInput.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
    setShowDropdown(filteredOptions.length > 0);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSearchValueInput(`${option.tenViTri}` + ", " + `${option.tinhThanh}`);
    setShowDropdown(false);
  };

  return (
    <div>
      <SearchBar
        handleTabClick={handleTabClick}
        activeTab={activeTab}
        LocationHeader={LocationHeader}
        searchValueInput={searchValueInput}
        handleInput={handleInput}
        setShowDropdown={setShowDropdown}
        selectedOption={selectedOption}
        navigate={navigate}
      />
      <SearchContent
        activeTab={activeTab}
        LocationHeader={LocationHeader}
        showDropdown={showDropdown}
        filteredOptions={filteredOptions}
        handleOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default Active;
const ActiveBar = styled.div`
  .nav-search-header2 {
    transform: translateX(-190px);
    /* z-index: 20; */
    .search-id {
      .search-id-right {
        :hover {
          border: solid 3px pink;
        }
      }
    }
    .search-header2 {
    }
    .search-item {
      height: 100%;
      &:hover {
        background: #ece4e4;
        border-radius: 40px;
        .search-item-input {
          outline: none;
        }
      }
    }
    .active {
      border-radius: 40px;
      background: white;
      box-shadow: 4px -1px 18px 1px rgba(161, 142, 142, 0.5);
      -webkit-box-shadow: 4px -1px 18px 1px rgba(161, 142, 142, 0.5);
      -moz-box-shadow: 4px -1px 18px 1px rgba(161, 142, 142, 0.5);
    }
  }
`;
const ContentBar = styled.div`
  margin-top: 10px;
  transform: translateX(-170px);
  width: 300px;
  /* border: solid 5px pink; */
  background: white;
`;
