import './login.scss';
import { useState } from 'react';

function Login() {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async()=> {
        let result = await fetch('http://localhost:3000/api/auth/login', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
    }


    return (
      <div className="loginPage">
        <p><label>Identifiant :</label> <input type="text" name="pseudo" id="pseudo" onChange={(e) => setPseudo(e.target.value)} value={pseudo} /></p>
        <p><label>Mot de passe :</label> <input type="password" name="password" id="password"  onChange={(e) => setPassword(e.target.value)} value={password}/></p>
<button onClick={handleLogin} className="appButton" type="button">Login</button>
    </div>
  );
}

export default Login;