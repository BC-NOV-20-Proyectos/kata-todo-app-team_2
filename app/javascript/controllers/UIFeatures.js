import { toast } from "react-toastify"

const UIFeatures = {
    toast: (message) => {
        toast.dismiss();
        toast(message);
    }
}
export default UIFeatures;