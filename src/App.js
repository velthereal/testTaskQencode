import './App.css';

import LogInForm from './components/LogInForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';

import { Routes, Route } from "react-router";

import { FORGOT_PASSWORD_PATH } from './constants/pathNames';

function App() {
  return (
    <div className="App">
		<LogInForm />
		{/* <ResetPasswordForm /> */}
		<Routes>
          <Route
            path={FORGOT_PASSWORD_PATH}
            element={<ForgotPasswordForm />}
          />
        </Routes>
	</div>
  );
}

export default App;
