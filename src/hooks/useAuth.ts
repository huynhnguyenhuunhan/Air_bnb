import { useSelector } from "react-redux"
import { RootState } from "store"

export const useAuth = () => {
    const { getUserID } = useSelector((state: RootState) => state.quanLyNguoiDung)
    return { getUserID }
}