import { zodResolver } from "@hookform/resolvers/zod"
import { AlertSuccess, Button, InputX, Modal } from "components/ui"
import { SubmitHandler, useForm } from "react-hook-form"
import { LocationSchema, LocationSchemaType } from "schema/LocationSchema"
import { useAppDispatch } from "store"
import { quanLyViTriActions } from "store/quanLyViTri/slice"
import { postLocationThunk } from "store/quanLyViTri/thunk"
import styled from "styled-components"

export const CreateModal = ({ modal, setModal, setUpload }) => {
    const dispatch = useAppDispatch()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LocationSchemaType>({
        mode: "onChange",
        resolver: zodResolver(LocationSchema),
    })

    const onSubmit: SubmitHandler<LocationSchemaType> = (async (value) => {
        dispatch(postLocationThunk(value))
            .unwrap()
            .then((value) => {
                setModal(false)
                setUpload(true)
                dispatch(quanLyViTriActions.setCurrentLocation(value))
                AlertSuccess({ title: "thêm thành công", confirmButtonText: "Đóng" })
            })
    })
    return (
        <Modal
            open={modal}
            onCancel={() => setModal(false)}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            width={1000}
            paddingContentHorizontal={0}
        >
            <div className="pt-[1rem]">
                <h3 className="text-22 font-600">Thông tin vị trí</h3>
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <InputX
                        register={register}
                        name="tenViTri"
                        error={errors?.tenViTri?.message}
                        placeholder='Tên vị trí'
                        type='text'
                        className="input_container"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                    <InputX
                        register={register}
                        name="tinhThanh"
                        error={errors?.tinhThanh?.message}
                        placeholder='Tỉnh thành'
                        type='text'
                        className="input_container"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                    <InputX
                        register={register}
                        name="quocGia"
                        error={errors?.tinhThanh?.message}
                        placeholder='Quốc gia'
                        type='text'
                        className="input_container"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                    <div
                        className="mt-10 flex justify-end"
                    >
                        <Button
                            type="primary"
                            size="middle"
                            danger
                            htmlType="submit"
                            style={{
                                padding: "0 10px",
                            }}
                        >
                            Lưu & Tiếp tục
                        </Button>
                    </div>
                </Form>
            </div>
        </Modal>
    )
}

export default CreateModal

const Form = styled.form`
    .input_container {
        margin-top: 10px;
    }
    .input_label {

    }
    .input_box {
        width: 100%;
        outline: none;
        padding: 10px;
        display: block;
        border: 1px solid gray;
        border-radius: 10px;
        &:focus {
            border: 1px solid blue;
        }
    }
`