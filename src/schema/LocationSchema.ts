import { z } from 'zod'

export const LocationSchema = z.object({
    tenViTri: z.string().nonempty("vui lòng nhập tên vị trí"),
    tinhThanh: z.string().nonempty("vui lòng nhập tỉnh thành"),
    quocGia: z.string().nonempty("Vui lòng nhập quốc gia"),
})

export type LocationSchemaType = z.infer<typeof LocationSchema>