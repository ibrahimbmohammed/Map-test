/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const RegisterUserSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  password: Yup.string().required('Password is required').min(8),
  confirmPassword: Yup.string().required('Provide password confirmation').min(8),
  hasTradingExperience: Yup.string(),
  amountToTradeWith: Yup.string()
    .typeError('Include currency of amount')
    .required('Amount to trade with is required'),
});

export default RegisterUserSchema;
