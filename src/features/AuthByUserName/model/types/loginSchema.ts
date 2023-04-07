export interface LoginSchema {
  userName: string;
  password: string;
  error?: string;
  isLoading: boolean;
}
