import { RootState, useAppDispatch } from "store";
import styled from "styled-components";
import { useEffect } from "react";
import { getBookingThunk } from "store/quanLyDatPhong/thunk";
import { useSelector } from "react-redux";

export const RoomChecked = () => {
  const dispatch = useAppDispatch();
  const { maNguoiDung } = useSelector((state: RootState) => {
    return state.quanLyDatPhong;
  });
  console.log("maNguoiDung", maNguoiDung);
  let idUser = Number(localStorage.getItem("idUser"));
  useEffect(() => {
    dispatch(getBookingThunk(idUser));
  }, []);
  return (
    <Ticket className={true ? "h-auto" : "h-[400px]"}>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-[20px]">
              THÔNG TIN PHÒNG ĐÃ ĐẶT
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base italic text-30">
              "AirBnb hi vọng quý khách sẽ được trải nghiệm không gian nghỉ
              dưỡng tuyệt vời, và tận hưởng trọn vẹn chuyến đi của mình!"
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {maNguoiDung?.map((thongTinDatPhong, index) => {
              //   const withTime24hourFormat = dayjs(thongTinDatVe.ngayDat);
              return (
                <div
                  className="p-2 lg:w-1/3 md:w-1/2 w-full mb-[30px]"
                  key={index}
                >
                  <div className="h-full flex items-center border p-4 rounded-lg border-purple-600 ml-[20px]">
                    <img
                      alt="team"
                      className="w-[30%] h-full rounded-[10px] bg-gray-100 object-cover object-center flex-shrink-0 rounded-10 mr-4"
                      src="/images/authLayout.jpg"
                    />
                    <div className="flex-grow ml-10">
                      <h2 className="text-gray-900 title-font font-medium text-20">
                        Phòng số: {thongTinDatPhong.maPhong}
                      </h2>
                      <p className="text-gray-500 text-15">
                        Mã quý khách: {thongTinDatPhong.maNguoiDung}
                      </p>
                      <p className="text-gray-500 text-15">
                        Ngày đến: {thongTinDatPhong.ngayDen}
                      </p>
                      <p className="text-gray-500 text-15">
                        Ngày đi: {thongTinDatPhong.ngayDi}
                      </p>
                      <p className="text-gray-500 text-15">
                        Số lượng khách: {thongTinDatPhong.soLuongKhach}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Ticket>
  );
};

export default RoomChecked;
const Ticket = styled.div`
  padding: 0 40px;
`;
