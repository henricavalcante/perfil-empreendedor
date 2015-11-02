/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PerfilEmpreendedor;

import com.google.gson.Gson;
import java.io.BufferedOutputStream;
import org.apache.fop.apps.FopFactory;
import org.apache.fop.apps.Fop;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import javax.swing.JFileChooser;
import javax.xml.transform.*;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamSource;
import org.xml.sax.SAXException;

/**
 *
 * @author henricavalcante
 */
public class Results extends javax.swing.JFrame {

    private final ArrayList<Question> questions;
    private ArrayList<Competence> competences;
    
    /**
     * Creates new form Results
     * @param questions
     */
    public Results(ArrayList<Question> questions) {
        initComponents();
        this.questions = questions;
        
        int correctionFactor = questions
                .stream()
                .filter(q -> Arrays.asList(new Integer[] {11, 22, 33, 44, 55}).contains(q.getId()))
                .mapToInt(q -> q.getAnswer() * q.getFactor())
                .sum() + 18;
        
        switch (correctionFactor) {
            case 25: correctionFactor = 7; break;
            case 24: correctionFactor = 7; break;
            case 23: correctionFactor = 5; break;
            case 22: correctionFactor = 5; break;
            case 21: correctionFactor = 3; break;
            case 20: correctionFactor = 3; break;
            default: correctionFactor = 0; break;
        }
        
        Logger.getAnonymousLogger().log(Level.INFO, "correctionFactor: {0}", String.valueOf(correctionFactor));
        
        competences = new ArrayList();
        
        String[] groups = new String[] {"Realização", "Planejamento", "Poder"};
        
        competences.add(new Competence(
                groups[0],
                "Buscar oportunidades e ter iniciativas",
                new Integer[] {1, 12, 23, 34, 45},
                6));
       
        competences.add(new Competence(
                groups[0],
                "Perserverar",
                new Integer[] {2, 13, 24, 35, 46},
                6));
       
        competences.add(new Competence(
                groups[0],
                "Comprometer-se",
                new Integer[] {3, 14, 25, 36, 47},
                6));
       
        competences.add(new Competence(
                groups[0],
                "Atuar com qualidade",
                new Integer[] {4, 15, 26, 37, 48},
                0));
       
        competences.add(new Competence(
                groups[0],
                "Correr riscos calculados",
                new Integer[] {5, 16, 27, 38, 49},
                6));
       
        competences.add(new Competence(
                groups[1],
                "Estabelecer metas objetivas",
                new Integer[] {6, 17, 28, 39, 50},
                6));
        
        competences.add(new Competence(
                groups[1],
                "Buscar informações",
                new Integer[] {7, 18, 29, 40, 51},
                6));
        
        competences.add(new Competence(
                groups[1],
                "Planejar e monitorar de forma sistemática",
                new Integer[] {8, 19, 30, 41, 52},
                6));
        
        competences.add(new Competence(
                groups[2],
                "Persuadir e manter contatos",
                new Integer[] {9, 20, 31, 42, 53},
                6));
        
        competences.add(new Competence(
                groups[2],
                "Ter confiança e independencia",
                new Integer[] {10, 21, 32, 43, 54},
                6));
        
        //filling the scores
        competences.forEach(
                (Competence c) -> c.setScore(getPointsFromQuestions(c.getQuestions())+c.getFactor())
        );
        
        String txtCompetences = competences
                .stream()
                .map(c ->formatResultLine(c.getDescription(), c.getScore()).concat("\n"))
                .collect(StringBuilder::new,
                        StringBuilder::append,
                        StringBuilder::append)
                .toString();
        
        Iterator itGroups = competences
                .stream()
                .collect(
                        Collectors.groupingBy(
                                Competence::getGroup,
                                Collectors.summingInt(Competence::getScore)
                        )
                ).entrySet().iterator();
        
        String txtGroups = "\n";
        
        while (itGroups.hasNext()) {
            Map.Entry pair = (Map.Entry)itGroups.next();
            txtGroups += formatResultLine(pair.getKey().toString(), (int)pair.getValue()).concat("\n");
            itGroups.remove();
        }
        txtGroups += "\n";
        
        int totalScore = competences
                .stream()
                .mapToInt(Competence::getScore)
                .sum();
        
        
        txtResults.setText(
                txtCompetences
                        .concat(txtGroups)
                        .concat(formatResultLine("TOTAL", totalScore))
        );
        
    }
    
