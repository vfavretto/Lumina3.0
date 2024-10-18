import "../../assets/styles/register.css";

const Register = () => {
  return (
<main className="profile-page">
<div className="container">
<h1 className="titleProfile">Complete Seu Perfil</h1>
<form className='formRegister'>
<section className="representative-info">

<h2 className='titleProfileInner'>Cadastro Representante</h2>
<div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <input type="text" placeholder="Nome" />
    </div>
    </div>
  </div>

  <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <input type="email" placeholder="E-mail" />
    </div>
    </div>
  </div>

  <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <input type="tel" placeholder="Telefone" />    </div>
    <div className="col">
    <input type="text" placeholder="CPF" />    </div>
  </div>
  </div>

</section>
<section className="company-info">
<h2 className='titleProfileInner'>Cadastro Empresa</h2>
<div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <input type="text" placeholder="Nome" />    </div>
    <div className="col-md-3">
    <select>
<option value="">Empresa</option>
<option value="">Fornecedor</option>
<option value="">Ambos</option>
                {}
</select>  </div>
  </div>
  </div>

            <div class="container text-center">
              <div class="row align-items-start">
                <div class="col">
                  <input type="email" placeholder="E-mail Empresa" />
                </div>
                <div class="col">
                  <input type="url" placeholder="Site" />
                </div>
              </div>
            </div>

  <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <input type="email" placeholder="E-mail Empresa" />
    </div>
    <div className="col">
    <input type="url" placeholder="Site" />
    </div>
    </div>
  </div>

  <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <input type="tel" placeholder="Telefone" />
    </div>
    <div className="col">
    <input type="text" placeholder="CNPJ" />
    </div>
    </div>
  </div>

  <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <input type="text" placeholder="Endereço Comercial" />
    </div>
    <div className="col-md-3">
    <input type="text" placeholder="CEP" />
    </div>
    </div>
  </div>

  <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <input type="text" placeholder="Cidade" />
    </div>
    <div className="col">
    <input type="text" placeholder="UF" />
    </div>
    <div className="col">
    <input type="text" placeholder="País" />
    </div>
    </div>
  </div>
  <div className="container text-center">
<textarea placeholder="Descrição Empresa"></textarea>
</div>

</section>
 
          <section className="social-media">
<h2 className='titleProfileInner'>Redes Sociais</h2>

<div className="container text-center" id="formRedes">
  <div className="row align-items-start" >
    <div className="col">
    <input type="url" placeholder="LinkedIn" />
    </div>
    <div className="col">
    <input type="url" placeholder="Instagram"  />
    </div>
    <div className="col">
    <input type="url" placeholder="Facebook" />
    </div>
  </div>
  </div>



</section>
 <div className='saveButton'>

 <button type="submit" className="save-button">SALVAR</button>

 </div>
 
</form>
</div>
</main>
  );
};

export default Register;
