import styled from "styled-components"
import { GlobalOutlined, FacebookFilled, TwitterSquareFilled, InstagramFilled } from "@ant-design/icons"

export const Footer = () => {
    return <FooterX>
        <div className="section_container pt-[70px]">
            <div className="grid grid-cols-4 pb-[30px]">
                <div>
                    <h4 className="foot_heading">Giới thiệu</h4>
                    <div className="foot_nav_item"><span className="button_underline">Phương thức hoạt động của Airbnb</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Trang tin tức</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Nhà đầu tư</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Airbnb Plus</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Airbnb Luxe</span></div>
                    <div className="foot_nav_item"><span className="button_underline">HotelTonight</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Airbnb for Work</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Nhờ có Host, mọi điều đều có thể</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Cơ hội nghề nghiệp</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Thư của nhà sáng lập</span></div>
                </div>
                <div>
                    <h4 className="foot_heading">Cộng đồng</h4>
                    <div className="foot_nav_item"><span className="button_underline">Sự đa dạng và Cảm giác thân thuộc</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Tiện nghi phù hợp cho người khuyết tật</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Đối tác liên kết Airbnb</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Chỗ ở cho tuyến đầu</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Lượt giới thiệu của khách</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Airbnb.org</span></div>
                </div>
                <div>
                    <h4 className="foot_heading">đón tiếp khách</h4>
                    <div className="foot_nav_item"><span className="button_underline">Cho thuê nhà</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Tổ chức Trải nghiệm trực tuyến</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Tổ chức trải nghiệm</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Đón tiếp khác có trách nhiệm</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Trung tâm tài nguyên</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Trung tâm cộng đồng</span></div>
                </div>
                <div>
                    <h4 className="foot_heading">Hỗ trợ</h4>
                    <div className="foot_nav_item"><span className="button_underline">Biện pháp ứng phó với đại dịch COVID_19 của chúng tôi</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Trung tâm trợ giúp</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Các tùy chọn hủy</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Hỗ trợ dân cư</span></div>
                    <div className="foot_nav_item"><span className="button_underline">Tin cậy và an toàn</span></div>
                </div>
            </div>
            <div className="foot_copyright flex justify-between">
                <div>
                    <div className="p-4 flex">
                        <div className="mr-[19px] text-[.9rem]">© 2021 Airbnb, Inc. All rights reserved</div>
                        <div className="ml-[-19px] flex">
                            <div className="dot">.</div>
                            <span>
                                <ol className="cp_list">
                                    <li className="cp_item">
                                        <a className="cp_nav button_underline" href="#">Quyền riêng tư</a>
                                        <div className="dot">.</div>
                                    </li>
                                    <li className="cp_item">
                                        <a className="cp_nav button_underline" href="#">Điều khoản</a>
                                        <div className="dot">.</div>
                                    </li>
                                    <li className="cp_item">
                                        <a className="cp_nav button_underline" href="#">Sơ đồ trang web</a>
                                    </li>
                                </ol>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex">
                        <span className="mr-[16px]">
                            <button className="cp_button">
                                <GlobalOutlined className="mr-8" />
                                <span className="button_underline">Tiếng Việt (VN)</span>
                            </button>
                        </span>
                        <span>
                            <button className="cp_button">
                                <span className="mr-8">$</span>
                                <span className="button_underline">VND</span>
                            </button>
                        </span>
                    </div>
                    <div className="ml-[24px]">
                        <ul className="flex">
                            <li className="cp_social_icon"><FacebookFilled /></li>
                            <li className="cp_social_icon"><TwitterSquareFilled /></li>
                            <li className="cp_social_icon"><InstagramFilled /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </FooterX >
}

export default Footer

const FooterX = styled.div`
    background: #F7F7F7;
    border-top: 1px solid #DDDDDD;
    .foot_heading {
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 600;
        padding-bottom: 8px;
    }
    .foot_nav_item {
        padding-bottom: 13px;
        font-size: .9rem;
        font-weight: 400;
    }
    .foot_copyright {
        padding: 24px 0;
        border-top: 1px solid #DDDDDD;
        .dot {
            text-align: center;
            width: 19px;
            height: 1.125rem;
            font-size: 0.675rem;
            font-weight: 800;
        }
        .cp_list {
            display: flex;
        }
        .cp_item {
            display: flex;
            .cp_nav {
                font-size: .9rem;
            }
        }
        .cp_button {
            font-weight: 500;
            font-size: .9rem;
        }
        .cp_social_icon {
            margin-right: 16px;
            font-size: 1.2rem;
        }
    }
`