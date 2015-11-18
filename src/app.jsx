let React = require('react');

let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;

let PerfilEmpreendedor = require('./perfil-empreendedor');
let Relatorio = require('./relatorio');
let Resumo = require('./resumo');

React.render((
  <Router>
    <Route path="/" component={PerfilEmpreendedor} />
    <Route path="/relatorio" component={Relatorio} />
    <Route path="/view" component={Resumo} />
  </Router>
), document.body);