import { z } from 'zod'

export const BookingSchema = z.object({
    maPhong: z.coerce.number(),
    ngayDen: z.string().nonempty("Không để trống ngày đến"),
    ngayDi: z.string().nonempty("Không để trống ngày đến"),
    soLuongKhach: z.coerce.number(),
    maNguoiDung: z.coerce.number(),
})

export type BookingSchemaType = z.infer<typeof BookingSchema>