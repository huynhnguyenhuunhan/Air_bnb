import { z } from 'zod'

export const CommentSchema = z.object({
    // id: z.number(),
    maPhong: z.coerce.number(),
    maNguoiBinhLuan: z.coerce.number(),
    ngayBinhLuan: z.string().nonempty("Không để trống ngày"),
    noiDung: z.string().nonempty("Không để trống nội dung"),
    saoBinhLuan: z.coerce.number(),
})

export type CommentSchemaType = z.infer<typeof CommentSchema>