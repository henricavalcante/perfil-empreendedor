let React = require('react');
let mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin")();
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
let Table = mui.Table;
let TableHeader = mui.TableHeader;
let TableHeaderColumn = mui.TableHeaderColumn;
let TableRow = mui.TableRow;
let TableRowColumn = mui.TableRowColumn;
let TableBody = mui.TableBody;
let TableFooter = mui.TableFooter;
let Dialog = mui.Dialog;
let TextField = mui.TextField;
let AppBar = mui.AppBar;
let DropDownMenu = mui.DropDownMenu;

let Highcharts = require('react-highcharts/more');

let Tab = mui.Tab;
let Tabs = mui.Tabs;

let BarChart = require("react-chartjs").Bar;

let questoes = require('./questoes');
let comp_mask = require('./competencias_mask');

let FireBase = require('firebase');
let myFireBaseRef = new FireBase('https://brilliant-heat-9005.firebaseio.com');

let queryString = require('query-string');
let uniqid = require('uniqid');

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

    console.log("Final")
    let toDb = {
      nome: this.state.nome,
      key: this.state.key,
      ans: this.refs.questionario.state.ans, 
    }
     
    myFireBaseRef.push(toDb);

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
                iconElementLeft={<img src={"./src/img/wiSymbol.svg"} width={45} style={{margin: '0 20px'}} />}
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
              
              <Relatorio username={this.state.nome.toUpperCase()} ans={this.state.ans} competencias={comp_mask}/>
              </section>
            )
          }
        })()
      }
      </section>
      </AppCanvas>
    )}
});

let Welcome = React.createClass({

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

let Questionario = React.createClass({

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
          this.refs.current.refs.opt.clearValue();
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
          <form name={'questionario'}>
            <Paper style={{background: '#ededed', margin: '2vw 7vw', padding: '5vw', boxShadow: 'none'}}>
              <List style={{background: '#ededed'}}>
                  <Pergunta ref={'current'} questao={this.props.questoes[this.state.questao]} />
              </List>
            </Paper>
            <div style={{width:'100%', textAlign: 'right'}}>
              <FlatButton
                  hoverColor='rgba(0,49,63,0.2)'
                  rippleColor='rgba(0,49,63,0.4)'
                  style={{color: '#00313f',marginRight: '7vw', right: 0}} label='Prosseguir' onClick={this.state.fim ? null :this.prosseguir} />
            </div>
          </form>
        </section>
      )

  }

})

let Pergunta = React.createClass({
  render: function() {
    let _this = this;
    return (
      <div style={this.props.style}>
        <h3>
          <span><strong>Questão: </strong>{this.props.questao.id}</span>
        </h3>
          <p>{this.props.questao.pergunta}</p>
          <RadioButtonGroup ref={"opt"} name={"questao_"+this.props.questao.id}>
          {["Nunca", "Raramente", "Algumas vezes", "Geralmente", "Sempre"].map(function(label, index) {
            return <RadioButton ref={label} value={index + 1} label={label}/>
          })}
          </RadioButtonGroup>
      </div>
    )
  }
});

