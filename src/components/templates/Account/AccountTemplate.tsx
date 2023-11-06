import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker, DatePickerProps } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AccountSchema, AccountSchemaType } from "schema";
import { RootState, useAppDispatch } from "store";
import styled from "styled-components";
import { showSuccess } from "../../../main";
import dayjs from "dayjs";
import moment from "moment";
import {
  getUserIDThunk,
  putUserIDThunk,
  uploadAvatarThunk,
} from "store/quanLyNguoiDung/thunk";
import { Link } from "react-router-dom";

export const AccountTemplate = () => {
  const dispatch = useAppDispatch();
  const { getUserID } = useSelector((state: RootState) => {
    return state.quanLyNguoiDung;
  });
  const [error, setError] = useState<string>();
  const [initialBirthday, setInitialBirthday] = useState<any>();
  const [representName, setRepresentName] = useState<boolean>(false);
  const [representEmail, setRepresentEmail] = useState<boolean>(false);
  const [representPhone, setRepresentPhone] = useState<boolean>(false);
  const [representBirthday, setRepresentBirthday] = useState<boolean>(false);
  const [representGender, setRepresentGender] = useState<boolean>(false);
  const [datePickerNull, setDatePickerNull] = useState<boolean>();
  const {
    handleSubmit,
    reset,
    register,
    setValue,
    formState: { errors },
  } = useForm<AccountSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AccountSchema),
  });

  const handleChange: DatePickerProps["onChange"] = (date) => {
    if (date) {
      setDatePickerNull(true);
      setValue("birthday", date.format("DD/MM/YYYY"));
      setInitialBirthday(
        moment(moment(date.format("DD/MM/YYYY"), "DD/MM/YYYY"))
      );
    } else {
      setDatePickerNull(false);
      setValue("birthday", null);
    }

    if (!date) {
      setError("Vui lòng nhập ngày sinh");
    } else {
      setError("");
    }
  };
  const id = String(getUserID?.id);
  const onSubmit: SubmitHandler<AccountSchemaType> = (payload) => {
    const param = { id, payload };
    dispatch(putUserIDThunk(param))
      .unwrap()
      .then(() => {
        showSuccess("Cập nhật thành công!");
        dispatch(getUserIDThunk(id));
        setRepresentName(false);
        setRepresentBirthday(false);
        setRepresentPhone(false);
        setRepresentEmail(false);
        setRepresentGender(false);
      });
    showSuccess("Đã cập nhật!");
  };

  const [stateImage, setStateImage] = useState(false);
  const handleImage = () => {
    setStateImage(true);
  };
  const handleInputImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("formFile", file);
    dispatch(uploadAvatarThunk(formData));
    setStateImage(false);
    showSuccess("Đổi avatar thành công!");
  };
  useEffect(() => {
    reset({ ...getUserID, gender: String(getUserID?.gender) });
    setInitialBirthday(moment(moment(getUserID?.birthday, "DD/MM/YYYY")));
    setDatePickerNull(true);
  }, [getUserID, reset]);

  return (
    <Account>
      <h2>Xin chào, {getUserID?.name}!</h2>
      <div className="flex content">
        <div className="updateUser w-[50%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            {!representName ? (
              <div>
                <div className="div-represent mb-3">
                  <div>
                    <h3 className="text-[20px] text-gray-900">Họ và tên</h3>
                    <span className="text-gray-700">{getUserID?.name}</span>
                  </div>
                  <div>
                    <button
                      className="btn-represent underline"
                      onClick={() => {
                        setRepresentName(true);
                      }}
                    >
                      Chỉnh sửa
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ) : (
              <div className="div-represent mb-3">
                <div className="mt-10 w-[80%]">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="outline-none block w-full p-8 text-black border border-blue-500 rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-rose-500"
                    {...register("name")}
                  />
                  <p className="text-red-500">
                    {errors?.name?.message as string}
                  </p>
                </div>
                <div>
                  <button
                    className="btn-represent underline"
                    onClick={() => {
                      setRepresentName(false);
                    }}
                  >
                    Huỷ
                  </button>
                </div>
              </div>
            )}
            {!representEmail ? (
              <div>
                <div className="div-represent mb-3">
                  <div>
                    <h3 className="text-[20px] text-gray-900">Email</h3>
                    <span className="text-gray-700">{getUserID?.email}</span>
                  </div>
                  <div>
                    <button
                      className="btn-represent underline"
                      onClick={() => {
                        setRepresentEmail(true);
                      }}
                    >
                      Chỉnh sửa
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ) : (
              <div className="div-represent mb-3">
                <div className="mt-10 w-[80%]">
                  <input
                    type="text"
                    placeholder="Email"
                    className="outline-none block w-full p-8 text-black border border-blue-500 rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-rose-500"
                    {...register("email")}
                  />
                  <p className="text-red-500">
                    {errors?.email?.message as string}
                  </p>
                </div>
                <div>
                  <button
                    className="btn-represent underline"
                    onClick={() => {
                      setRepresentEmail(false);
                    }}
                  >
                    Huỷ
                  </button>
                </div>
              </div>
            )}
            {!representPhone ? (
              <div>
                <div className="div-represent mb-3">
                  <div>
                    <h3 className="text-[20px] text-gray-900">Phone</h3>
                    <span className="text-gray-700">{getUserID?.phone}</span>
                  </div>
                  <div>
                    <button
                      className="btn-represent underline"
                      onClick={() => {
                        setRepresentPhone(true);
                      }}
                    >
                      Chỉnh sửa
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ) : (
              <div className="div-represent mb-3">
                <div className="mt-10 w-[80%]">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="outline-none block w-full p-8 text-black border border-blue-500 rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-rose-500"
                    {...register("phone")}
                  />
                  <p className="text-red-500">
                    {errors?.phone?.message as string}
                  </p>
                </div>
                <div>
                  <button
                    className="btn-represent underline"
                    onClick={() => {
                      setRepresentPhone(false);
                    }}
                  >
                    Huỷ
                  </button>
                </div>
              </div>
            )}
            {!representBirthday ? (
              <div>
                <div className="div-represent mb-3">
                  <div>
                    <h3 className="text-[20px] text-gray-900">Birthday</h3>
                    <span className="text-gray-700">{getUserID?.birthday}</span>
                  </div>
                  <div>
                    <button
                      className="btn-represent underline"
                      onClick={() => {
                        setRepresentBirthday(true);
                      }}
                    >
                      Chỉnh sửa
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ) : (
              <div className="div-represent mb-3">
                <div className="mt-10 w-[80%]">
                  <DatePicker
                    id="datepicker"
                    className="outline-none block w-full p-8 text-black border border-blue-500 rounded-lg bg-[#ffffff] focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Chọn ngày sinh"
                    onChange={handleChange}
                    format="DD/MM/YYYY"
                    value={
                      datePickerNull
                        ? dayjs(
                            moment(initialBirthday).format("DD/MM/YYYY"),
                            "DD/MM/YYYY"
                          )
                        : null
                    }
                    // value={initialBirthday}
                  />
                  <p className="text-red-500">{error}</p>
                </div>
                <div>
                  <button
                    className="btn-represent underline"
                    onClick={() => {
                      setRepresentBirthday(false);
                    }}
                  >
                    Quay lại
                  </button>
                </div>
              </div>
            )}
            {!representGender ? (
              <div>
                <div className="div-represent mb-3">
                  <div>
                    <h3 className="text-[20px] text-gray-900">Gender</h3>
                    <span className="text-gray-700">
                      {getUserID?.gender ? "Nam" : "Nữ"}
                    </span>
                  </div>
                  <div>
                    <button
                      className="btn-represent underline"
                      onClick={() => {
                        setRepresentGender(true);
                      }}
                    >
                      Chỉnh sửa
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ) : (
              <div className="div-represent mb-3">
                <div className="mt-10 w-[80%]">
                  <select
                    className="outline-none block w-full p-8 border border-blue-500 rounded-lg bg-[#ffffff] focus:border-rose-500"
                    {...register("gender")}
                  >
                    <option value="">Chọn giới tính</option>
                    <option value="true" id="gender1">
                      Nam
                    </option>
                    <option value="false" id="gender2">
                      Nữ
                    </option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500">{errors?.gender?.message}</p>
                  )}
                </div>
                <div>
                  <button
                    className="btn-represent underline"
                    onClick={() => {
                      setRepresentGender(false);
                    }}
                  >
                    Quay lại
                  </button>
                </div>
              </div>
            )}
            <div className="mt-20 flex justify-between">
              <button
                className="btn-update text-white bg-red-500 font-500 rounded-lg text-20 px-10 py-10"
                // onClick={() => {
                //   const DatePicker = document.getElementById(
                //     "datepicker"
                //   ) as HTMLInputElement;
                //   if (!DatePicker.value) {
                //     setError("Vui lòng nhập ngày sinh");
                //   }
                // }}
              >
                Cập nhật
              </button>
              <p className="btn-update text-white bg-blue-500 font-500 rounded-lg text-20 px-10 py-10">
                <Link
                  to={"/"}
                  onClick={() => {
                    showSuccess("");
                  }}
                >
                  Về trang chủ
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="info w-[45%] ml-30 border border-rose-200 text-center rounded-md">
          <div className="w-[30rem] m-auto">
            <h2>Thông tin cá nhân</h2>
            <div className="flex justify-center">
              <img
                className="w-[100px] h-[100px] rounded-full border border-rose-500"
                src={
                  `${getUserID.avatar}`
                    ? `${getUserID.avatar}`
                    : "/images/avatar1.jpg"
                }
                alt="Rounded avatar"
              ></img>
            </div>
            {!stateImage ? (
              <span
                className="underline cursor-pointer"
                onClick={() => {
                  handleImage();
                }}
              >
                Cập nhật avatar
              </span>
            ) : (
              <input type="file" onChange={handleInputImage} />
            )}
            <div className="flex justify-start items-center ml-[3.5rem] mt-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="green"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-[2rem] h-[2rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span className="text-black font-600 ">Xác minh danh tính</span>
            </div>
            <div className="w-[18rem] ml-[4rem]">
              <p className="text-left">
                Xác minh danh tính của bạn với huy hiệu xác minh danh tính
              </p>
              <div className=" text-left mt-[5px] mb-[10px]">
                <p
                  className="border border-green-400 bg-green-300 rounded-[0.7rem] p-[5px] w-[8rem] cursor-pointer hover:bg-blue-300"
                  onClick={() => {
                    showSuccess("Thành công!");
                  }}
                >
                  Nhận huy hiệu
                </p>
              </div>
              <hr />
              <div className=" text-left mt-[5px] mb-[10px]">
                <p className="font-600">Đã xác nhận</p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="green"
                    className="w-[1rem] h-[1rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="italic text-[0.9rem]">Địa chỉ Email</span>
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Account>
  );
};

export default AccountTemplate;
const Account = styled.div`
  max-width: 1200px;
  margin: auto;
  height: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  h2 {
    font-size: 2rem;
  }
  .content {
    justify-content: space-evenly;
    .updateUser {
      padding: 10px;
      .div-represent {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
