let React = require('react');

let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;

let PerfilEmpreendedor = require('./perfil-empreendedor');
let Relatorio = require('./relatorio');

React.render((
  <Router>
    <Route path="/" component={PerfilEmpreendedor} />
    <Route path="/relatorio" component={Relatorio} />
  </Router>
), document.body);