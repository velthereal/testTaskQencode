import './App.css';

import LogInForm from './components/LogInForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';

function App() {
  return (
    <div className="App">
		{/* <LogInForm /> */}
		{/* <ForgotPasswordForm /> */}
		<ResetPasswordForm />
	</div>
  );
}

export default App;
