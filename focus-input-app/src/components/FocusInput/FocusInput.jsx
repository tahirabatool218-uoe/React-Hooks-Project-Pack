import { useRef } from "react";
import "./FocusInput.css";

function FocusInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div className="focus-container">
      <h1>Focus Input</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter something..."
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;