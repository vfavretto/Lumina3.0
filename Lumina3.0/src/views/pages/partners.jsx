import { useState } from 'react';
import '../../assets/styles/partners.css'

const Partners = () => {
    const [ativo, setAtivo] = useState('EMPRESA');
  
    const troca = (event) => {
      setAtivo(event.target.textContent);
    };
  
    return (
      <div className="body overflow-hidden">
        <div className="paginaParceiros">
          <div className="botoesPrincipais">
            <div className="arrumarBotoes">
              <button className={ativo === 'EMPRESA' ? 'ativo' : ''} onClick={troca}>
                EMPRESA
              </button>
              <button className={ativo === 'FORNECEDOR' ? 'ativo' : ''} onClick={troca}>
                FORNECEDOR
              </button>
            </div>
          </div>
  
          <div className="buscarEmpresa">
            <form role="search">
              <input
                type="search"
                size="15"
                placeholder="Buscar Empresas..."
                id="buscarEmpresa"
                name="buscarEmpresa"
                aria-label="Search"
              />
              <label htmlFor="buscarEmpresa">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                  <g clipPath="url(#clip0_8_9)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.0503 31.7597C26.8611 34.5503 22.6872 36.2416 18.1208 36.2416C8.11208 36.2416 0 28.1295 0 18.1208C0 8.11208 8.11208 0 18.1208 0C28.1295 0 36.2416 8.11208 36.2416 18.1208C36.2416 22.6872 34.5503 26.8671 31.7597 30.0503L44.6436 42.9342C45.1148 43.4054 45.1148 44.1725 44.6436 44.6436C44.1725 45.1148 43.4054 45.1148 42.9342 44.6436L30.0503 31.7597ZM33.8255 18.1208C33.8255 26.7946 26.7946 33.8255 18.1208 33.8255C9.44698 33.8255 2.41611 26.7946 2.41611 18.1208C2.41611 9.44698 9.44698 2.41611 18.1208 2.41611C26.7946 2.41611 33.8255 9.44698 33.8255 18.1208Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_9">
                      <rect width="45" height="45" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </label>
            </form>
          </div>
  
          <div className="empresas">
            <div className="d-flex flex-column">
              {/* Empresa 1 */}
              <div className="d-flex align-items-center itemParceiros">
                <div className="imgParceiros">
                  <img src="../../assets/images/empresa-1.png" className="rounded float-start" alt="Soluções MegaTech" />
                </div>
                <div className="textoParceiros">
                  <h2>Soluções MegaTech</h2>
                  <p>
                    A MegaTech é uma empresa fictícia especializada no desenvolvimento e
                    comercialização de tecnologias de ponta para diversas indústrias,
                    proporcionando soluções inovadoras e avançadas.
                  </p>
                </div>
                <div className="d-flex botoesParceiros">
                  <button><i className="fa fa-mouse-pointer" aria-hidden="true"></i></button>
                  <button><i className="fa fa-phone" aria-hidden="true"></i></button>
                </div>
              </div>
  
              {/* Empresa 2 */}
              <div className="d-flex align-items-center itemParceiros">
                <div className="imgParceiros">
                  <img src="../../assets/images/empresa-2.png" className="rounded float-start" alt="GreenHarbor Logistics" />
                </div>
                <div className="textoParceiros">
                  <h2>GreenHarbor Logistics</h2>
                  <p>
                    A GreenHarbor Logistics é uma empresa fictícia dedicada à gestão eficiente e
                    sustentável de cadeias de suprimentos. Especializada em logística verde, a
                    empresa busca integrar práticas ambientalmente responsáveis ​​em todas as suas
                    operações.
                  </p>
                </div>
                <div className="d-flex botoesParceiros">
                  <button><i className="fa fa-mouse-pointer" aria-hidden="true"></i></button>
                  <button><i className="fa fa-phone" aria-hidden="true"></i></button>
                </div>
              </div>
  
              {/* Empresa 3 */}
              <div className="d-flex align-items-center itemParceiros">
                <div className="imgParceiros">
                  <img src="../../assets/images/empresa-3.png" className="rounded float-start" alt="HealthyBite Food Services" />
                </div>
                <div className="textoParceiros">
                  <h2>HealthyBite Food Services</h2>
                  <p>
                    A HealthyBite Food Services é uma empresa fictícia dedicada a fornecer opções de
                    alimentação saudável e conveniente para seus clientes. Especializada em
                    refeições balanceadas e nutritivas, a empresa visa promover hábitos alimentares
                    saudáveis sem comprometer o sabor e a conveniência.
                  </p>
                </div>
                <div className="d-flex botoesParceiros">
                  <button><i className="fa fa-mouse-pointer" aria-hidden="true"></i></button>
                  <button><i className="fa fa-phone" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="trabalheConosco pb-5">
            <h2>Quer Trabalhar Conosco?</h2>
            <a href="/login"><button type="submit" className="botaoGeral">Cadastro</button></a>
          </div>
        </div>
      </div>
    );
  }
  

export default Partners