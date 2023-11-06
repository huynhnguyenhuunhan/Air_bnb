export interface BinhLuan {
    id: number
    ngayBinhLuan: string
    noiDung: string
    saoBinhLuan: number
    tenNguoiBinhLuan: string
    avatar: string
}

export interface DanhGia {
    id: number
    maPhong: number
    maNguoiBinhLuan: number
    ngayBinhLuan: string
    noiDung: string
    saoBinhLuan: number
}