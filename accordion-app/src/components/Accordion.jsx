import { useState } from "react";
import AccordionItem from "./AccordionItem";
import accordionData from "../data/accordionData";
import "./Accordion.css";

function Accordion() {
  const [activeId, setActiveId] = useState(null);
  const [multiple, setMultiple] = useState(false);
  const [activeIds, setActiveIds] = useState([]);

  const handleClick = (id) => {
    // Single Selection Mode
    if (!multiple) {
      if (activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
      }
    }

    // Multiple Selection Mode
    else {
      if (activeIds.includes(id)) {
        setActiveIds(activeIds.filter((itemId) => itemId !== id));
      } else {
        setActiveIds([...activeIds, id]);
      }
    }
  };

  const handleMultiple = () => {
    setMultiple(!multiple);
    setActiveId(null);
    setActiveIds([]);
  };

  return (
    <div className="accordion">

      <button
        className="multiple-button"
        onClick={handleMultiple}
      >
        {multiple
          ? "Disable Multiple Selection"
          : "Enable Multiple Selection"}
      </button>

      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={
            multiple
              ? activeIds.includes(item.id)
              : activeId === item.id
          }
          onClick={() => handleClick(item.id)}
        />
      ))}

    </div>
  );
}

export default Accordion;