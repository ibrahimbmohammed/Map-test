import Label, { LabelProps } from '@atoms/a-label';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import YesNoSelectInput, { YesNoSelectInputProps } from '../../atoms/a-yes-no-select-input';

/**
 * Documentaion for a YesNoSelectLabeledInput
 * important @property {string} variants - The variant of the YesNoSelectLabeledInput component (e.g., "primary")
 * @example
 * Example usage of YesNoSelectLabeledInput component
 * <YesNoSelectLabeledInput variants="primary" label="Email" htmlFor="email" />
 * Can accept properties of both label and input
 */

const labeledInputVariants = cva('', {
  variants: {
    variants: {
      default: 'flex flex-col',
      auth: 'relative',
      leftAlign: 'w-full flex flex-row-reverse justify-end  items-center ',
    },
  },
  defaultVariants: {
    variants: 'default',
  },
});
interface LabelClassName {
  labelClassContainerName?: string;
  labelTextClassName?: string;
}
type YesNoSelectLabelInputProps = YesNoSelectInputProps &
  LabelProps &
  LabelClassName &
  VariantProps<typeof labeledInputVariants>;

const YesNoSelectLabeledInput = ({ ...props }: YesNoSelectLabelInputProps) => {
  const { variants, className, labelTextClassName, label, htmlFor, error, ...inputProps } = props;
  return (
    <div>
      <div className={twMerge(labeledInputVariants({ variants, className }))}>
        <Label
          htmlFor={htmlFor}
          label={label}
          className={`${labelTextClassName} ${
            labeledInputVariants({ variants })?.includes('relative') ? 'absolute ' : ''
          }`}
        />
        <YesNoSelectInput {...inputProps} />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default YesNoSelectLabeledInput;
