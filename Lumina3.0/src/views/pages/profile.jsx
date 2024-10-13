import "../../assets/styles/profile.css";
import perfilFoto from "../../assets/images/Perfil/GM_oficina_foto.jpg";
import perfilMsgimg from "../../assets/images/Perfil/mensagensPerfil.png";
import foto1 from "../../assets/images/Perfil/foto1.png";
import foto2 from "../../assets/images/Perfil/foto2.png";

const Profile = () => {
  return (
    <body>
      <main>
        <div id="perfil">
          <div className="container text-left">
            <div className="row">
              <div className="col-md-4" id="perfilImgName">
                <figure>
                  <img
                    className="perfilFoto"
                    src={perfilFoto}
                    alt="Imagem de perfil"
                  />
                  <h5 className="perfilNome">Grupo Automec</h5>
                  <h5 className="perfilCargo">Lavínia Nogueira</h5>
                  <h5 className="perfilEmpresa">Gerente Geral</h5>
                </figure>
              </div>
              <div className="col-md-8 p-0" id="perfilTxt">
                <div id="perfilTxtSobre">
                  <p>
                    Somos o Grupo Automec. Aqui, vivemos a sustentabilidade em
                    cada ação. Desenvolvemos soluções ecoamigáveis, integrando
                    práticas sustentáveis em todas as áreas. Do chão de fábrica
                    à gestão, construímos um futuro verde. Junte-se a nós nesta
                    jornada por um ambiente de negócios mais consciente. Vamos
                    fazer a diferença! 🌿🌐 #Sustentabilidade #GrupoAutomec
                  </p>
                </div>
                <div className="perfilMensagens">
                  <figure>
                    <img className="perfilMsgimg" src={perfilMsgimg} />
                  </figure>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    id="perfilMsg"
                  >
                    <div className="d-flex justify-content-start">
                      <h1>Mensagens</h1>
                    </div>
                    <div
                      id="sininhoPerfil"
                      className="d-flex justify-content-end"
                    >
                      <i className="fa fa-bell" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    id="perfilFotinha"
                  >
                    <div id="perfilFoto">
                      <img src={foto1} alt="Foto de perfil Jardinagem" />
                    </div>
                    <div id="nomepessoa">
                      <h2>Casa Grande Jadinagem</h2>
                      <p>
                        Oi Lívia, sou um empresário comprometido com a
                        sustentabilidade. Gostaria de explorar oportunidades de
                        parceria para impulsionarmos juntos práticas mais
                        ecoamigáveis. Estou à disposição para uma conversa.
                        Podemos agendar?
                      </p>
                    </div>

                    <div id="bolinha">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    id="perfilFotinha"
                  >
                    <div id="perfilFoto">
                      <img src={foto2} alt="Foto de perfil Reciclagem" />
                    </div>
                    <div id="nomepessoa">
                      <h2>Novo Vale Reciclagem</h2>
                      <p>
                        Sou Marcio, empresário comprometido com a
                        sustentabilidade. Estou interessado em explorar
                        parcerias para impulsionar práticas ecoamigáveis em
                        nossas operações. Podemos agendar uma conversa rápida?
                      </p>
                    </div>

                    <div id="bolinha">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default Profile;
