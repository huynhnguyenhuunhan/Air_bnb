import { Card as CardAirbnb, CardProps as CardPropsAirbnb, ConfigProvider } from 'antd'
import { CardGridProps, CardMetaProps } from 'antd/es/card';

type CardProps = {
    (props: CardPropsAirbnb): JSX.Element;
    Meta: React.FC<CardMetaProps>;
    Grid: React.FC<CardGridProps>;
}

export const Card: CardProps = (props) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {

                    }
                },
                token: {

                }
            }}
        >
            <CardAirbnb {...props} />
        </ConfigProvider>
    )
}

Card.Meta = CardAirbnb.Meta;
Card.Grid = CardAirbnb.Grid;

export default Card