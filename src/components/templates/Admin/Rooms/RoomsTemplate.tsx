import { useState } from "react"
import { DataTable } from "./Table"
import Overview from "./Overview"
import CreateModal from "./CreateModal"
import UploadModal from "./UploadModal"
import UpdateModal from "./UpdateModal"

export const RoomsTemplate = () => {
    const [create, setCreate] = useState<boolean>(false)
    const [upload, setUpload] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    return (
        <>
            <Overview setCreate={setCreate} />
            <DataTable setUpload={setUpload} setUpdate={setUpdate} />
            <CreateModal create={create} setCreate={setCreate} setUpload={setUpload} />
            <UploadModal upload={upload} setUpload={setUpload} />
            <UpdateModal update={update} setUpdate={setUpdate} />
        </>
    )
}

export default RoomsTemplate