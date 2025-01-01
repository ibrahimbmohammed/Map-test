export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
}
const Label = ({ className, label, ...props }: LabelProps) => {
  return (
    <label htmlFor={props.htmlFor} className={className} {...props}>
      {label}
    </label>
  );
};

export default Label;
