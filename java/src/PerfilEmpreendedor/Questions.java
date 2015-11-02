/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PerfilEmpreendedor;

import java.util.ArrayList;
import java.util.function.Consumer;

/**
 *
 * @author henricavalcante
 */
public class Questions extends javax.swing.JFrame {

    /**
     *
     */
    public ArrayList<Question> questions;
    public int currentQuestion;
    
    
    /**
     * Creates new form Questions
     */
    public Questions() {
        this("Guest");
    }
    
    public Questions(String name) {
        initComponents();
        
        lblName.setText("Olá, " + name);
        
        questions = new ArrayList();
        questions.add(new Question(1, 1, "Em novas situações, quando comparadas as anteriores, procuro atingir resultados melhores do que os obtidos naquelas."));
        questions.add(new Question(2, 1, "Não tenho problema algum em insistir e até me sacrificar para conseguir o que pretendo."));
        questions.add(new Question(3, 1, "Se assumi um compromisso, é porque vou cumprir."));
        questions.add(new Question(4, 1, "Desenvolvo procedimentos para atividades e estimulo os outros a fazerem o mesmo, para atingirmos o nível de qualidade desejado."));
        questions.add(new Question(5, 1, "Acompanho o que vai acontecendo e ajusto o que foi planejado de acordo com as novas medições e circunstâncias."));
        questions.add(new Question(6, 1, "Sei onde quero chegar com a minha vida a longo prazo e tenho um plano para isso."));
        questions.add(new Question(7, 1, "Lanço mão de variadas fontes de informação para executar tarefas e projetos."));
        questions.add(new Question(8, 1, "Se o método de resolução de um problema não funciona, lanço mão de outros."));
        questions.add(new Question(9, 1, "Procuro localizar os benefícios para todos os envolvidos em um problema, para conseguir convencê-los."));
        questions.add(new Question(10, 1, "Aposto que alcançarei sucesso, mesmo em projetos difíceis e desafiadores."));
        questions.add(new Question(11, 1, "Ouço sempre qualquer pessoa com muita atenção."));
        questions.add(new Question(12, 1, "Empenho-me em cumprir tudo o que se deve ser feito, antecipando-me às circunstâncias."));
        questions.add(new Question(13, 1, "Busco formas de contornar obstáculos e dificuldades, mas sem perder o foco."));
        questions.add(new Question(14, 1, "Desdobro-me para cumprir o prazo de entrega prometido e até faço a parte dos outros."));
        questions.add(new Question(15, 1, "Registro todos os gastos e os consulto para ter base para novos projetos e planos."));
        questions.add(new Question(16, 1, "Analiso todos os aspectos de um novo projeto e somente me envolvo depois de fazer o que podia para garantir o seu êxito."));
        questions.add(new Question(17, -1, "Não perco tempo preocupando-me com o futuro de minha vida."));
        questions.add(new Question(18, 1, "Questiono bastante para definir exatamente o que querem os clientes antes de sair executando um trabalho ou uma encomenda."));
        questions.add(new Question(19, 1, "Procuro subdividir um grande trabalho ou projeto em atividades menores, definindo prazos."));
        questions.add(new Question(20, -1, "Não antecipo argumentos e formas de influenciar outras pessoas."));
        questions.add(new Question(21, -1, "Ante firme discordância dos meus pontos de vista, procuro adequá-las."));
        questions.add(new Question(22, -1, "Se não obtenho o que desejo, fico irritado."));
        questions.add(new Question(23, 1, "Mexo sim em time que está ganhando: sempre há diferentes maneiras de realizar o que já fizemos antes."));
        questions.add(new Question(24, 1, "Dedico o tempo que for necessário para resolver um problema difícil."));
        questions.add(new Question(25, 1, "Faço o que estiver ao meu alcance para satisfazer a quem contratou o trabalho."));
        questions.add(new Question(26, 1, "Capto oportunidades que passam despercebidas pelos outros e que atendem a alguma necessidade de negócio naquele momento."));
        questions.add(new Question(27, 1, "Evito situações em que percebo que o resultado final fugiria ao meu controle."));
        questions.add(new Question(28, 1, "O futuro é pensado antes e eu gosto de pensar e escolher marcos significativos para mim."));
        questions.add(new Question(29, -1, "Como o mais importante é decidir e agir rápido, não perco tempo buscando atualizar as informações."));
        questions.add(new Question(30, 1, "Estou sempre alerta para as possibilidades e procuro fazer novos negócios ou oferecer novos serviços."));
        questions.add(new Question(31, 1, "Consigo conquistar o aval e a concordância dos outros para os meus pontos de vista ou propostas."));
        questions.add(new Question(32, 1, "Tenho convicção de determinado direcionamento de minhas ações; não serão normas e expectativas dos outros que me deterão."));
        questions.add(new Question(33, -1, "Já sofri insucessos em minha vida."));
        questions.add(new Question(34, -1, "Prefiro trabalhar em assuntos ou projetos que conheço perfeitamente e nos quais me sinto seguro."));
        questions.add(new Question(35, -1, "Perante dificuldades, prefiro passar para outras tarefas ou trabalhos."));
        questions.add(new Question(36, 1, "Finalizo meus trabalhos ou projetos no prazo acertado."));
        questions.add(new Question(37, 1, "O tempo é precioso e fico irritado se o perco."));
        questions.add(new Question(38, -1, "Disponho-me facilmente a seguir empreitadas arriscadas."));
        questions.add(new Question(39, 1, "Devoto a mesma energia para concretizar minhas metas semanais, mensais ou anuais."));
        questions.add(new Question(40, 1, "Costumo consultar as pessoas experientes ou especialistas na área ou ramo de negócio em que estou atuando."));
        questions.add(new Question(41, -1, "Sigo a maré, isto é, lido com os problemas à medida que surgem."));
        questions.add(new Question(42, 1, "Consigo fazer com que as pessoas mudem de opinião, mesmo que elas tenham a princípio, firmeza em suas posições."));
        questions.add(new Question(43, 1, "Mesmo quando confrontado com oposição, não altero a minha decisão e firmeza."));
        questions.add(new Question(44, -1, "Já passei por situação em que obtive vantagem de outras pessoas."));
        questions.add(new Question(45, 1, "Não fico esperando que me peçam para fazer as coisas, saio na frente e faço antes pergunta: '"));
        questions.add(new Question(46, 1, "Avalio bem todos os prós e contras das diferentes possibilidades, antes de executar um trabalho ou projeto."));
        questions.add(new Question(47, -1, "Não coloco prazos de entrega de trabalhos acima de minha vida pessoal e familiar."));
        questions.add(new Question(48, 1, "No trabalho minha produtividade tende a ser superior à das outras pessoas, pois sempre encontro formas de acelerar  ou fazer melhor."));
        questions.add(new Question(49, 1, "Não inicio trabalho ou projetos antes de me assegurar de que vale a pena arriscar."));
        questions.add(new Question(50, 1, "Quanto mais definir o que quero atingir, maior probabilidade de sucesso terei na minha vida."));
        questions.add(new Question(51, 1, "Reúno todas as informações possíveis antes de executar um projeto."));
        questions.add(new Question(52, 1, "Procuro atender todas as possibilidades e preparo alternativas para elas."));
        questions.add(new Question(53, 1, "Para atingir minhas metas, envolvo pessoas que podem influir para que eu alcance os meus propósitos."));
        questions.add(new Question(54, 1, "Tenho confiança de que me sairei bem em qualquer atitude que me interesse fazer."));
        questions.add(new Question(55, 1, "Sinto-me à vontade para reconhecer meu desconhecimento sobre algum assunto."));
        
        FillQuestion();
        
    }

