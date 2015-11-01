let React = require('react');
let mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin")();
let ThemeManager = new mui.Styles.ThemeManager();

let queryString = require('query-string');
let uniqid = require('uniqid');

module.exports = React.createClass({

  getInitialState: function(){
    let urlData = queryString.parse(location.search)
    return {
      nome: urlData.nome,
      display: 'table',
      key: urlData.key||uniqid()
    }
  },

  hide: function(e){
    e.preventDefault();
    let _nome = React.findDOMNode(this.refs.nome).value;
    if(_nome){
      this.setState({display:'none', nome: _nome}, function() {
        this.props.parent.showQuestionario();
      });    
    }    
  },

  cancelSubmit: function(e) {
    e.preventDefault();
  },
  
  render: function(){
    
    return (
      <div className='container-modal'>
        <div className='middle-modal'>
          <div className='center-modal' style={{}}>
            <div>
              <h3>Seja Bem Vindo(a) ao...</h3>
              <div style={{textAlign: 'center'}}>
                <h1>PERFIL EMPREENDEDOR</h1>
                <h3 className="roboto" style={{textAlign: 'center'}}>Uma ferramenta que visa realiza uma análise do seu perfil empreendedor através de questinamentos</h3>
              </div>
            </div>
            <div>
              <form onSubmit={this.cancelSubmit}>
                <label>
                  <div className="input-modal" style={{margin: '20px 0'}}>
                    <input ref={'nome'} placeholder={"Qual seu nome?"} value={this.state.nome} ></input>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <a onClick={this.hide}>CONTINUAR</a>
                  </div>
                </label>
              </form>
            </div>
            
          </div>
        </div>
        <div className='img-modal'>
          <img src='./src/img/logo.svg'/>
        </div>
      </div>
      )
  }
});