import React, { useRef } from "react";
import login from '../../api/services/login'

const Login = ({ onUserLogged, onUserRegister }) => {
	const inputUsernameRef = useRef();
	const inputPasswordRef = useRef();

	const onClickLogin = async (e) => {
		e.preventDefault();

    const username = inputUsernameRef.current.value
    const password = inputPasswordRef.current.value

    if( isUsernameValid && isPasswordValid) {
		const body = {
			usuario: username,
			password: password
		}
		
		try {
			const data = await login.onLogin(body)
			//TODO segun la respuesta, success o error
			onUserLogged(data)			
		} catch {

		}
    }
    
	};

	const onClickRegister = () => {
		onUserRegister(true)
	}

  const isUsernameValid = () => {
    //TODO

    return true
  };

	const isPasswordValid = () => {
    //TODO

    return true
  };

	

	return (
		<section className="d-flex flex-md justify-content-center login">
			<div className="card">
				<h2>Sign in</h2>
				<section className="card-body">
					<form>
						<label htmlFor="inputEmail">Username</label>
						<br />
						<input
							type="email"
							name="username"
							className="form-control"
							ref={inputUsernameRef}
						/>
						<br />
						<label htmlFor="inputPassword">Password</label>
						<br />
						<input
							type="password"
							name="password"
							className="form-control"
							ref={inputPasswordRef}
						/>
						<br />
						<button className="btn btn-primary" onClick={onClickLogin}>
							Login
						</button>
						<button className="btn btn-primary" onClick={onClickRegister}>
							Registrarse
						</button>
						<br />
						<br />
					</form>
				</section>
			</div>
		</section>
	);
};

export default Login;
