import { Carousel as CarouselAirBnB, CarouselProps as CarouselPropsAirBnB, ConfigProvider as ConfigProviderAirbnb } from 'antd'

type CarouselProps = CarouselPropsAirBnB & {
    dotActiveWidth?: number
}

export const Carousel = (props: CarouselProps) => {
    return <ConfigProviderAirbnb
        theme={{
            components: {
                Carousel: {
                    dotActiveWidth: props.dotActiveWidth,
                },
            },
        }}
    >
        <CarouselAirBnB {...props} />
    </ConfigProviderAirbnb>
}

export default Carousel