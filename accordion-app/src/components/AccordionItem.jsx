function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <button onClick={onClick} className="accordion-question">
        <span>{item.question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className="accordion-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;