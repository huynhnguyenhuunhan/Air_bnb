import { useState } from "react"
import Overview from "./Overview"
import { DataTable } from "./Table"
import CreateModal from "./CreateModal"
import UploadModal from "./UploadModal"
import UpdateModal from "./UpdateModal"

export const LocationsTemplate = () => {
    const [create, setCreate] = useState<boolean>(false)
    const [upload, setUpload] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    return (
        <>
            <Overview setCreate={setCreate} />
            <DataTable setUpload={setUpload} setUpdate={setUpdate} />
            <CreateModal modal={create} setModal={setCreate} setUpload={setUpload} />
            <UploadModal upload={upload} setUpload={setUpload} />
            <UpdateModal update={update} setUpdate={setUpdate} />
        </>
    )
}

export default LocationsTemplate