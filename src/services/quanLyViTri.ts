import { apiInstance } from "constant";
import { LocationSchemaType } from "schema/LocationSchema";
import { PhanTrangParams, PhanTrangViTri, UpdateViTri, UploadHinhViTri, ViTri } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_VI_TRI_API
})

export const quanLyViTriServices = {
    getLocation: () => api.get<ApiResponse<ViTri[]>>(''),
    getLocationPagination: (params: PhanTrangParams) => api.get<ApiResponse<PhanTrangViTri>>('/phan-trang-tim-kiem', {
        params
    }),
    getLocationAtHeader: () => api.get<ApiResponse<ViTri[]>>(''),
    getLocationById: (params: number) => api.get<ApiResponse<ViTri>>(`/${params}`),
    postLocation: (payload: LocationSchemaType) => api.post<ApiResponse<ViTri>>('', payload),
    postImage: (payload: UploadHinhViTri) => api.post<ApiResponse<ViTri>>(`/upload-hinh-vitri?maViTri=${payload.maViTri}`, payload.formData),
    deleteLocation: (id: number) => api.delete<ApiResponse<ViTri>>(`/${id}`),
    updateLocation: (params: UpdateViTri) => api.put<ApiResponse<ViTri>>(`/${params.id}`, params.payload)
}