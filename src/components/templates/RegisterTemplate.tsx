import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { quanLyNguoiDungServices } from "services";
import { DatePicker, DatePickerProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { showSuccess } from "../../main";
import styled from "styled-components";

export const RegisterTemplate = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });
  const [error, setError] = useState<string>();
  const handleChange: DatePickerProps["onChange"] = (date, datestring) => {
    setValue("birthday", datestring);
    if (!date) {
      setError("Vui lòng nhập ngày sinh");
    } else {
      setError("");
    }
  };
  const onSubmit: SubmitHandler<RegisterSchemaType> = async (value) => {
    try {
      await quanLyNguoiDungServices.register(value);
      console.log("value", value);
      showSuccess("Đăng kí thành công!");
      navigate(PATH.login);
    } catch (err) {
      toast.error(err?.response?.data?.content);
    }
  };
  return (
    <Register>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-40 text-white">Welcome to Airbnb</h2>
        <div className="mt-10">
          <input
            type="text"
            placeholder="Họ và tên"
            className="outline-none block w-full p-8 text-black border border-white rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
            {...register("name")}
          />
          <p className="text-red-500">{errors?.name?.message as string}</p>
        </div>
        <div className="mt-20">
          <input
            type="text"
            placeholder="Email"
            className="outline-none block w-full p-8 text-black border border-white rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
            {...register("email")}
          />
          <p className="text-red-500">{errors?.email?.message as string}</p>
        </div>
        <div className="mt-20">
          <input
            type="password"
            placeholder="Mật khẩu"
            className="outline-none block w-full p-8 text-black border border-white rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
            {...register("password")}
          />
          <p className="text-red-500">{errors?.password?.message as string}</p>
        </div>
        <div className="mt-20">
          <input
            type="text"
            placeholder="Số điện thoại"
            className="outline-none block w-full p-8 text-black border border-white rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
            {...register("phone")}
          />
          <p className="text-red-500">{errors?.phone?.message as string}</p>
        </div>
        <div className="mt-20">
          <DatePicker
            id="datepicker"
            className="outline-none block w-full p-8 text-black border border-white rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Chọn ngày sinh"
            onChange={handleChange}
            // value={datePicker ? dayjs(datePicker, "DD/MM/YYYY") : null}
            format="DD/MM/YYYY"
          />
          <p className="text-red-500">{error}</p>
        </div>
        <div className="mt-20">
          <select
            className="outline-none block w-full p-8 border border-white rounded-lg bg-[#ffffff] focus:ring-blue-500 focus:border-blue-500"
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
        <div className="mt-20">
          <button
            className="text-white w-full bg-red-500 font-500 rounded-lg text-20 px-5 py-[16px]"
            onClick={() => {
              const DatePicker = document.getElementById(
                "datepicker"
              ) as HTMLInputElement;
              if (!DatePicker.value) {
                setError("Vui lòng nhập ngày sinh");
              }
            }}
          >
            Đăng Kí
          </button>
        </div>
      </form>
    </Register>
  );
};

export default RegisterTemplate;
const Register = styled.div`
  select {
    color: rgba(0, 0, 0, 0.4);
    #gender1 {
      color: black;
    }
    #gender2 {
      color: black;
    }
  }
`;
