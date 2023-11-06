import { apiInstance } from "constant"
import { BookingSchemaType } from "schema/BookingSchema"
import { Content, DatPhong } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_PHONG_API
})

export const quanLyDatPhongServices = {
    postBooking: (payload: BookingSchemaType) => api.post<ApiResponse<Content<DatPhong>>>('', payload),
    getBooking: (maNguoiDung:number) => api.get<ApiResponse<DatPhong>>(`/lay-theo-nguoi-dung/${maNguoiDung}`)
}