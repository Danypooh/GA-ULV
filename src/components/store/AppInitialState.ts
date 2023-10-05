import { MyAppState } from "./MyAppState";

export const AppInitialState: MyAppState = {
  loading: {
    show: false,
  },
  login: {
    error: null,
    isRecoveringPassword: false,
    isRecoveredPassword: false,
    isLoggingIn: false,
    isLoggedIn: false,
  }
  
}