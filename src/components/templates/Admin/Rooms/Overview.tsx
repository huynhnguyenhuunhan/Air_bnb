import { Button } from "components/ui"

export const Overview = ({ setCreate }) => {
    return (
        <div className="mb-[1rem]">
            <h1 className="text-30 font-600 pb-[1rem]">Quản lý phòng</h1>
            <Button
                type="primary"
                danger
                size="large"
                onClick={() => {
                    setCreate(true)
                }}
            >
                Thêm phòng
            </Button>
        </div>
    )
}

export default Overview