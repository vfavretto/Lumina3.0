import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import "../../assets/styles/login.css";

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { handleRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    try {
      await handleRegister(fullName, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro no registro:', error);
      alert("Erro no registro!");
    }
  };

  return (
    <div className="col zikaMargem">
      <div className="justify-content-end formsCadastro">
        <div className="formularioCadastro">
          <div className="textCadastro">
            <h3 className="d-flex text-white">CADASTRE-SE AQUI</h3>
          </div>
          <form onSubmit={onRegister}>
            <div className="col-md-12 inputCadastro">
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="🌐Nome Completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-8">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="✉️Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-8">
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="🔑Digite uma senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-8">
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="🗝️Confirme sua senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <button type="submit" className="btn btn-success col-sm-5">Cadastrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;