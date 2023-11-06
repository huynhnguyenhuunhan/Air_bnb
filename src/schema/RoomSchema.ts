import { z } from "zod";

export const RoomSchema = z.object({
    tenPhong: z.string().nonempty("Vui lòng nhập tên"),
    khach: z.coerce.number(),
    phongNgu: z.coerce.number(),
    giuong: z.coerce.number(),
    phongTam: z.coerce.number(),
    moTa: z.string().nonempty("Vui lòng nhập mô tả"),
    giaTien: z.coerce.number(),
    mayGiat: z.boolean().default(false),
    banLa: z.boolean().default(false),
    tivi: z.boolean().default(false),
    dieuHoa: z.boolean().default(false),
    wifi: z.boolean().default(false),
    bep: z.boolean().default(false),
    doXe: z.boolean().default(false),
    hoBoi: z.boolean().default(false),
    banUi: z.boolean().default(false),
    maViTri: z.coerce.number(),
})

export type RoomSchemaType = z.infer<typeof RoomSchema>