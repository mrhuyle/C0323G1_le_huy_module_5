package com.example.exam_back_end.model;

import javax.persistence.*;

@Entity
public class Clothes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String date;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private ClothTypes type;

    public Clothes() {
    }

    public Clothes(String name, String date, int quantity, ClothTypes type) {
        this.name = name;
        this.date = date;
        this.quantity = quantity;
        this.type = type;
    }

    public Clothes(int id, String name, String date, int quantity, ClothTypes type) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.quantity = quantity;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public ClothTypes getType() {
        return type;
    }

    public void setType(ClothTypes type) {
        this.type = type;
    }
}
