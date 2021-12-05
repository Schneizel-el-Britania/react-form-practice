import * as Yup from 'yup';

const EMAIL_SCHEMA = Yup.string().email('Enter correct email').required();
const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[a-z])(?=.*?[0-9]).{4,32}$/, 'Enter correct password').required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
})