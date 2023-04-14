export interface LoginSchema {
  userName: string;
  password: string;
  error?: string;
  // error?: string | undefined;
  // error: string | undefined;
  isLoading: boolean;
}
