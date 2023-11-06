import { useSelector } from "react-redux";
import { RootState } from "store";
import { StarFilled } from "@ant-design/icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, generatePath } from "react-router-dom";
import { PATH } from "constant";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Image } from "components/ui";

export const RoomOverview = ({ maViTri }) => {
  const { Room: room } = useSelector((state: RootState) => state.quanLyPhong);
  const { LocationById: location } = useSelector(
    (state: RootState) => state.quanLyViTri
  );
  const { FeedbackSum: fbSum, RateAverage: rateAverage } = useSelector(
    (state: RootState) => state.quanLyBinhLuan
  );
  const locationPath = generatePath(PATH.roomslist, { maViTri: maViTri });
  document.title = `${room?.tenPhong}`;
  return (
    <RoomOverviewX>
      <div className="pt-[1.8rem] border-t-1">
        <h1 className="text-20 font-500">{room?.tenPhong}</h1>
        <div className="flex justify-between pt-6  text-14">
          <div className="flex">
            <StarFilled className="overview_icon mr-4" />
            <span className="font-500 mr-4">{rateAverage}</span>
            <span className="nav_link">({fbSum} đánh giá)</span>
            <div className="dot">.</div>
            <FontAwesomeIcon
              icon={faMedal}
              className="overview_icon mr-[9px] align-middle"
            />
            <span>Chủ nhà siêu cấp</span>
            <div className="dot">.</div>
            <NavLink to={locationPath} className={"nav_link"}>
              {location?.tenViTri}, {location?.tinhThanh}, {location?.quocGia}
            </NavLink>
          </div>
          <div className="flex gap-[18px]">
            <div>
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                className="mr-[9px]"
              />
              <span className="nav_link">Chia sẻ</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} className="mr-[9px]" />
              <span className="nav_link">Lưu</span>
            </div>
          </div>
        </div>
        <div className="mt-[1rem]">
          <Image
            src={room?.hinhAnh}
            alt={room?.tenPhong}
            style={ImageStyle}
            className="rounded-2xl"
            preview={{
              maskClassName: "rounded",
            }}
          />
        </div>
      </div>
    </RoomOverviewX>
  );
};

export default RoomOverview;

const RoomOverviewX = styled.div`
  .ant-image-mask {
    border-radius: 10px;
  }
  .overview_icon {
    color: var(--primary-color);
  }
  .dot {
    text-align: center;
    width: 19px;
    height: 1.125rem;
    font-size: 0.6rem !important;
    font-weight: 800;
  }
  .nav_link {
    text-decoration: underline;
  }
`;
const ImageStyle: React.CSSProperties = {
  borderRadius: "10px",
};
