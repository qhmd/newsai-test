import dayjs from "dayjs"
import { Clock } from "lucide-react"

const TimePublsih = ({ pub_date }: TimePub) => (
    <div className="flex gap-2">
        <Clock color="white"/>
        <p className="text-white">{dayjs(pub_date).format("DD MMM YYYY, HH:mm")}</p>

    </div>
)

export default TimePublsih