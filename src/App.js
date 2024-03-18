import './App.css';

import LogInForm from './components/LogInForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';

import { Routes, Route } from "react-router";

import { FORGOT_PASSWORD_PATH, LOGIN_PATH, RESET_PASSOWRD_PATH } from './constants/pathNames';

function App() {
  return (
    <div>
		<Routes>
			<Route
				path={LOGIN_PATH}
				element={<LogInForm />}
			/>
			<Route
				path={FORGOT_PASSWORD_PATH}
				element={<ForgotPasswordForm />}
			/>
			<Route
				path={RESET_PASSOWRD_PATH}
				element={<ResetPasswordForm />}
			/>
        </Routes>
	</div>
  );
}

export default App;
