import { format } from "date-fns";

export default function formatDate(date) {
    return format(date, "dd.MM.yyyy HH:mm");
}
