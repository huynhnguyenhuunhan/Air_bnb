import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "store";
import { StyleProvider } from "@ant-design/cssinjs";
import Swal from "sweetalert2";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <StyleProvider hashPriority='high'>
        <ToastContainer />
        <App />
      </StyleProvider>
    </Provider>
  </BrowserRouter>
);
export let showSuccess = (title = "Thành Công") => {
  Swal.fire({
    position: "center",
    icon: "success",
    title,
    showConfirmButton: false,
    timer: 1500,
  });
};
export let showError = (title = "Có lỗi gì đó?!") => {
  Swal.fire({
    icon: "error",
    title: "Ui da...",
    text: title,
    footer: '<a href="">Tìm hiểu thêm về các địa điểm nổi tiếng!</a>',
  });
};
