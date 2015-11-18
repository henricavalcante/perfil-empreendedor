/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PerfilEmpreendedor;

/**
 *
 * @author henricavalcante
 */
public final class Question {
    
    private final int id;
    private final int factor;
    private final String question;
    private int answer;
    
    public Question(int id, int factor, String question) {
        this.id = id;
        this.question = question;
        this.factor = factor;
    }
    
    public int getId() {
        return this.id;
    }
    
    public int getFactor() {
        return this.factor;
    }
    
    public String getQuestion() {
        return this.question;
    }
    
    public void setAnswer(int answer) {
        this.answer = answer;
    }
    
    public int getAnswer() {
        return this.answer;
    }
    
}