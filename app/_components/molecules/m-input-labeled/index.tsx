import Input, { InputProps } from '@atoms/a-input';
import Label, { LabelProps } from '@atoms/a-label';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

/**
 * Documentaion for a LabeledInput
 * important @property {string} variants - The variant of the LabeledInput component (e.g., "primary")
 * @example
 * Example usage of LabeledInput component
 * <LabeledInput variants="primary" label="Email" htmlFor="email" />
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
type LabelInputProps = InputProps &
  LabelProps &
  LabelClassName &
  VariantProps<typeof labeledInputVariants>;

const LabeledInput = ({ ...props }: LabelInputProps) => {
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
        <Input {...inputProps} />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default LabeledInput;
