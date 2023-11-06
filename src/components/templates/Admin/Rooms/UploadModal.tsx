import { AlertSuccess, Modal } from "components/ui"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { uploadRoomImageThunk } from "store/quanLyPhong/thunk";

export const UploadModal = ({ upload, setUpload }) => {
    const dispatch = useAppDispatch()
    const { currentRoom } = useSelector((state: RootState) => state.quanLyPhong)
    console.log({ currentRoom });
    const handleInputImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("formFile", file);
        const payload = { formData, maPhong: currentRoom.id };
        dispatch((uploadRoomImageThunk(payload)))
            .unwrap()
            .then(() => {
                setUpload(false)
                AlertSuccess({ title: "Upload thành công", confirmButtonText: "Đóng" })
            })
    };
    useEffect(() => {
    }, [currentRoom])

    return (
        <Modal
            open={upload}
            onCancel={() => setUpload(false)}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            width={1000}
            paddingContentHorizontal={0}
        >
            <h3 className="text-[1.2rem] font-600 mb-3">Thông tin ảnh</h3>
            <input type="file" onChange={handleInputImage} />
        </Modal>
    )
}

export default UploadModal