import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";

export default function ErrorMessage() {
  useEffect(() => {
    toast("Please enter a valid value!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }, []);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
