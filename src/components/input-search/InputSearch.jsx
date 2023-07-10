/* Components */
import { Form } from "./InputSearch.style";
import { FiSearch, FiX } from "react-icons/fi";

export default function InputSearch({ onChange }) {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <button type="button">
        <FiSearch size="2rem" />
      </button>

      <input
        className="input"
        placeholder="Media Title"
        type="text"
        autoFocus
        onChange={(e) => onChange(e)}
      />

      <button type="reset">
        <FiX size="2rem" />
      </button>
    </Form>
  );
}
