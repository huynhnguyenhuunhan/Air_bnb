import {
  DatePicker as DatePickerA,
  DatePickerProps as DatePickerPropsA,
} from "antd";
import { UseFormRegister } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";
type DatePickerProps = DatePickerPropsA & {
  //Định nghĩa thêm các props có thể truyền xuống
  register?: UseFormRegister<any>;
  error?: string;
  name?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  className?: string;
  disabled?: boolean;
  value?: any;
};


export const DatePicker = (props: DatePickerProps) => {
  return <DatePickerA {...props} />;
};

export default DatePicker;