    public static String formatResultLine(final String competence, final int score) {
        int size = 51;
        if (competence == null) {
            return null;
        }
        int pads = size - competence.length();
        
        if (score < 100) {
            pads++;
        }
        
        return competence
                .concat(new String(new char[pads]).replace("\0", " "))
                .concat(String.valueOf(score));
    }
     
     
    private int getPointsFromQuestions(Integer[] numbers) {
        return questions
                .stream()
                .filter(q -> Arrays.asList(numbers).contains(q.getId()))
                .mapToInt(q -> q.getAnswer() * q.getFactor())
                .sum();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        txtResults = new javax.swing.JTextArea();
        jButton3 = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(0, 49, 63));

        jButton1.setBackground(new java.awt.Color(213, 182, 64));
        jButton1.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        jButton1.setForeground(new java.awt.Color(0, 41, 53));
        jButton1.setText("JSON");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jButton2.setBackground(new java.awt.Color(213, 182, 64));
        jButton2.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        jButton2.setForeground(new java.awt.Color(0, 41, 53));
        jButton2.setText("PDF");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        jScrollPane1.setBorder(null);

        txtResults.setEditable(false);
        txtResults.setBackground(new java.awt.Color(0, 49, 63));
        txtResults.setColumns(20);
        txtResults.setFont(new java.awt.Font("Courier New", 0, 18)); // NOI18N
        txtResults.setForeground(new java.awt.Color(255, 255, 255));
        txtResults.setRows(5);
        txtResults.setAutoscrolls(false);
        txtResults.setBorder(null);
        jScrollPane1.setViewportView(txtResults);

        jButton3.setBackground(new java.awt.Color(213, 182, 64));
        jButton3.setFont(new java.awt.Font("Courier New", 1, 18)); // NOI18N
        jButton3.setForeground(new java.awt.Color(0, 41, 53));
        jButton3.setText("Sair");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(369, Short.MAX_VALUE)
                .addComponent(jButton1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton3)
                .addContainerGap())
            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                    .addContainerGap(25, Short.MAX_VALUE)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 609, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addContainerGap()))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(384, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(jButton2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jButton3, javax.swing.GroupLayout.DEFAULT_SIZE, 40, Short.MAX_VALUE)
                    .addComponent(jButton1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(jPanel1Layout.createSequentialGroup()
                    .addGap(28, 28, 28)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 343, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addContainerGap(59, Short.MAX_VALUE)))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        Gson g = new Gson();
        String jsonQuestions = g.toJson(questions);
        JFileChooser fileChooser = new JFileChooser();
        if (fileChooser.showSaveDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();
            BufferedWriter out;
            try {
                out = new BufferedWriter(new FileWriter(file.getAbsolutePath()));
                out.write(jsonQuestions);
                out.close();
            } catch (IOException ex) {
                Logger.getLogger(Results.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        
        
        JFileChooser fileChooser = new JFileChooser();
        if (fileChooser.showSaveDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();
            
            OutputStream out;

            try {            
                // Step 1: Construct a FopFactory
                // (reuse if you plan to render multiple documents!)
                FopFactory fopFactory = FopFactory.newInstance(file);

                // Step 2: Set up output stream.
                // Note: Using BufferedOutputStream for performance reasons (helpful with FileOutputStreams).
                out = new BufferedOutputStream(new FileOutputStream(file));

                // Step 3: Construct fop with desired output format
                Fop fop = fopFactory.newFop("application/pdf", out);

                // Step 4: Setup JAXP using identity transformer
                TransformerFactory factory = TransformerFactory.newInstance();
                Transformer transformer = factory.newTransformer(); // identity transformer

                // Step 5: Setup input and output for XSLT transformation
                // Setup input stream
                Source src = new StreamSource(new File("C:/Temp/myfile.fo"));

                // Resulting SAX events (the generated FO) must be piped through to FOP
                Result res = new SAXResult(fop.getDefaultHandler());

                // Step 6: Start XSLT transformation and FOP processing
                transformer.transform(src, res);
                
                out.close();

            } catch (SAXException | IOException ex) {
                Logger.getLogger(Results.class.getName()).log(Level.SEVERE, null, ex);
            } catch (TransformerConfigurationException ex) {
                Logger.getLogger(Results.class.getName()).log(Level.SEVERE, null, ex);
            } catch (TransformerException ex) {
                Logger.getLogger(Results.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
        
    }//GEN-LAST:event_jButton2ActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTextArea txtResults;
    // End of variables declaration//GEN-END:variables
}
