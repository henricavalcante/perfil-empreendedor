let React = require('react');
let mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin")();
let Highcharts = require('react-highcharts/more');
let comp_mask = require('./competencias_mask');
let FireBase = require('firebase');
let myFireBaseRef = new FireBase('https://torrid-heat-308.firebaseio.com/perfil-empreendedor/data');
let queryString = require('query-string');

let ThemeManager = new mui.Styles.ThemeManager();
let Tab = mui.Tab;
let Tabs = mui.Tabs;
let Colors = mui.Styles.Colors;
let AppCanvas = mui.AppCanvas;
let Paper = mui.Paper;
let Dialog = mui.Dialog;
let AppBar = mui.AppBar;

let urlData = queryString.parse(location.search);

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
    var that = this;
    if(!this.props.ans.length) {
      myFireBaseRef.authWithCustomToken(urlData.auth||"", function(error, result){
        if(!error) {
          myFireBaseRef.child(urlData.user).on("value", function(data) {
            var data = data.exportVal();
            if(data)
              that.setState({ans: data.ans, nome: data.nome});
            else
              that.setState({dialog: 'Não há registro para esse usuário.'});
          });
        }
        else {
          that.setState({dialog: 'Você não está autozidado'});
        }

      });
      
    }
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

  getDefaultProps: function() {
    return {
      ans: []
    };
  },

  getInitialState: function(){
    return {
      competencias: this.props.competencias,
      tabsValue: 'a',
      ans: this.props.ans,
      dialog: 'Aguarde ...'
    }  
  },

  render: function() {
    let _this = this;
    let qIndex;
    let value = 0;
    let factor = 0;
    let competencias = comp_mask;

    let ans = this.state.ans;
    console.log(ans);

    if(!Object.keys(this.state.ans).length) {
      return <Dialog
                  title="Perfil Empreendedor"
                  actions={this.standardActions}
                  actionFocus="submit"
                  openImmediately={true}
                  modal={this.state.modal}>
                  {this.state.dialog}
                </Dialog>
    }

    for(var m in competencias.fatMask){
      qIndex = competencias.fatMask[m];
                
      value = (qIndex/Math.abs(qIndex))*(ans[Math.abs(qIndex)-1].value);
                              
      factor += value;
    }
      
    factor = competencias.correcao(factor);
                
    for(var competencia in competencias.competencias){

      competencias.competencias[competencia].value = 0;
      
      for(var m in competencias.competencias[competencia].mask){
        qIndex = competencias.competencias[competencia].mask[m];
                                               
        value = (qIndex/Math.abs(qIndex))*(ans[Math.abs(qIndex)-1]);
                                                                 
        competencias.competencias[competencia].value += value;
      }

      competencias.competencias[competencia].value += 6;
      competencias.competencias[competencia].value -= factor;
      competencias.competencias[competencia].value *= 100/25;
    }

    return (
        <AppCanvas>
          <section>
          {
            (() => { if(!this.props.ans.length) {
                return (
                  <AppBar title={'Olá, '+this.state.nome}
                    iconElementLeft={<object data={"./src/img/wiSymbol.svg"} type="image/svg+xml" width="45" height="45" />}
                    style={{background: '#00313f'}}
                    className="menu"/>
                )
              }
            })()
          }
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
          </section>
        </AppCanvas>
    );
  }
});