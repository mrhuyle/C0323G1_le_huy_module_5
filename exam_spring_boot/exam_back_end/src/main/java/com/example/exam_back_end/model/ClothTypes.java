package com.example.exam_back_end.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class ClothTypes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @JsonBackReference
    @OneToMany(mappedBy = "type")
    private Set<Clothes> clothesSet;

    public ClothTypes() {
    }

    public ClothTypes(String name) {
        this.name = name;
    }

    public ClothTypes(int id, String name, Set<Clothes> clothesSet) {
        this.id = id;
        this.name = name;
        this.clothesSet = clothesSet;
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

    public Set<Clothes> getClothesSet() {
        return clothesSet;
    }

    public void setClothesSet(Set<Clothes> clothesSet) {
        this.clothesSet = clothesSet;
    }
}
