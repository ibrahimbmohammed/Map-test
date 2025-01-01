interface AccordionWithArrowIconProps {
  header: string;
  body: string;
}

function AccordionWithArrowIcon({ header, body }: AccordionWithArrowIconProps) {
  return (
    <div className="collapse bg-white collapse-arrow shadow-md">
      <input type="radio" name="my-accordion-2" checked />
      <div className="collapse-title text-lg md:text-xl font-medium">{header}</div>
      <div className="collapse-content">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default AccordionWithArrowIcon;
