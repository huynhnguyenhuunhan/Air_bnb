import { z } from 'zod'

export const AccountSchema = z.object({
    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng email'),
    phone: z.string().nonempty('Vui lòng nhập số điện thoại'),
    birthday: z.string(),
    name: z.string().nonempty('Vui lòng nhập họ tên'),
    gender: z.string().nonempty("Vui lòng chọn giới tính"),
})

export type AccountSchemaType = z.infer<typeof AccountSchema>