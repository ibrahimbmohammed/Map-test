/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const PasswordResetEmailVerificationSchema = Yup.object({
  email: Yup.string().email().required(),
});

export default PasswordResetEmailVerificationSchema;
