let React = require('react');
let mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin")();
let ThemeManager = new mui.Styles.ThemeManager();

let MDL = require('mdl-react');

module.exports = React.createClass({
  render: function() {
    let _this = this;
    return (
      <div style={this.props.style}>
        <h3>
          <span><strong>Questão: </strong>{this.props.questao.id}</span>
        </h3>
          <p>{this.props.questao.pergunta}</p>
          {["Nunca", "Raramente", "Algumas vezes", "Geralmente", "Sempre"].map(function(label, index) {
            return <MDL.Toggle type="radio" ref={label} text={label} name="option" value={index + 1} />
          })}
          
      </div>
    )
  }
});