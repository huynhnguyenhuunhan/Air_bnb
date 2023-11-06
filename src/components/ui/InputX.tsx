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
    labelClassname: string;
    errorClassname: string;
    inputClassname: string;
};
export const InputX = ({
    register,
    error,
    name,
    type,
    value,
    placeholder,
    label,
    className,
    disabled,
    labelClassname,
    errorClassname,
    inputClassname,
}: InputProps) => {
    return (
        <div className={className}>
            {label && <p className={labelClassname}>{label}</p>}
            <input
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                {...register(name)}
                className={inputClassname}
            />
            {error && <p className={errorClassname}>{error}</p>}
        </div>
    );
};

export default InputX;
