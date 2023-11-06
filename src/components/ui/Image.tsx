import { ConfigProvider, Image as ImageAirbnb, ImageProps as ImagePropsAirbnb } from 'antd'

type ImageObject = {
    (props: ImagePropsAirbnb): JSX.Element;
    width?: number;
    src?: string;
    maskClassName?: string;
    height?: number;
    style?: HTMLStyleElement
}

export const Image: ImageObject = (props) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Image: {

                    }
                },
                token: {}
            }}
        >
            <ImageAirbnb
                width={props.width}
                src={props.src}
                style={props.style}
                preview
            />
        </ConfigProvider>
    )
}

export default Image