import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  register?: UseFormRegister<any>;
  error?: string;
  name?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  className?: string;
  disabled?: boolean;
  value?: string;
};
export const Input = ({
  register,
  error,
  name,
  type,
  value,
  placeholder,
  label,
  className,
  disabled,
}: InputProps) => {
  return (
    <div className={className}>
      {label && <p className="mb-10 text-white">{label}</p>}
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        {...register(name)}
        className="outline-none block w-full p-10 text-white border border-white-300 rounded-lg bg-[#333]  focus:ring-blue-500 focus:border-rose-200 "
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
