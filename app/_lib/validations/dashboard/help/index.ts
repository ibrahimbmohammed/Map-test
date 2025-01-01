/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const HelpSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().required().min(20),
});

export default HelpSchema;
