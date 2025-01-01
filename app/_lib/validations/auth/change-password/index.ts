/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const ChangePasswordSchema = Yup.object({
  password: Yup.string().required('Password is required').min(8),
  confirmPassword: Yup.string().required('Provide password confirmation').min(8),
});

export default ChangePasswordSchema;
