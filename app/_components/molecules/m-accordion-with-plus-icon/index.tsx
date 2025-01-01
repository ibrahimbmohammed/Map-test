interface AccordionWithPlusIconProps {
  header: string;
  body: string;
}

function AccordionWithPlusIcon({ header, body }: AccordionWithPlusIconProps) {
  return (
    <div className="collapse collapse-plus bg-white shadow-md">
      <input type="radio" name="my-accordion-3" checked />
      <div className="collapse-title text-lg md:text-xl font-medium">{header}</div>
      <div className="collapse-content">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default AccordionWithPlusIcon;
