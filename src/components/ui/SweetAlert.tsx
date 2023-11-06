import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
type AlertType = {
    title?: string
    text?: string
    confirmButtonText?: string
}
export const AlertSuccess = ({ title, text, confirmButtonText }: AlertType) => Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonText: confirmButtonText
})
export const AlertInfo = ({ title, text, confirmButtonText }: AlertType) => Swal.fire({
    title: title,
    text: text,
    icon: 'info',
    confirmButtonText: confirmButtonText
})
export const AlertWarning = ({ title, text, confirmButtonText }: AlertType) => Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    confirmButtonText: confirmButtonText
})