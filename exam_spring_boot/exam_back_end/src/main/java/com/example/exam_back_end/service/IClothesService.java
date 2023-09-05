package com.example.exam_back_end.service;

import com.example.exam_back_end.model.Clothes;

import java.util.List;

public interface IClothesService {
    List<Clothes> findAll();

    Clothes findById(int id);

    Clothes save(Clothes clothes);
    void deleteClothes(int id);
}
