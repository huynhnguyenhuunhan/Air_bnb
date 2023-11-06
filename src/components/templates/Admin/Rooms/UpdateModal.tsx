import { AlertSuccess, Button, InputX, Modal } from "components/ui";
import { RootState, useAppDispatch } from "store";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoomSchema, RoomSchemaType } from "schema";
import { postRoomThunk } from "store/quanLyPhong/thunk";
import { quanLyPhongActions } from "store/quanLyPhong/slice";
import styled from "styled-components";
import { Switch } from "antd";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const UpdateModal = ({ update, setUpdate }) => {
    const dispatch = useAppDispatch();
    const {
        reset,
        setValue,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<RoomSchemaType>({
        mode: "onChange",
        resolver: zodResolver(RoomSchema),
    });

    const { currentRoom } = useSelector((state: RootState) => state.quanLyPhong)

    useEffect(() => {
        reset({
            ...currentRoom
        })
    }, [currentRoom, reset])

    const onSubmit: SubmitHandler<RoomSchemaType> = async (value) => {
        dispatch(postRoomThunk(value))
            .unwrap()
            .then((value) => {
                setUpdate(false);
                dispatch(quanLyPhongActions.setCurrentRoom(value));
                AlertSuccess({ title: "Cập nhật thành công", confirmButtonText: "Đóng" });
            });
    };
    return (
        <Modal
            open={update}
            onCancel={() => setUpdate(false)}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            width={1000}
            paddingContentHorizontal={0}
        >
            <h1 className="text-24 font-600">Thông tin phòng</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputX
                    register={register}
                    name="maViTri"
                    error={errors?.maViTri?.message}
                    placeholder="Mã vị trí"
                    type="number"
                    label="Mã vị trí"
                    className="input_container w-1/4"
                    labelClassname="input_label"
                    inputClassname="input_box"
                    errorClassname="input_error"
                />
                <div className="grid grid-cols-3 gap-[1rem]">
                    <InputX
                        register={register}
                        name="tenPhong"
                        error={errors?.tenPhong?.message}
                        placeholder="Tên phòng"
                        type="text"
                        label="Tên phòng"
                        className="input_container col-span-2"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                    <InputX
                        register={register}
                        name="giaTien"
                        error={errors?.giaTien?.message}
                        placeholder="Giá tiền"
                        type="number"
                        label="Giá tiền"
                        className="input_container"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                </div>
                <InputX
                    register={register}
                    name="moTa"
                    error={errors?.moTa?.message}
                    placeholder="Mô tả"
                    type="text"
                    label="Mô tả"
                    className="input_container"
                    labelClassname="input_label"
                    inputClassname="input_box"
                    errorClassname="input_error"
                />
                <div className="grid grid-cols-2 gap-[1rem]">
                    <InputX
                        register={register}
                        name="khach"
                        error={errors?.khach?.message}
                        placeholder="Số lượng khách"
                        type="number"
                        label="Số khách"
                        className="input_container"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                    <InputX
                        register={register}
                        name="phongNgu"
                        error={errors?.phongNgu?.message}
                        placeholder="Số phòng ngủ"
                        type="number"
                        label="Số phòng ngủ"
                        className="input_container"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                    <InputX
                        register={register}
                        name="giuong"
                        error={errors?.giuong?.message}
                        placeholder="Số giường"
                        type="number"
                        label="Số giường"
                        className="input_container"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                    <InputX
                        register={register}
                        name="phongTam"
                        error={errors?.phongTam?.message}
                        placeholder="Số phòng tắm"
                        type="number"
                        label="Số phòng tắm"
                        className="input_container"
                        labelClassname="input_label"
                        inputClassname="input_box"
                        errorClassname="input_error"
                    />
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-5 gap-10 mt-10">
                        <div>
                            <p>Máy giặt</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("mayGiat", checked)
                            }} />
                        </div>
                        <div>
                            <p>Bàn là</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("banLa", checked)
                            }} />
                        </div>
                        <div>
                            <p>Ti vi</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("tivi", checked)
                            }} />
                        </div>
                        <div>
                            <p>Điều hòa</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("dieuHoa", checked)
                            }} />
                        </div>
                        <div>
                            <p>Wifi</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("wifi", checked)
                            }} />
                        </div>
                        <div>
                            <p>Bếp</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("bep", checked)
                            }} />
                        </div>
                        <div>
                            <p>Bãi xe</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("doXe", checked)
                            }} />
                        </div>
                        <div>
                            <p>Hồ bơi</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("hoBoi", checked)
                            }} />
                        </div>
                        <div>
                            <p>Bàn ủi</p>
                            <Switch onChange={(checked: boolean) => {
                                setValue("banUi", checked)
                                console.log({ checked });
                            }} />
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-end">
                    <Button
                        type="primary"
                        danger
                        style={{
                            padding: "0 10px",
                            display: "flex",
                            alignItems: "center",
                        }}
                        htmlType="submit"
                    >
                        Cập nhật
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default UpdateModal;

const Form = styled.form`
  .input_container {
    margin-top: 10px;
  }
  .input_label {
    margin-bottom: 5px;
  }
  .input_box {
    width: 100%;
    outline: none;
    padding: 5px;
    display: block;
    border: 1px solid gray;
    border-radius: 10px;
    &:focus {
      border: 1px solid blue;
    }
  }
`;
