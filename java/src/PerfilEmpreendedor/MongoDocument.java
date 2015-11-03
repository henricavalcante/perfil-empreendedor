/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PerfilEmpreendedor;

import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import java.io.Serializable;
import java.util.Map;
import javax.swing.text.Document;

/**
 *
 * @author henricavalcante
 */
public abstract class MongoDocument<T> implements Serializable {
    
    private static String URI_CONNECT = "mongodb://henriunp:123654UnP@ds049094.mongolab.com:49094/perfilempreendedorunp";
    private static String DATABASE_NAME = "perfilempreendedorunp";
    private MongoClientURI muri;
    private MongoClient mc;
    private MongoDatabase mdb;
    
    public MongoDocument () {
    
    }
    
    private MongoDatabase getDatabase() {
        if (this.mdb == null) {
            this.mc = new MongoClient(new MongoClientURI(URI_CONNECT));
            mdb = mc.getDatabase(DATABASE_NAME);
        }
        return mdb;
    }
    
    public void Save() {
        
        MongoCollection<Result> col = this.getDatabase().getCollection("results", Result.class);
        
        col.insertOne((Result) this);
        
    }
}
