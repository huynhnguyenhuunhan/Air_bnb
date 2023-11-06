import { Card,Skeleton } from "components/ui";
import { PATH } from "constant";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getLocationPaginationThunk,getLocationByIdThunk } from "store/quanLyViTri/thunk";
import {getRoomAllThunk} from "store/quanLyPhong/thunk"
import styled from "styled-components";
import { generatePath, useNavigate, useParams } from "react-router-dom";

export const HomeTemplate = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const params = useParams();
  const { maViTri } = params;
  const { LocationPagination } = useSelector(
    (state: RootState) => state.quanLyViTri
  );


  const { RoomsAllList, isFetchingRoom } = useSelector(
    (state: RootState) => state.quanLyPhong
  );
  useEffect(() => {
    dispatch(getLocationByIdThunk(Number(maViTri)))
}, [maViTri]);

  useEffect(() => {
    dispatch(
      getLocationPaginationThunk({ pageIndex: 1, pageSize: 8, keyword: null })
    );
    document.title = "Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb";
  }, []);

  useEffect(() => {
    dispatch(getRoomAllThunk());
  }, [dispatch]);

  if (isFetchingRoom) {
    return (
      <div className="grid grid-cols-4 gap-10 max-w-[1400px] mx-auto pt-24">
        {[...Array(20)].map((_, index) => {
          return (
            <Card key={index} className="!w-[320px]">
              <Skeleton.Image active className="!w-full !h-[250px]" />
              <Skeleton.Input active className="!w-full mt-2" />
              <Skeleton.Input active className="!w-full mt-2" />
            </Card>
          );
        })}
      </div>
    );
  }
  return (
    <Home>
      {/* Card */}
      <div className="airbnb_card">  
        <div className="grid grid-cols-4 gap-40 mt-30">
            {RoomsAllList?.map((phong,id) => {
              const path = generatePath(PATH.roomdetails, { id: phong.id })
                if(id < 20)
                { 
                  return (
                    <div onClick={() => { navigate(
                      {
                        pathname: path,
                        search: `?maViTri=${phong.maViTri}`
                      }
                    )
                }}>
                    <Card
                      key={phong.id}
                      hoverable
                      style={{ width: 300,height:250 }}
                      cover={<img alt="example" src={phong.hinhAnh} />}
                  >
                      <Card.Meta
                          title={<div>{phong.tenPhong}<br />${phong.giaTien}/Đêm</div>}
                      />
                  </Card>
                  </div>              
              )}
            })}
        </div>
      </div>
      {/* Location */}
      <div className="airbnb_location pt-40">
        <div className="section_container">
          <h3 className="section_heading">Khám phá những điểm đến gần đây</h3>
          <div className="location_box grid grid-cols-4 gap-y-15 pt-20">
            {LocationPagination?.data.map((vitri, key) => (
              <div className="location_card" key={key}>
                <img
                  className="card_img"
                  src={vitri.hinhAnh}
                  alt={vitri.tenViTri}
                />
                <div className="card_content">
                  <span className="card_title">{vitri.tinhThanh}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Accommodation */}
      <div className="airbnb_accom pt-40 pb-70">
        <div className="section_container">
          <h3 className="section_heading">Ở bất cứ đâu</h3>
          <div className="grid grid-cols-4 justify-items-center gap-3 pt-20">
            <div className="accom_item">
              <img
                className="object-cover rounded-lg w-full h-full cursor-pointer"
                src="./images/accom_1.png"
                alt="accom_1"
              />
              <p className="pt-2 font-600">Toàn bộ nhà</p>
            </div>
            <div className="accom_item">
              <img
                className="object-cover rounded-lg w-full h-full cursor-pointer"
                src="./images/accom_2.png"
                alt="accom_2"
              />
              <p className="pt-2 font-600">Chỗ ở độc đáo</p>
            </div>
            <div className="accom_item">
              <img
                className="object-cover rounded-lg w-full h-full cursor-pointer"
                src="./images/accom_3.png"
                alt="accom_3"
              />
              <p className="pt-2 font-600">Trang trại và thiên nhiên</p>
            </div>
            <div className="accom_item">
              <img
                className="object-cover rounded-lg w-full h-full cursor-pointer"
                src="./images/accom_4.jpg"
                alt="accom_4"
              />
              <p className="pt-2 font-600">Cho phép mang theo thú cưng</p>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default HomeTemplate;

const Home = styled.div`
  .airbnb_carousel {
    background: #000;
    padding: 80px 30px 30px 30px;
    .carousel_box {
      margin: auto;
      .carousel_item {
        .carousel_img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }
      }
    }
    .carousel_caption {
      margin: auto;
      padding-top: 30px;
      .title {
        color: #fff;
        text-align: center;
        font-size: 2rem;
        letter-spacing: -1px;
      }
    }
  }
  .location_card {
    display: flex;
    .card_img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
    .card_content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 16px;
    }
    .card_title {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;
