/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const LoginSchema = Yup.object({
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().required('Password is required').min(8),
});

export default LoginSchema;
