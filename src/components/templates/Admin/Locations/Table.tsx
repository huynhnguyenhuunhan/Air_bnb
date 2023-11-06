import { Image } from "components/ui";
import { RootState, useAppDispatch } from "store";
import { deleteLocationThunk, getLocationThunk } from "store/quanLyViTri/thunk";
import { ViTri } from "types";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { quanLyViTriActions } from "store/quanLyViTri/slice";
import { useSelector } from "react-redux";

export const DataTable = ({ setUpload, setUpdate }) => {
  const { Locations: viTri } = useSelector(
    (state: RootState) => state.quanLyViTri
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  type DataIndex = keyof ViTri;

  const [searchText, setSearchText] = useState("");
  console.log("searchText", searchText);

  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const deleteLocation = async (id: number) => {
    dispatch(deleteLocationThunk(id))
      .unwrap()
      .then(() => {
        Swal.fire({
          title: "Hoàn thành!",
          text: "Đã xóa vị trí",
          icon: "info",
          confirmButtonText: "Close",
        });
        fetchData();
      });
  };

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<ViTri> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? text : text),
  });

  const fetchData = () => {
    setLoading(true);
    dispatch(getLocationThunk())
      .unwrap()
      .then(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns: ColumnsType<ViTri> = [
    {
      title: "ID",
      dataIndex: "id",
      width: "20%",
    },
    {
      title: "Tên vị trí",
      dataIndex: "tenViTri",
      ...getColumnSearchProps("tenViTri"),
      width: "20%",
    },
    {
      title: "Tỉnh thành",
      dataIndex: "tinhThanh",
      ...getColumnSearchProps("tinhThanh"),
    },
    {
      title: "Quốc gia",
      dataIndex: "quocGia",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (_, data) => (
        <Space size={"small"}>
          <Image
            src={data.hinhAnh}
            style={{
              height: "40px",
              width: "50px",
              objectFit: "cover",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />
          <Button
            size="small"
            type="dashed"
            icon={<FontAwesomeIcon icon={faEdit} />}
            onClick={() => {
              dispatch(quanLyViTriActions.setCurrentLocation(data));
              setUpload(true);
            }}
          />
        </Space>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (_, data) => (
        <Space size="small">
          <Button
            type="primary"
            title="sửa"
            onClick={() => {
              dispatch(quanLyViTriActions.setCurrentLocation(data));
              setUpdate(true);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button
            type="primary"
            danger
            title="xóa"
            onClick={() => {
              deleteLocation(data.id);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={viTri}
      pagination={{ pageSize: 10 }}
      loading={loading}
      scroll={{ y: 450 }}
    />
  );
};

export default Table;
