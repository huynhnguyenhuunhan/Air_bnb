import { apiInstance } from "constant";
import { CommentSchemaType } from "schema/CommentSchema";
import { BinhLuan, DanhGia } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_BINH_LUAN_API
})

export const quanLyBinhLuanServices = {
    getCommentsByRoomId: (MaPhong: number) => api.get<ApiResponse<BinhLuan[]>>('/lay-binh-luan-theo-phong' + `/${MaPhong}`),
    postComment: (payload: CommentSchemaType) => api.post<ApiResponse<DanhGia>>('', payload),
}