    private void FillQuestion() {
        
        FillQuestion(1);
        
    }
    
    private void FillQuestion(int question) {
         
        this.currentQuestion = question;
        
        getQuestion((Question q) -> lblQuestion.setText(q.getQuestion()));
        
        //btnNext.setEnabled(false);
        
    }
   
    public void getQuestion(Consumer<Question> r) {
        questions.forEach((Question q) -> {
            
            if (q.getId() == this.currentQuestion) {
                
                r.accept(q);
                
            }
        });
    }
    
    private void nextQuestion() {
        if (this.currentQuestion == questions.size()) {
            new Results(questions).setVisible(true);
            this.setVisible(false);
        }
        getQuestion((Question q) -> {
            if (q.getAnswer() != 0) {
                rbgQuestao.clearSelection();
                FillQuestion(this.currentQuestion + 1);
            }
        });
        
        setAnswer(3);
    }
    
    private void setAnswer(int answer) {
        getQuestion((Question q) -> q.setAnswer(answer));
        btnNext.setEnabled(true);
    }
    
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        rbgQuestao = new javax.swing.ButtonGroup();
        jPanel1 = new javax.swing.JPanel();
        jRadioButton1 = new javax.swing.JRadioButton();
        jRadioButton2 = new javax.swing.JRadioButton();
        jRadioButton3 = new javax.swing.JRadioButton();
        jRadioButton4 = new javax.swing.JRadioButton();
        jRadioButton5 = new javax.swing.JRadioButton();
        btnNext = new javax.swing.JButton();
        lblName = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        lblQuestion = new javax.swing.JTextArea();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(0, 49, 63));

        rbgQuestao.add(jRadioButton1);
        jRadioButton1.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        jRadioButton1.setForeground(new java.awt.Color(255, 255, 255));
        jRadioButton1.setText("Nunca");
        jRadioButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jRadioButton1ActionPerformed(evt);
            }
        });

        rbgQuestao.add(jRadioButton2);
        jRadioButton2.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        jRadioButton2.setForeground(new java.awt.Color(255, 255, 255));
        jRadioButton2.setText("Raramente");
        jRadioButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jRadioButton2ActionPerformed(evt);
            }
        });

        rbgQuestao.add(jRadioButton3);
        jRadioButton3.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        jRadioButton3.setForeground(new java.awt.Color(255, 255, 255));
        jRadioButton3.setText("Algumas vezes");
        jRadioButton3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jRadioButton3ActionPerformed(evt);
            }
        });

        rbgQuestao.add(jRadioButton4);
        jRadioButton4.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        jRadioButton4.setForeground(new java.awt.Color(255, 255, 255));
        jRadioButton4.setText("Geralmente");
        jRadioButton4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jRadioButton4ActionPerformed(evt);
            }
        });

        rbgQuestao.add(jRadioButton5);
        jRadioButton5.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        jRadioButton5.setForeground(new java.awt.Color(255, 255, 255));
        jRadioButton5.setText("Sempre");
        jRadioButton5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jRadioButton5ActionPerformed(evt);
            }
        });

        btnNext.setBackground(new java.awt.Color(213, 182, 64));
        btnNext.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        btnNext.setForeground(new java.awt.Color(0, 41, 53));
        btnNext.setText("Prosseguir");
        btnNext.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnNextActionPerformed(evt);
            }
        });

        lblName.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        lblName.setForeground(new java.awt.Color(255, 255, 255));
        lblName.setText("...");

        jScrollPane1.setBorder(null);

        lblQuestion.setEditable(false);
        lblQuestion.setBackground(new java.awt.Color(0, 49, 63));
        lblQuestion.setColumns(20);
        lblQuestion.setFont(new java.awt.Font("Courier New", 0, 18)); // NOI18N
        lblQuestion.setForeground(new java.awt.Color(255, 255, 255));
        lblQuestion.setLineWrap(true);
        lblQuestion.setRows(5);
        lblQuestion.setWrapStyleWord(true);
        lblQuestion.setBorder(null);
        lblQuestion.setFocusTraversalKeysEnabled(false);
        lblQuestion.setFocusable(false);
        jScrollPane1.setViewportView(lblQuestion);

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap(18, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addComponent(btnNext)
                        .addContainerGap())
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jRadioButton5)
                            .addComponent(jRadioButton4)
                            .addComponent(jRadioButton1)
                            .addComponent(jRadioButton2)
                            .addComponent(jRadioButton3)
                            .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 604, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(18, 18, 18))))
            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                    .addContainerGap(17, Short.MAX_VALUE)
                    .addComponent(lblName, javax.swing.GroupLayout.PREFERRED_SIZE, 608, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGap(15, 15, 15)))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(57, 57, 57)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jRadioButton1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jRadioButton2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jRadioButton3)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jRadioButton4)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jRadioButton5)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(btnNext, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(jPanel1Layout.createSequentialGroup()
                    .addContainerGap()
                    .addComponent(lblName, javax.swing.GroupLayout.PREFERRED_SIZE, 43, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addContainerGap(391, Short.MAX_VALUE)))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jRadioButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jRadioButton2ActionPerformed
        setAnswer(2);
    }//GEN-LAST:event_jRadioButton2ActionPerformed

    private void jRadioButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jRadioButton3ActionPerformed
        setAnswer(3);
    }//GEN-LAST:event_jRadioButton3ActionPerformed

    private void jRadioButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jRadioButton4ActionPerformed
        setAnswer(4);
    }//GEN-LAST:event_jRadioButton4ActionPerformed

    private void jRadioButton5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jRadioButton5ActionPerformed
        setAnswer(5);
    }//GEN-LAST:event_jRadioButton5ActionPerformed

    private void btnNextActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnNextActionPerformed
        nextQuestion();        
    }//GEN-LAST:event_btnNextActionPerformed

    private void jRadioButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jRadioButton1ActionPerformed
        setAnswer(1);
    }//GEN-LAST:event_jRadioButton1ActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnNext;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JRadioButton jRadioButton1;
    private javax.swing.JRadioButton jRadioButton2;
    private javax.swing.JRadioButton jRadioButton3;
    private javax.swing.JRadioButton jRadioButton4;
    private javax.swing.JRadioButton jRadioButton5;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lblName;
    private javax.swing.JTextArea lblQuestion;
    private javax.swing.ButtonGroup rbgQuestao;
    // End of variables declaration//GEN-END:variables
}
