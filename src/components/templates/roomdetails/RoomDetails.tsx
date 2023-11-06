import {
  CalendarOutlined,
  CoffeeOutlined,
  HomeOutlined,
  MinusOutlined,
  PlusOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import {
  faCar,
  faKitchenSet,
  faSwimmingPool,
  faTelevision,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, DatePicker } from "antd";
import { Card } from "components/ui";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "store";
import styled from "styled-components";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { BookingSchema, BookingSchemaType } from "schema/BookingSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quanLyDatPhongServices } from "services";
import { toast } from "react-toastify";

export const RoomDetails = ({ maPhong, maNguoiDung }) => {
  const { RangePicker } = DatePicker;

  const { Room: room } = useSelector((state: RootState) => state.quanLyPhong);
  const { RateAverage: rateAverage, FeedbackSum: feedbackSum } = useSelector(
    (state: RootState) => state.quanLyBinhLuan
  );

  const [qty, setQty] = useState<number>(1);
  const [differ, setDiffer] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<BookingSchemaType>({
    mode: "onChange",
    resolver: zodResolver(BookingSchema),
  });

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const onSubmit: SubmitHandler<BookingSchemaType> = async (value) => {
    try {
      await quanLyDatPhongServices.postBooking(value);
      console.log("value", value);
      toast.success("Đặt phòng thành công");
    } catch (err) {
      toast.error(err?.response?.data?.content);
      console.log(err);
    }
  };

  const handleChange: RangePickerProps["onChange"] = (date, datestring) => {
    setDiffer(date[1].diff(date[0], "day"));
    setValue("ngayDen", datestring[0]);
    setValue("ngayDi", datestring[1]);
  };

  const handleQty = (quantity: number) => {
    if (qty > 1 || (qty == 1 && quantity > 0)) {
      setQty(qty + quantity);
    }
  };

  useEffect(() => {
    setValue("soLuongKhach", qty);
  }, [qty]);

  useEffect(() => {
    setTotal(room?.giaTien * differ);
  }, [differ]);

  return (
    <RoomDetailsX>
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <div className="details_section flex justify-between">
            <div>
              <h3 className="details_heading">
                Toàn bộ căn hộ. Chủ nhà Airbnb
              </h3>
              <div className="flex text-14">
                <span>{room?.khach} khách</span>
                <div className="dot">.</div>
                <span>{room?.phongNgu} phòng ngủ</span>
                <div className="dot">.</div>
                <span>{room?.giuong} giường</span>
                <div className="dot">.</div>
                <span>{room?.phongTam} phòng tắm</span>
              </div>
            </div>
          </div>
          <div className="details_section">
            <div className="details_item">
              <div>
                <HomeOutlined className="text-2xl inline-block" />
              </div>
              <div>
                <h4 className="text-16 font-500">Toàn bộ nhà</h4>
                <p className="item_desc">
                  Bạn sẽ có chung cư cao cấp cho riêng mình.
                </p>
              </div>
            </div>
            <div className="details_item">
              <div>
                <StarOutlined className="text-2xl inline-block" />
              </div>
              <div>
                <h4 className="text-16 font-500">Vệ sinh tăng cường</h4>
                <p className="item_desc">
                  Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường
                  5 bước của Airbnb.{" "}
                  <span className="font-500 underline text-black cursor-pointer">
                    Hiển thị thêm
                  </span>
                </p>
              </div>
            </div>
            <div className="details_item">
              <div>
                <CoffeeOutlined className="text-2xl inline-block" />
              </div>
              <div>
                <h4 className="item_heading">Airbnb là chủ nhà siêu cấp</h4>
                <p className="item_desc">
                  Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được dánh
                  giá cao và là những người cam kết mang lại quãng thời gian ở
                  tuyệt vời cho khách
                </p>
              </div>
            </div>
            <div className="details_item">
              <div>
                <CalendarOutlined className="text-2xl inline-block" />
              </div>
              <div className="flex items-center">
                <h4 className="item_heading">Miễn phí hủy trong 48 giờ</h4>
              </div>
            </div>
          </div>
          <div className="details_section">
            <h3 className="details_heading">Mô tả</h3>
            <div className="mt-3">{room?.moTa}</div>
          </div>
          <div className="details_section">
            <h3 className="details_heading">Tiện nghi</h3>
            <div className="amenities grid grid-cols-2">
              {room?.bep ? (
                <div className="amenities_item">
                  <div className="amenities_icon">
                    <FontAwesomeIcon icon={faKitchenSet} className="text-2xl" />
                  </div>
                  <div className="amenities_desc">
                    <p>Bếp</p>
                  </div>
                </div>
              ) : null}
              {room?.wifi ? (
                <div className="amenities_item">
                  <div className="amenities_icon">
                    <FontAwesomeIcon icon={faWifi} className="text-2xl" />
                  </div>
                  <div className="amenities_desc">
                    <p>Wifi</p>
                  </div>
                </div>
              ) : null}
              {room?.tivi ? (
                <div className="amenities_item">
                  <div className="amenities_icon">
                    <FontAwesomeIcon icon={faTelevision} className="text-2xl" />
                  </div>
                  <div className="amenities_desc">
                    <p>TV với truyền hình cáp tiêu chuẩn</p>
                  </div>
                </div>
              ) : null}
              {room?.doXe ? (
                <div className="amenities_item">
                  <div className="amenities_icon">
                    <FontAwesomeIcon icon={faCar} className="text-2xl" />
                  </div>
                  <div className="amenities_desc">
                    <p>Bãi đỗ xe</p>
                  </div>
                </div>
              ) : null}
              {room?.dieuHoa ? (
                <div className="amenities_item">
                  <div className="amenities_icon">
                    <FontAwesomeIcon icon={faSnowflake} className="text-2xl" />
                  </div>
                  <div className="amenities_desc">
                    <p>Điều hòa</p>
                  </div>
                </div>
              ) : null}
              {room?.hoBoi ? (
                <div className="amenities_item">
                  <div className="amenities_icon">
                    <FontAwesomeIcon
                      icon={faSwimmingPool}
                      className="text-2xl"
                    />
                  </div>
                  <div className="amenities_desc">
                    <p>Hồ bơi</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <Card
            hoverable
            title={
              <CardHeading>
                <div className="flex justify-between mb-[24px] pt-[24px]">
                  <div>
                    <span className="cost">${room?.giaTien}</span>
                    <span className="feedback_normal"> / đêm</span>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <StarFilled className="icon" />
                    <span>{rateAverage}</span>
                    <span className="feedback_normal underline">
                      ({feedbackSum} đánh giá)
                    </span>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="text-center mb-[1rem]">
                    <RangePicker
                      placeholder={["Thêm ngày", "Thêm ngày"]}
                      size="large"
                      style={{
                        width: "100%",
                        borderRadius: "8px 8px 0 0",
                        borderColor: "rgb(176, 176, 176)",
                      }}
                      disabledDate={disabledDate}
                      onChange={handleChange}
                    />
                    <BookingQty>
                      <button
                        type="button"
                        className="qty_btn_minus"
                        onClick={() => handleQty(-1)}
                      >
                        <MinusOutlined />
                      </button>
                      <input value={qty} type="text" className="input_qty" />
                      <button
                        type="button"
                        className="qty_btn_plus"
                        onClick={() => handleQty(1)}
                      >
                        <PlusOutlined />
                      </button>
                    </BookingQty>
                    <p className="text-red-500">
                      {errors?.soLuongKhach?.message as string}
                    </p>
                    <div className="hidden">
                      <input
                        type="number"
                        {...register("maNguoiDung")}
                        value={maNguoiDung}
                      />
                      <p className="text-red-500">
                        {errors?.maNguoiDung?.message as string}
                      </p>
                      <input
                        type="number"
                        {...register("maPhong")}
                        value={maPhong}
                      />
                      <p className="text-red-500">
                        {errors?.maPhong?.message as string}
                      </p>
                    </div>
                  </div>
                  <div className="mb-[1rem]">
                    <Button
                      style={{ width: "100%" }}
                      size="large"
                      htmlType="submit"
                      type="primary"
                      danger
                    >
                      Đặt phòng
                    </Button>
                  </div>
                </form>
                <div className="mt-8 text-center">
                  <p className="mt-8 text-14 font-400">
                    Bạn vẫn chưa bị trừ tiền
                  </p>
                </div>
                <div className="my-[24px] font-400 text-16">
                  <div className="flex justify-between">
                    <span className="underline">
                      ${room?.giaTien} x {differ} đêm
                    </span>
                    <span>${total ? total : 0}</span>
                  </div>
                </div>
              </CardHeading>
            }
          >
            <div className="flex justify-between font-500 text-16">
              <span>Tổng</span>
              <span>${total ? total : 0}</span>
            </div>
          </Card>
        </div>
      </div>
    </RoomDetailsX>
  );
};

export default RoomDetails;

const RoomDetailsX = styled.div`
  padding-top: 2rem;
  .details_heading {
    font-weight: 500;
    font-size: 1.275rem;
  }
  .details_section {
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 1.275rem;
    margin-bottom: 1.275rem;
  }
  .details_item {
    display: flex;
    column-gap: 0.8rem;
    padding-bottom: 1.275rem;
    .item_heading {
      font-size: 1rem;
      font-weight: 500;
    }
    .item_desc {
      font-size: 0.875rem;
      font-weight: 500;
      color: rgb(113, 113, 113);
    }
  }
  .amenities {
    padding-top: 1rem;
    row-gap: 1.475rem;
    .amenities_item {
      display: flex;
      column-gap: 1rem;
      .amenities_icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .amenities_desc {
        display: flex;
        align-items: center;
        width: 16rem;
      }
    }
  }
  .dot {
    text-align: center;
    width: 12px;
    height: 1.125rem;
    font-size: 0.675rem !important;
    font-weight: 500;
  }
`;

const CardHeading = styled.div`
  .cost {
    font-size: 1.275rem;
    font-weight: 500;
  }
  .feedback_normal {
    font-weight: 400;
  }
  .icon {
    color: var(--primary-color);
  }
`;

const BookingQty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .qty_btn_minus,
  .qty_btn_plus {
    border: 1px solid rgb(176, 176, 176);
    padding: 10px 13px;
    font-size: 10px;
    height: 38px;
    width: 38px;
    transition: 0.3s;
  }
  .qty_btn_minus {
    margin-right: -1px;
    left: 0;
    border-bottom-left-radius: 8px;
  }
  .qty_btn_plus {
    margin-left: -1px;
    right: 0;
    border-bottom-right-radius: 8px;
  }
  .input_qty {
    text-align: center;
    padding: 6px 10px;
    border: 1px solid #d4d4d4;
    width: 100%;
  }
`;
