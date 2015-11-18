let React = require('react');
let mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin")();
let ThemeManager = new mui.Styles.ThemeManager();

let queryString = require('query-string');
let uniqid = require('uniqid');
let questoes = require('./questoes');
let comp_mask = require('./competencias_mask');
let FireBase = require('firebase');
let myFireBaseRef = new FireBase('https://torrid-heat-308.firebaseio.com/perfil-empreendedor/data');

let FlatButton = mui.FlatButton;
let Colors = mui.Styles.Colors;
let AppCanvas = mui.AppCanvas;
let Dialog = mui.Dialog;
let AppBar = mui.AppBar;


let Resumo = require('./resumo');
let Questionario = require('./questionario');
let Welcome = require('./welcome');


module.exports = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  modalDismiss: function(){
    this.refs.modalInstricoes.dismiss();
  },

  instrucoesShow: function(){
    this.refs.modalInstricoes.show();
  },

  getInitialState: function(){
    let urlData = queryString.parse(location.search);
    return {
      msgError: "",
      display:"welcome"
    }
  },

  showQuestionario: function() {
    this.setState({display:"questionario", nome: this.refs.welcome.state.nome, key: this.refs.welcome.state.key});
  },

  Finalize: function(){

    let toDb = {
      nome: this.state.nome,
      key: this.state.key,
      ans: this.refs.questionario.state.ans, 
    }
     
    myFireBaseRef.child(toDb['key']).set(toDb);

    this.setState({display:"relatorio", ans: this.refs.questionario.state.ans }, function() {
      window.scrollTo(0, 0);
    });

  },

  render: function() {

    let customActions = [
      <FlatButton
        hoverColor="rgba(0,49,63,0.2)"
        rippleColor="rgba(0,49,63,0.4)"
        style={{color: '#00313f'}}
        label="ENTENDIDO"
        primary={true}
        onTouchTap={this.modalDismiss} onClick={this.modalDismiss} />
    ];
    let instru = this.state.display == "questionario" ? <FlatButton rippleColor="rgba(255,255,255,0.5)"
                    style={{color: '#fff'}} label="instruções" onClick={this.instrucoesShow} /> : false; 
    return (
      <AppCanvas>
      <section>

      {
        (() => { if(this.state.display == "welcome") {
            return (
              <Welcome ref={"welcome"} parent={this}></Welcome>
            )
          }
        })()
      }
        <AppBar title={'Olá, '+this.state.nome}
                iconElementLeft={<object data={"./src/img/wiSymbol.svg"} type="image/svg+xml" width="45" height="45" />}
                iconElementRight={instru} 
                  style={{background: '#00313f'}}
                  className="menu"/>
      {
        (() => { if(this.state.display == "questionario") {
            return (
              <section>
               <Dialog 
                  style={{overflowY: "scroll"}}
                  ref="modalInstricoes"
                  title="Instruções"
                  actions={customActions}
                  actionFocus="submit" modal={true} openImmediately={true}>
                  <p>O principal objetivo deste questionário, é ajudá-lo a intensificar o seu autoconhecimento.  Não há respostas certas ou erradas. Mas elas, em seu conjunto apontam tendências que podem contribuir para seu aperfeiçoamento como pessoa e profissional. Ninguém é polivalente em todos os campos do conhecimento e do trabalho.</p>
                  <p>Responda por isso as perguntas da forma crítica e sincera.</p>
                  <p>Leia, portanto, as 55 questões e faça a escolha da opção de 1 a 5 que mais se aplica a você de acordo com os conceitos da tabela abaixo, e marque um “X” no número correspondente à pontuação escolhida, nas colunas à direita de cada uma das afirmações.</p>
                  <ol>
                    <li>Nunca</li>
                    <li>Raramente</li>
                    <li>Algumas vezes</li>
                    <li>Geralmente</li>
                    <li>Sempre</li>
                  </ol>
                  <p>Mesmo que as afirmativas pareçam similares, elas não são réplicas uma das outras, pois procuram sempre focalizar algum aspecto diferente das demais.</p>
                </Dialog>
                  <Questionario ref={"questionario"} parent={this} questoes={questoes} />
                
              </section>
            )
          }
        })()
      }

      {
        (() => { if(this.state.display == "relatorio") {
            return (
              <section>
              
              <Resumo username={this.state.nome.toUpperCase()} ans={this.state.ans} competencias={comp_mask}/>
              </section>
            )
          }
        })()
      }
      </section>
      </AppCanvas>
    )}
});