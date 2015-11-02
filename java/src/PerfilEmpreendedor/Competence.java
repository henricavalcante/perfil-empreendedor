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
public class Competence {
    private final String group;
    private final String description;
    private final Integer[] questions;
    private final int factor;
    private int score;
    
    public Competence(String group, String description, Integer[] questions, int factor){
        this.group = group;
        this.description = description;
        this.questions = questions;
        this.factor = factor;
    }
    
    public String getGroup() {
        return this.group;
    }
    
    public String getDescription() {
        return this.description;
    }
    
    public Integer[] getQuestions() {
        return this.questions;
    }
    
    public int getFactor() {
        return this.factor;
    }
    
    public int getScore() {
        return 100/35*this.score;
    }
    
    public void setScore(int score) {
        this.score = score;
    }
}
