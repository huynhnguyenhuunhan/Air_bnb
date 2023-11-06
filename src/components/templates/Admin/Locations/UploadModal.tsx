import { AlertSuccess, Modal } from "components/ui"
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { postLocationImageThunk } from "store/quanLyViTri/thunk";

export const UploadModal = ({ upload, setUpload }) => {
    const dispatch = useAppDispatch()
    const { currentLocation } = useSelector((state: RootState) => state.quanLyViTri)
    console.log("🚀 ~ file: UploadModal.tsx:9 ~ UploadModal ~ currentLocation:", currentLocation)
    const handleInputImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("formFile", file);
        const payload = { formData, maViTri: currentLocation.id };
        dispatch((postLocationImageThunk(payload)))
            .unwrap()
            .then(() => {
                setUpload(false)
                AlertSuccess({ title: "Upload thành công", confirmButtonText: "Đóng" })
            })
    };

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