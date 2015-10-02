let React = require('react');
let mui = require('material-ui');
let queryString = require('query-string');

let FireBase = require('firebase');
let myFireBaseRef = new FireBase('https://torrid-heat-308.firebaseio.com/perfil-empreendedor');

let comp_mask = require('./competencias_mask');

let urlData = queryString.parse(location.search);

let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

module.exports = React.createClass({
  
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function() {
    var _this = this;
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
    myFireBaseRef.authWithCustomToken(urlData.auth||"", function(error, result){
      if(!error) {
        myFireBaseRef.once("value", function(data) {
          _this.setState({dbData: data.exportVal(), auth: true});
        });
      }
      else {
        _this.setState({auth: "403"});
      }

    });

    

  },

  getTableRow: function(ans) {
    let _this = this;
    let qIndex;
    let value = 0;
    let factor = 0;
    let competencias = comp_mask;
    for(var m in competencias.fatMask){
      qIndex = competencias.fatMask[m];

      try
      {
        value = (qIndex/Math.abs(qIndex))*(ans[Math.abs(qIndex)-1].value);
      }
      catch(e){
        value = 0;
      }
                
                              
      factor += value;
    }
      
    factor = competencias.correcao(factor);
                
    for(var competencia in competencias.competencias){

      competencias.competencias[competencia].value = 0;
      
      for(var m in competencias.competencias[competencia].mask){
        qIndex = competencias.competencias[competencia].mask[m];

        try
        {
          value = (qIndex/Math.abs(qIndex))*(ans[Math.abs(qIndex)-1]);
        }
        catch(e){
          value = 0;
        }
                                                                 
        competencias.competencias[competencia].value += value;
      }

      competencias.competencias[competencia].value += 6;
      competencias.competencias[competencia].value -= factor;
      competencias.competencias[competencia].value *= 100/25;
    }

    return competencias.competencias;

  },

  getInitialState: function() {
    return {
      dbData: [],
      auth: false
    }
  },

  render: function() {
    var _this = this;
    return (

      <section ref="relatorio" style={{padding: 20}} >
      {
        (()=>{ if(this.state.auth && this.state.auth != "403") {

            return (
                <div>
                  <div style={{'text-align': 'center', 'margin-bottom': 20}}>
                    <h3>Relatório geral PERFIL-EMPREENDEDOR</h3>
                  </div>
                  <table style={{width: '100%', 'border-collapse': 'collapse'}}>
                    <thead style={{'border': '1px solid #e0e0e0'}}>
                      <th style={{'vertical-align':'bottom', 'text-align': 'left', width: '30%'}}>
                        Nome
                      </th>
                      <th style={{'vertical-align':'bottom', 'text-align': 'left', width: '30%'}}>
                        key
                      </th>
                      {
                        comp_mask.competencias.map(function(col) {
                          return (
                            <th style={{width: 20, 'white-space': 'nowrap', height: '340px', 'vertical-align':'bottom'}}>
                              <div style={{width: 20, transform:'rotate(270deg)'}}>
                              <span>{col.label}</span>
                              </div>
                            </th>
                          )
                        })
                      }
                    </thead>
                    <tbody>
                      {
                        Object.keys(_this.state.dbData).map(function(key){

                          return (
                            <span>
                            {
                              (()=>{ if(_this.state.dbData[key].ans) {

                                  return (
                                    <tr style={{'border': '1px solid #e0e0e0'}}>
                                      <td>
                                        {_this.state.dbData[key].nome}
                                      </td>
                                      <td>
                                        {_this.state.dbData[key].key}
                                      </td>
                                      {
                                        comp_mask.competencias.map(function(col, i){
                                            let result = _this.getTableRow(_this.state.dbData[key].ans);
                                            return (
                                                <td>
                                                  {result[i].value}
                                                </td>
                                            )
                                        })
                                      }
                                    </tr>
                                  )


                                }

                              })()
                              
                            }
                            </span>
                          )
                          
                        })
                        
                      }
                    </tbody>
                  </table>
                </div>
            )

          }
        })()
      }
      {
        (()=>{ if(this.state.auth == "403") {

            return (
                <Dialog
                  title="403!"
                  actions={this.standardActions}
                  actionFocus="submit"
                  openImmediately={true}
                  modal={this.state.modal}>
                  Você não está autorizado à acessar essa página.
                </Dialog>
            )

          }
        })()
      }  

      </section>
    )
  }

})