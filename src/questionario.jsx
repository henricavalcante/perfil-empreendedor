let React = require('react');
let mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin")();
let ThemeManager = new mui.Styles.ThemeManager();

let Dialog = mui.Dialog;
let FlatButton = mui.FlatButton;
let Paper = mui.Paper;
let List = mui.List;

let Pergunta = require('./pergunta');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      questao: 0,
      fim: false,
      competencias: this.props.competencias,
      tabsValue: 'a',
      ans:[]
    }

  },

  prosseguir: function(e) {
    let ans = React.findDOMNode(this.refs.current).querySelector('input:checked');
    if(ans){
      this.state.ans.push(ans.value);
      if(this.state.questao < this.props.questoes.length - 1) {
        this.setState({questao: ++this.state.questao}, function() {
          // React.findDOMNode(this.refs.current).reset();
          // React.findDOMNode(this.refs.current).querySelector(".is-checked").classList.remove("is-checked");
        });
      }
      else {
        this.setState({fim: true}, this.props.parent.Finalize);
      }
      return;
    }
    this.refs.modalError.show();
  },

  modalDismiss: function(){
    this.refs.modalError.dismiss();
  },


  handleTabsChange: function(value, e, tab){
    console.log("porra");
    this.setState({tabsValue: value});
  },

  render: function() {
    let _this = this;
    return (
        <section>
        
        <Dialog 
              ref='modalError'
              title='Atenção!'
              actions={[<FlatButton
                  hoverColor='rgba(0,49,63,0.2)'
                  rippleColor='rgba(0,49,63,0.4)'
                  style={{color: '#00313f'}}
                  label='Ok! ENTENDI'
                  primary={true}
                  onTouchTap={this.modalDismiss} onClick={this.modalDismiss} />]}
              actionFocus='submit' modal={true}>
              Responda a questão para prosseguir
          </Dialog>
          <form name={'questionario'} ref={'current'}>
            <Paper style={{background: '#ededed', margin: '2vw 7vw', padding: '5vw', boxShadow: 'none'}}>
              <List style={{background: '#ededed'}}>
                  <Pergunta questao={this.props.questoes[this.state.questao]} />
              </List>
            </Paper>
            <div style={{width:'100%', textAlign: 'right'}}>
              <FlatButton
                  hoverColor='rgba(0,49,63,0.2)'
                  rippleColor='rgba(0,49,63,0.4)'
                  style={{color: '#00313f', marginRight: '7vw', right: 0}} label='Prosseguir' onClick={this.state.fim ? null :this.prosseguir} />
            </div>
          </form>
        </section>
      )

  }

})