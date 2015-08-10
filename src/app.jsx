let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let RadioButtonGroup = mui.RadioButtonGroup;
let RadioButton = mui.RadioButton;
let CardHeader = mui.CardReader;
let CardText = mui.CardText;
let CardMedia = mui.CardMedia;
let CardTitle = mui.CardTitle;
let CardActions = mui.CardActions;
let Card = mui.Card;
let Avatar = mui.Avater;
let List = mui.List;
let ListItem = mui.ListItem;
let ListDivider = mui.ListDivider;
let FlatButton = mui.FlatButton;
let Colors = mui.Styles.Colors;
let AppCanvas = mui.AppCanvas;
let Paper = mui.Paper;
let questoes = require('./questoes');

let PerfilEmpreendedor = React.createClass({
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
  render: function() {
    return (
      <AppCanvas>
      <Card>
      <CardMedia overlay={
        <CardTitle
          title="Perfil do Empreendedor"
          subtitle="Qual o seu perfil de empreendedor? Descubra agora mesmo."/>
      }>
        <img src="http://lorempixel.com/600/337/business/"/>
      </CardMedia>
      <Paper style={{margin: '5vw', padding: '5vw'}}>
        <H3> Apresentação </H3>
        <p> Esta ferramenta visa realizar uma análise do seu perfil empreendedor através de questionamentos, resultando em um autoconhecimento de sua vocação empreendedora, seja empregado ou dono do próprio negócio.</p>
      </Paper>

      <Paper style={{margin: '5vw', padding: '5vw'}}>
        <H3> Instruções </H3>
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
      </Paper>

      <Paper style={{margin: '5vw', padding: '5vw'}}>
      <H3>Questionário</H3>
      <List>
      {
        this.props.questoes.map(function(questao) {
          return ([<Pergunta questao={questao}/>,
          <ListDivider/>])
        })
      }
      </List>
      <FlatButton label="Finalizar"/>
      </Paper>
      </Card>
      </AppCanvas>
    )}
});

let H3= React.createClass({
  render: function() {
    return <h3 style={{fontSize: '20px',
        lineHeight: '28px',
        paddingBottom: '22px',
        letterSpacing: 0,
        fontWeight: 500,
        boxSizing: 'border-box'}}>{this.props.children}</h3>
  }
});

let Pergunta = React.createClass({
  render: function() {
    return <ListItem 
      leftIcon={<span>{this.props.questao.id}</span>}
      disabled='true' >
        <p>{this.props.questao.pergunta}</p>
        <RadioButtonGroup name={this.props.questao.id}>
        {["Nunca", "Raramente", "Algumas vezes", "Geralmente", "Sempre"].map(function(index) {
          return <RadioButton value={{index}}
          label={index}/>
        })}
        </RadioButtonGroup>
        </ListItem>
  }
});

React.render(<PerfilEmpreendedor questoes={questoes} />, document.body);
