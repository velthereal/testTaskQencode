import './App.css';

import LogInForm from './components/LogInForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';

import { Routes, Route } from "react-router";
import { createContext, useState, useContext } from 'react';

import { FORGOT_PASSWORD_PATH, LOGIN_PATH, RESET_PASSOWRD_PATH } from './constants/pathNames';

const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext);

function App() {
	const [baseEmail, setBaseEmail] = useState(null);
  return (
    <div>
		<EmailContext.Provider value={{ baseEmail, setBaseEmail }}>
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
		</EmailContext.Provider>
	</div>
  );
}

export default App;
