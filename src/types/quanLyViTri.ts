export type PhanTrangParams = {
    pageIndex: number
    pageSize: number
    keyword: string
}
export interface PhanTrangViTri {
    pageIndex: number
    pageSize: number
    totalRow: number
    keywords: any
    data: ViTri[]
}
export interface ViTri {
    id?: number
    tenViTri?: string
    tinhThanh?: string
    quocGia?: string
    hinhAnh?: string
}
export interface UploadHinhViTri {
    formData: FormData
    maViTri: number
}

export interface UpdateViTri {
    id: number
    payload: ViTri
}
