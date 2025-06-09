export interface User {
  _id: string;
  email: string;
  fullName: string;
  profilePic: string;
  createdAt: string; // or Date, depending on how you handle it
  updatedAt: string; // or Date
}

export interface AuthStore {
  authUser: User | null;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  checkAuth: () => Promise<void>; //  function type
  signUp: (data: {fullName: string, email: string, password: string}) => Promise<void>
  logout: () => Promise<void>
  login: (data: {email: string, password: string}) => Promise<void>
  updateProfile: (data: {profilePic?: string}) => Promise<void>
  
}