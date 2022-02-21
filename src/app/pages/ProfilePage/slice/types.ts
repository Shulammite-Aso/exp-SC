/* --- STATE --- */
export interface ProfilePageState {
  loading?: boolean;
  passwordIsVerified: boolean;
  error?: any;
  user?: any;
  message: string;
  token: string;
}
