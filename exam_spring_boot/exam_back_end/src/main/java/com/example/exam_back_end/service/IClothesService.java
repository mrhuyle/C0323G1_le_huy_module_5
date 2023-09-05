package com.example.exam_back_end.service;

import com.example.exam_back_end.model.Clothes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IClothesService {
    Page<Clothes> findAll(Pageable pageable, String name);

    Clothes findById(int id);

    Clothes save(Clothes clothes);
    void deleteClothes(int id);
}
