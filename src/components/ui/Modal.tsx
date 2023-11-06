import { Modal as ModalX, ModalProps as ModalPropsX, ConfigProvider } from "antd"

type ModalProps = ModalPropsX & {
    paddingContentHorizontal?: number
}

export const Modal = (props: ModalProps) => {
    return <ConfigProvider
        theme={{
            components: {
                Modal: {

                }
            },
            token: {
                paddingContentHorizontal: props.paddingContentHorizontal,
            }
        }}
    >
        <ModalX {...props} />
    </ConfigProvider>
}

export default Modal