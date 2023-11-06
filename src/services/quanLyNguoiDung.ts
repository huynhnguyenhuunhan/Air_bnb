import { apiInstance } from "constant";
import { LoginSchemaType, RegisterSchemaType } from "schema";
import { Content, User } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API
})
const apiGetUserID = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API_ID
})

export const quanLyNguoiDungServices = {
    login: (payload: LoginSchemaType) => api.post<ApiResponse<Content<User>>>('/signin',payload),
    register: (payload: RegisterSchemaType) => api.post<ApiResponse<User>>('/signup',payload),
    getUser: () => apiGetUserID.get<ApiResponse<User[]>>(""),
    postUser: (payload: RegisterSchemaType) => apiGetUserID.post<ApiResponse<User>>("",payload),
    deleteUser: (id:number) => apiGetUserID.delete<ApiResponse<User>>(`?id=${id}`),
    getUserID: (id:string) => apiGetUserID.get<ApiResponse<User>>(`/${id}`),
    putUserID: (id:string, payload: User) => apiGetUserID.put<ApiResponse<User>>(`/${id}`,payload),
    uploadAvatar: (payload:any) => apiGetUserID.post('/upload-avatar',payload)
}