/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PerfilEmpreendedor;

import java.util.ArrayList;

/**
 *
 * @author henricavalcante
 */
public class Result extends MongoDocument<Result> {
    
    private final String name;
    private final ArrayList<Competence> competences;
    
    public Result(String name, ArrayList<Competence> competences) {
        this.name = name;
        this.competences = competences;
    }
}
