package com.example.exam_back_end.service;

import com.example.exam_back_end.model.Clothes;
import com.example.exam_back_end.repository.ClothesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothesService implements IClothesService {
    @Autowired
    private ClothesRepository clothesRepository;


    @Override
    public Page<Clothes> findAll(Pageable pageable, String name) {
        return clothesRepository.findClothesByNameContaining(pageable, name);
    }

    @Override
    public Clothes findById(int id) {
        return clothesRepository.findById(id).orElse(null);
    }

    @Override
    public Clothes save(Clothes clothes) {
       return clothesRepository.save(clothes);
    }

    @Override
    public void deleteClothes(int id) {
        clothesRepository.deleteById(id);
    }
}
