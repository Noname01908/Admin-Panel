import toast from "react-hot-toast";

export const makeToast = (Text: string) => {
    toast.success(Text, {
        style: {
            borderRadius: "4px",
            background: "#333",
            color: "#fff",
        },
    })
}