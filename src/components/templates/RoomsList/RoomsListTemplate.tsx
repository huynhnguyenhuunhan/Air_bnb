import { Card, Carousel, Image, Skeleton } from "components/ui";
import { PATH } from "constant";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { getRoomsByLocationThunk } from "store/quanLyPhong/thunk";
import { getLocationByIdThunk } from "store/quanLyViTri/thunk";
import styled from "styled-components";
import { } from 'querystring'

export const RoomsListTemplate = () => {
    const navigate = useNavigate()
    const params = useParams();
    const { maViTri } = params;
    const dispatch = useAppDispatch();
    const { RoomsByLocationList, isFetchingRoom } = useSelector(
        (state: RootState) => state.quanLyPhong
    );
    const { LocationById } = useSelector(
        (state: RootState) => state.quanLyViTri
    );
    const accomQty = RoomsByLocationList.length

    useEffect(() => {
        dispatch(getRoomsByLocationThunk({ maViTri: Number(maViTri) })).unwrap()
        dispatch(getLocationByIdThunk(Number(maViTri)))
    }, [maViTri]);
    document.title = `Airbnb | ${LocationById?.tinhThanh}`;


    if (isFetchingRoom) {
        return (
            <div className="grid grid-cols-5 ml-20">
                <div className="col-span-3 mr-7 pb-7 pt-12">
                    <div className="pb-[1.4rem]">
                        <Skeleton active title={{ width: "200px" }} paragraph={{ rows: 1 }} />
                    </div>
                    {[...Array(4)].map((_, index) => {
                        return (
                            <div key={index}>
                                <div className="grid grid-cols-8 py-20 border-t-1">
                                    <div className="col-span-3">
                                        <Skeleton.Image active style={{ width: "280px", height: "200px" }} />
                                    </div>
                                    <div className="col-span-5 relative">
                                        <Skeleton active paragraph={{ rows: 4 }} />
                                        <div className="absolute right-0 bottom-0">
                                            <Skeleton.Input active size="small" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="col-span-2">
                    <div className="sticky top-0 m-auto py-[1rem]">
                        <Card
                            hoverable
                            style={CardStyle}
                            cover={
                                <Skeleton.Image active className="!w-full !h-[320px]" />
                            }
                        >
                            <Card.Meta
                                title={
                                    <Skeleton paragraph={{ rows: 0 }} className="!m-auto" />
                                }
                                description={
                                    <Skeleton title={false} paragraph={{ rows: 3 }} />
                                }
                            />
                        </Card>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <>
            <div className="grid grid-cols-5 ml-20">
                <div className="col-span-3 mr-7 pb-7 pt-12">
                    <RoomHeader>
                        <p className="room_qty">Hơn {accomQty} chỗ ở</p>
                        <h1 className="room_heading">Chỗ ở tại khu vực bản đồ đã chọn</h1>
                    </RoomHeader>
                    {RoomsByLocationList?.map((phong) => {
                        const path = generatePath(PATH.roomdetails, { id: phong.id })
                        return (
                            <RoomDetails
                                key={phong.id}
                            >
                                <div className="grid grid-cols-8 py-20 border-t-1">
                                    <div className="col-span-3">
                                        <RoomsCarousel dotActiveWidth={null}>
                                            <div className="room_item image-box">
                                                <img
                                                    className="image_crop item_1"
                                                    src={phong.hinhAnh}
                                                    alt={phong.id.toLocaleString() + "_1"}
                                                />
                                            </div>
                                            <div className="image-box">
                                                <img
                                                    className="image_crop item_2"
                                                    src={phong.hinhAnh}
                                                    alt={phong.id.toLocaleString() + "_2"}
                                                />
                                            </div>
                                        </RoomsCarousel>
                                    </div>
                                    <div
                                        className="accom col-span-5 relative cursor-pointer"
                                        onClick={() => {
                                            navigate({
                                                pathname: path,
                                                search: `?maViTri=${phong.maViTri}`
                                            })
                                        }}
                                    >
                                        <p className="accom_address">
                                            {LocationById?.tenViTri + ", " + LocationById?.tinhThanh}
                                        </p>
                                        <h4 className="accom_name">{phong.tenPhong}</h4>
                                        <div className="accom_desc">
                                            <div className="accom_data flex">
                                                <span>{phong.khach} khách </span>
                                                <div className="dot">.</div>
                                                <span>{phong.giuong} giường</span>
                                                <div className="dot">.</div>
                                                <span>{phong.phongNgu} phòng ngủ</span>
                                                <div className="dot">.</div>
                                                <span>{phong.phongTam} phòng tắm</span>
                                            </div>
                                            <div className="accom_amenities flex">
                                                {phong.wifi ? (
                                                    <>
                                                        <span>Wifi</span>
                                                        <div className="dot">.</div>
                                                    </>
                                                ) : null}
                                                {phong.doXe ? (
                                                    <>
                                                        <span>Bãi xe</span>
                                                        <div className="dot">.</div>
                                                    </>
                                                ) : null}
                                                {phong.bep ? (
                                                    <>
                                                        <span>Bếp</span>
                                                        <div className="dot">.</div>
                                                    </>
                                                ) : null}
                                                {phong.dieuHoa ? (
                                                    <>
                                                        <span>Điều hòa nhiệt độ</span>
                                                        <div className="dot">.</div>
                                                    </>
                                                ) : null}
                                                {phong.mayGiat ? (
                                                    <>
                                                        <span>Máy giặt</span>
                                                    </>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="accom_cost">
                                            <span className="cost_number">{"$" + phong.giaTien}</span>
                                            <span> / đêm</span>
                                        </div>
                                    </div>
                                </div>
                            </RoomDetails>
                        )
                    })}
                </div>
                <div className="col-span-2">
                    <LocationDetails>
                        <Card
                            hoverable
                            style={CardStyle}
                            cover={
                                <Image
                                    src={LocationById?.hinhAnh}
                                    style={ImageStyle}
                                    alt={LocationById?.tinhThanh}
                                    preview={{
                                        maskClassName: 'rounded-sm'
                                    }}
                                />
                            }
                        >
                            <Card.Meta
                                title={
                                    <h3 className="text-center text-24">Thông tin vị trí</h3>
                                }
                                description={
                                    <>
                                        <p className="font-600 text-black">Quốc gia: <span className="font-normal">{LocationById?.quocGia}</span>
                                        </p>
                                        <p className="font-600 text-black">
                                            Tỉnh thành: <span className="font-normal">
                                                {LocationById?.tinhThanh}
                                            </span>
                                        </p>
                                        <p className="font-600 text-black">
                                            Quận/huyện: <span className="font-normal">
                                                {LocationById?.tenViTri}
                                            </span>
                                        </p>
                                    </>
                                }
                            />
                        </Card>
                    </LocationDetails>
                </div>
            </div>
        </>
    );
};

export default RoomsListTemplate;

const ImageStyle: React.CSSProperties = {
    borderRadius: "10px",
    height: "320px",
    objectFit: "cover",
}

const CardStyle: React.CSSProperties = {
    width: "70%",
    margin: "auto",
}

const RoomHeader = styled.div`
padding-bottom: 1.4rem;
    .room_qty {
        font-size: .8rem;
    }
    .room_heading {
        font-size: 2rem;
        font-weight: 600;
    }
`

const RoomsCarousel = styled(Carousel)`
  border-radius: 10px;
  overflow: hidden;
  .image_crop {
    width: 720px;
    height: 210px;
    object-fit: cover;
    &.item_1 {
      object-position: left center;
    }
    &.item_2 {
      object-position: right;
    }
  }
  > .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 7px !important;
    height: 7px;
    border-radius: 100%;
    background: #fff;
  }
`;

const RoomDetails = styled.div`
  .accom {
    margin-left: 1rem;
    .accom_address {
      color: #717171;
      font-size: 14px;
    }
    .accom_name {
      font-size: 1.2rem;
      padding-bottom: 1rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        background-color: #71717175;
        width: 40px;
        height: 1px;
        bottom: 0;
        left: 0;
      }
    }
    .accom_desc {
      padding-top: 10px;
      color: #717171;
      font-size: 14px;
      .dot {
        text-align: center;
        width: 0.6rem;
        font-size: 0.775rem;
        font-weight: 700;
      }
    }
  }
  .accom_cost {
    position: absolute;
    bottom: 0;
    right: 0;
    .cost_number {
      font-weight: 700;
    }
  }
`;

const LocationDetails = styled.div`
    padding: 1rem 0;
    position: sticky;
    top: 0;
    margin: auto;
`
