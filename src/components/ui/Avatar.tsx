import { Avatar as AvatarX, AvatarProps as AvatarPropsX } from "antd"

type AvatarProps = AvatarPropsX & {

}

export const Avatar = (props: AvatarProps) => {
    return (
        <AvatarX {...props} />
    )
}

export default Avatar