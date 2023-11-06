import { z } from 'zod'

export const AdminUserSchema = z.object({
    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng email'),
    password: z.string().nonempty('Vui lòng nhập mật khẩu'),
    phone: z.string().nonempty('Vui lòng nhập số điện thoại'),
    birthday: z.string(),
    name: z.string().nonempty('Vui lòng nhập họ tên'),
    gender: z.string().nonempty("Vui lòng chọn giới tính"),
    role: z.string().nonempty("Vui lòng chọn loại tài khoản")
})

export type AdminUserSchemaType = z.infer<typeof AdminUserSchema>