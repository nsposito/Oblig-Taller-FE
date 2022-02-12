import { useState } from "react";
import 'bootstrap-css-only';
import Login from "../Login";
import Registro from "../Registro"

function App() {

  const [userLogged, setUserLogged] = useState(null);
  const [userRegister, setUserRegister] = useState(false)

  const onUserLogged = (user) => {
    setUserLogged(user)
  }

  const onUserRegister = (isRegistering) => {
    setUserRegister(isRegistering)
  }

  return (
    <div className="App">

      {userRegister ? <Registro onUserLogged={onUserLogged} onUserRegister={onUserRegister} /> : !userLogged ? <Login onUserLogged={onUserLogged} onUserRegister={onUserRegister} /> : console.log(`dashboard`)}
      
      {/* Registro */}
      {/* Header */}
      
      
    </div>
  );
}

export default App;
