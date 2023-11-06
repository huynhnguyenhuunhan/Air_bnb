import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "antd"
import { AlertSuccess, InputX, Modal } from "components/ui"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { LocationSchema, LocationSchemaType } from "schema"
import { RootState, useAppDispatch } from "store"
import { updateLocationThunk } from "store/quanLyViTri/thunk"
import styled from "styled-components"

export const UpdateModal = ({ setUpdate, update }) => {
    const { currentLocation, Locations } = useSelector((state: RootState) => state.quanLyViTri)
    const dispatch = useAppDispatch()
    const {
        reset,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LocationSchemaType>({
        mode: "onChange",
        resolver: zodResolver(LocationSchema),
    })

    useEffect(() => {
        reset({
            ...currentLocation
        })
    }, [currentLocation, reset, Locations])

    const onSubmit: SubmitHandler<LocationSchemaType> = (async (value) => {
        const payload = { id: currentLocation.id, payload: value }
        dispatch(updateLocationThunk(payload))
            .unwrap()
            .then(() => {
                AlertSuccess({ title: "Cập nhật thành công", confirmButtonText: "Đóng" })
            })
    })

    return (
        <Modal
            open={update}
            onCancel={() => setUpdate(false)}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            width={1000}
            paddingContentHorizontal={0}
        >
            <div className="pt-[2rem]">
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
                            Cập nhật
                        </Button>
                    </div>
                </Form>
            </div>
        </Modal>
    )
}

export default UpdateModal

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