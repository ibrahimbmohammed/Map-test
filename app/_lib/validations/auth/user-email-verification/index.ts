/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const UserEmailVerificationSchema = Yup.object({
  email: Yup.string().email().required(),
  userAgreement: Yup.boolean(),
});

export default UserEmailVerificationSchema;
