import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const color = "#ff0000";
const loading = true;

export default function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
