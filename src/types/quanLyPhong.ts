export type CityIdType = {
    maViTri: number
}

export interface RoomsByLocation {
    id: number
    tenPhong: string
    khach: number
    phongNgu: number
    giuong: number
    phongTam: number
    moTa: string
    giaTien: number
    mayGiat: boolean
    banLa: boolean
    tivi: boolean
    dieuHoa: boolean
    wifi: boolean
    bep: boolean
    doXe: boolean
    hoBoi: boolean
    banUi: boolean
    maViTri: number
    hinhAnh: string
}
export interface UploadHinhPhong {
    formData: FormData
    maPhong: number
}

export interface Rooms {
    id: number
    tenPhong: string
    khach: number
    phongNgu: number
    giuong: number
    phongTam: number
    moTa: string
    giaTien: number
    mayGiat: boolean
    banLa: boolean
    tivi: boolean
    dieuHoa: boolean
    wifi: boolean
    bep: boolean
    doXe: boolean
    hoBoi: boolean
    banUi: boolean
    maViTri: number
    hinhAnh: string
}