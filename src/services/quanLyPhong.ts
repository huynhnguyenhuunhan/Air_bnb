import { apiInstance } from "constant"
import { RoomSchemaType } from "schema/RoomSchema"
import { CityIdType, RoomsByLocation, UploadHinhPhong,Rooms } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_PHONG_API
})

export const quanLyPhongServices = {
    getRooms: () => api.get<ApiResponse<RoomsByLocation[]>>(''),
    getRoomsByLocation: (params: CityIdType) => api.get<ApiResponse<RoomsByLocation[]>>('/phong-thue/lay-phong-theo-vi-tri', {
        params
    }),
    getRoomAll: () => api.get<ApiResponse<Rooms[]>>(`/phong-thue`),
    getRoomsById: (id: number) => api.get<ApiResponse<RoomsByLocation>>(`/phong-thue/${id}`),
    postRoom: (params: RoomSchemaType) => api.post<ApiResponse<RoomsByLocation>>('/phong-thue', params),
    uploadRoomImage: (params: UploadHinhPhong) => api.post<ApiResponse<RoomsByLocation>>(`/phong-thue/upload-hinh-phong?maPhong=${params.maPhong}`, params.formData),
    deleteRoom: (id: number) => api.delete<ApiResponse<RoomsByLocation>>(`/phong-thue/${id}`),
}