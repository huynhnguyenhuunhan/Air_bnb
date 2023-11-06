import { z } from 'zod'

export const LocationUpdateSchema = z.object({
    id: z.coerce.number(),
    tenViTri: z.string().nonempty("vui lòng nhập tên vị trí"),
    tinhThanh: z.string().nonempty("vui lòng nhập tỉnh thành"),
    quocGia: z.string().nonempty("Vui lòng nhập quốc gia"),
})

export type LocationUpdateSchemaType = z.infer<typeof LocationUpdateSchema>