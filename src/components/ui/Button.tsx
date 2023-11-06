import {
  Button as ButtonX,
  ButtonProps as ButtonPropsX,
  ConfigProvider,
} from "antd";
import { HTMLInputTypeAttribute } from "react";

type ButtonProps = ButtonPropsX & {
  type?: HTMLInputTypeAttribute;
  colorBgContainer?: string;
  colorBorder?: string;
  colorPrimaryActive?: string;
  colorPrimaryBorderHover?: string;
  colorPrimaryHover?: string;
  colorPrimaryBgHover?: string;
  textHoverBg?: string;
  primaryShadow?: string;
  colorPrimary?: string;
  primaryColor?: string;
  colorLink?: string;
  colorText?: string;
  colorBgTextHover?: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            textHoverBg: props.textHoverBg,
            primaryShadow: props.primaryShadow,
            primaryColor: props.primaryColor,
          },
        },
        token: {
          colorBgContainer: props.colorBgContainer,
          colorBorder: props.colorBorder,
          colorPrimaryActive: props.colorPrimaryActive,
          colorPrimaryBorderHover: props.colorPrimaryBorderHover,
          colorPrimaryHover: props.colorPrimaryHover,
          colorPrimaryBgHover: props.colorPrimaryBgHover,
          // colorPrimary: props.colorPrimary,
          colorLink: props.colorLink,
          colorText: props.colorText,
          colorBgTextHover: props.colorBgTextHover,
        },
      }}
    >
      <ButtonX {...props} />
    </ConfigProvider>
  );
};
export default Button;
