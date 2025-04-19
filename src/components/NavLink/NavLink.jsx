import css from "./NavLink.module.css";

export default function NavLink({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input
        type="text"
        name="movieName"
        placeholder="Enter movie name"
        autoComplete="off"
        autoFocus
        className={css.input}
      />
      <button type="submit" className={css.btnSearch}>
        Search
      </button>
    </form>
  );
}
