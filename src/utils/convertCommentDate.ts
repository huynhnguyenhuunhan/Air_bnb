import { format, parse } from "date-fns";
import { vi } from "date-fns/locale";

export const convertCommentDate = (inputDate: string): string => {
    try {
        const dateString = new Date(inputDate).toLocaleDateString([], {
            day: 'numeric',
            month: '2-digit',
            year: 'numeric'
        });
        const date = parse(dateString, 'MM/dd/yyyy', new Date());
        return format(date, "'tháng' MM 'năm' yyyy", { locale: vi });
    } catch (error) {
        console.error(`Error parsing or formatting date: ${error}`);
        return 'Invalid Date';
    }
}