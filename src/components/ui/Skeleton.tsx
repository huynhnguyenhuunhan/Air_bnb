import { AvatarProps, Skeleton as SkeletonA, SkeletonProps as SkeletonPropsA } from 'antd'
import { SkeletonButtonProps } from 'antd/es/skeleton/Button'
import { SkeletonImageProps } from 'antd/es/skeleton/Image'
import { SkeletonInputProps } from 'antd/es/skeleton/Input'

type SkeletonObject = {
    (props: SkeletonPropsA): JSX.Element
    Avatar: React.FC<AvatarProps>
    Input: React.FC<SkeletonInputProps>
    Image: React.FC<SkeletonImageProps>
    Button: React.FC<SkeletonButtonProps>

}
export const Skeleton: SkeletonObject = (props: SkeletonPropsA) => {
    return <SkeletonA {...props} />
}

Skeleton.Avatar = SkeletonA.Avatar
Skeleton.Input = SkeletonA.Input
Skeleton.Image = SkeletonA.Image
Skeleton.Button = SkeletonA.Button

export default Skeleton