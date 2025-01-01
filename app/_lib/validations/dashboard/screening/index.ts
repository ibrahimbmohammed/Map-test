/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const ScreeningSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  phone_number: Yup.string().required('Phone number is required'),
  schedule_date: Yup.string().required('Date is required'),
  schedule_time: Yup.string().required('Time is required'),
  country: Yup.string().required('Country is required'),
  trading_capital_amount: Yup.string().required('Trading capital amount is required'),
  has_trading_experience: Yup.string().required('This is required'),
  previously_used_forex_broker: Yup.string(),
});

export default ScreeningSchema;
