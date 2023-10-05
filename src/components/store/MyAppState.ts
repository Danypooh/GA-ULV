import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/LoginState";

export interface MyAppState {
  loading: LoadingState;
  login: LoginState;
}