let Relatorio = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState: function(){
    return {
      competencias: this.props.competencias,
      tabsValue: 'a'
    }  
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
   
  },

  subTotal1: 0,
  subTotal2: 0,
  subTotal3: 0,
  caracteristicasData: {
    name:"a",
    colorByPoint: true,
    data: []
  },
  informacoesData: {
    name: "Brands",
    colorByPoint: true,
    data: []
  },

  render: function() {
    let _this = this;
    let qIndex;
    let value = 0;
    let factor = 0;
    let competencias = this.state.competencias;
    for(var m in competencias.fatMask){
      qIndex = competencias.fatMask[m];
                
      value = Math.sign(qIndex)*(this.props.ans[Math.abs(qIndex)-1].value);
                              
      factor += value;
    }
      
    factor = competencias.correcao(factor);
                
    for(var competencia in competencias.competencias){

      competencias.competencias[competencia].value = 0;
      
      for(var m in competencias.competencias[competencia].mask){
        qIndex = competencias.competencias[competencia].mask[m];
                                               
        value = Math.sign(qIndex)*(this.props.ans[Math.abs(qIndex)-1]);
                                                                 
        competencias.competencias[competencia].value += value;
      }

      competencias.competencias[competencia].value += 6;
      competencias.competencias[competencia].value -= factor;
      competencias.competencias[competencia].value *= 100/25;
    }

    return (
        <AppCanvas>

            <Tabs onChange={ this.handleTabsChange }>
              <Tab label="Características" value="a">
                <Paper style={{margin: '5vw', padding: '5vw', overflow:'auto'}}>
                  <hr />

                  <div className="caracteristicas-table">
                  <table style={{width:'100%'}}>
                    <thead>
                      <tr>
                        <th style={{width:'80%'}}>Características empreendedoras pessoais</th>
                        <th style={{width:'10%'}}>OBITIDA</th>
                        <th style={{width:'10%'}}>MÁXIMA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Realização</th>
                      </tr>
                      {
                        competencias.competencias.slice(0,5).map(function(data){
                          _this.subTotal1 += data.value;
                          _this.caracteristicasData.data.push({ y: data.value, name: data.label });
                          _this.informacoesData.data.push({ y: data.value, name: data.label });
                          return (
                            <tr>
                              <td>{data.label}</td>
                              <td style={{'text-align':'center'}}>{data.value}</td>
                              <td style={{'text-align':'center'}}>100</td>
                            </tr>
                          )
                        })
                      }
                      <tr>
                        <th style={{'text-align':'left'}}>Sub Total I</th>
                        <th>{this.subTotal1}</th>
                        <th>500</th>
                      </tr>
                      <tr></tr>
                      <tr>
                        <th>Planejamento</th>
                      </tr>
                      {
                        competencias.competencias.slice(5,8).map(function(data){
                          _this.subTotal2 += data.value;
                          _this.caracteristicasData.data.push({ y: data.value, name: data.label });
                          _this.informacoesData.data.push({ y: data.value, name: data.label });
                          return (
                            <tr>
                              <td>{data.label}</td>
                              <td style={{'text-align':'center'}}>{data.value}</td>
                              <td style={{'text-align':'center'}}>100</td>
                            </tr>
                          )
                        })
                      }
                      <tr>
                        <th style={{'text-align':'left'}}>Sub Total II</th>
                        <th>{this.subTotal2}</th>
                        <th>300</th>
                      </tr>
                      <tr></tr>
                      <tr>
                        <th>Poder</th>
                      </tr>
                      {
                        competencias.competencias.slice(8,10).map(function(data){
                          _this.subTotal3 += data.value;
                          _this.caracteristicasData.data.push({ y: data.value, name: data.label });
                          _this.informacoesData.data.push({ y: data.value, name: data.label });
                          return (
                            <tr>
                              <td>{data.label}</td>
                              <td style={{'text-align':'center'}}>{data.value}</td>
                              <td style={{'text-align':'center'}}>100</td>
                            </tr>
                          )
                        })
                      }
                      <tr>
                        <th style={{'text-align':'left'}}>Sub Total III</th>
                        <th>{this.subTotal3}</th>
                        <th>200</th>
                      </tr>
                                                                                  
                    </tbody>

                  </table>
                  </div>

                  <div className="caracteristicas-totais-table">
                  <table style={{width:'100%'}}>
                    <thead>
                      <tr>
                        <th style={{width:'70%'}}>CARACTERÍSTICAS</th>
                        <th style={{width:'10%'}}>OBTIDA</th>
                        <th style={{width:'10%'}}>MÁXIMA</th>
                        <th style={{width:'10%'}}>%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Realização</td>
                        <td style={{'text-align':'center'}}>{this.subTotal1}</td>
                        <td style={{'text-align':'center'}}>500</td>
                        <td style={{'text-align':'center'}}>{Math.round(100*this.subTotal1/500)}</td>
                      </tr>
                      <tr>
                        <td style={{'text-align':'left'}}>Planejamento</td>
                        <td style={{'text-align':'center'}}>{this.subTotal2}</td>
                        <td style={{'text-align':'center'}}>300</td>
                        <td style={{'text-align':'center'}}>{Math.round(100*this.subTotal2/300)}</td>
                      </tr>
                      <tr>
                        <td style={{'text-align':'left'}}>Poder</td>
                        <td style={{'text-align':'center'}}>{this.subTotal3}</td>
                        <td style={{'text-align':'center'}}>200</td>
                        <td style={{'text-align':'center'}}>{Math.round(100*this.subTotal3/200)}</td>
                      </tr>
                      <tr>
                        <th style={{'text-align':'left'}}>Total</th>
                        <th style={{'text-align':'center'}}>{this.subTotal1+this.subTotal2+this.subTotal3}</th>
                        <th style={{'text-align':'center'}}>1000</th>
                        <th style={{'text-align':'center'}}>{Math.round(100*(this.subTotal1+this.subTotal2+this.subTotal3)/1000)}</th>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </Paper>
              </Tab>

               <Tab label="Gráfico Detalhado" value="b" >
                {/*REALIZAÇÃO*/}
                <Paper style={{margin: '5vw', padding: '5vw'}}>
                  <Highcharts config = {
                    {
                      chart: {
                        type: 'column'
                      },
                      title: {
                        text: 'GRÁFICO CARACTERÍSTICA REALIZAÇÃO'
                      },
                      xAxis: {
                        type: 'category',
                          labels: {
                            autoRotation: [-90]
                          }
                      },
                      yAxis: {                        
                        labels: {
                          enabled: false
                        },
                        title: {
                          text: false
                        }

                      },
                      legend: {
                          enabled: false
                      },
                      plotOptions: {
                        series: {
                          borderWidth: 0,
                          dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                          }
                        }
                      },
                      tooltip: {
                          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}%</b> of total<br/>'
                      },
                      series: [this.informacoesData]
                    }
                  }></Highcharts>
                </Paper>
              </Tab>

              <Tab label="Gráfico Total" value="c">
               {/*TOTAL*/}
                <Paper style={{margin: '5vw', padding: '5vw'}}>
                  <Highcharts config = {
                    {
                      chart: {
                        type: 'column'
                      },
                      title: {
                        text: 'GRÁFICO CARACTERÍSTICA TOTAL'
                      },
                      xAxis: {
                        type: 'category',
                        labels: {
                          autoRotation: [-10, -20, -30, -40, -50, -60, -70, -80, -90]
                        }
                      },
                      yAxis: {
                        labels: {
                          enabled: false
                        },
                        title: {
                          text: false
                        }
                      },
                      legend: {
                          enabled: false
                      },
                      plotOptions: {
                        series: {
                          borderWidth: 0,
                          dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                          }
                        }
                      },
                      tooltip: {
                          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b> of total<br/>'
                      },
                      series: [{
                        name:"Característica",
                        colorByPoint: true,
                        data: [{
                          name: "Realização",
                          y: (this.subTotal1)
                        },
                        {
                          name: "Planejamento",
                          y: (this.subTotal2)
                        },
                        {
                          name: "Poder",
                          y: (this.subTotal3)
                        },
                        {
                          name: "Total",
                          y: (this.subTotal1+this.subTotal2+this.subTotal3)
                        }]
                      }]
                    }
                  }></Highcharts>
                </Paper>
              </Tab>
            </Tabs>
            

                

                            

            
            
            
            
            

           
          
        </AppCanvas>
    );
  }
});
React.render(<PerfilEmpreendedor />, document.body);
