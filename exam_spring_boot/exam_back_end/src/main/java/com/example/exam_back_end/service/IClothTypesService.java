package com.example.exam_back_end.service;

import com.example.exam_back_end.model.ClothTypes;

import java.util.List;

public interface IClothTypesService {
    List<ClothTypes> findAll();
    ClothTypes save(ClothTypes type);
}
