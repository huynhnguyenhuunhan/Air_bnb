import { Rate as RateX, RateProps as RatePropsX } from "antd"
type RateProps = RatePropsX & {

}
export const Rate = (props: RateProps) => {
    return (
        <RateX {...props} />
    )
}

export default Rate