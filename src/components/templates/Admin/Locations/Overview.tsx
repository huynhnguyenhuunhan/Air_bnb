import { Button } from "antd"

export const Overview = ({ setCreate }) => {
    return (
        <div className="mb-[1rem]">
            <h1 className="text-30 font-600 pb-[1rem]">Quản lý vị trí</h1>
            <Button
                type="primary"
                danger
                onClick={() => {
                    setCreate(true)
                }}
            >
                Thêm vị trí
            </Button>
        </div>
    )
}

export default Overview