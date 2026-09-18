import { useState } from "react";

const DishForm = ({ onClose }) => {
  const [title, setTitle] = useState("");

  return (
    <form>
      <label>
        Titel
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <button type="button" onClick={onClose}>
        Luk
      </button>
    </form>
  );
};

export default DishForm;
