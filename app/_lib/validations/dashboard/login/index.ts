/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const LoginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});

export default LoginSchema;
