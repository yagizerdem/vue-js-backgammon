import { toast } from "vue3-toastify";

const notify = (message) => {
  toast(message, {
    autoClose: 1000,
    position: toast.POSITION.TOP_RIGHT,
  });
};
export default notify;
