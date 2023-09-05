package com.example.exam_back_end.service;

import com.example.exam_back_end.model.ClothTypes;
import com.example.exam_back_end.repository.ClothTypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothTypesService implements IClothTypesService {
    @Autowired
    private ClothTypesRepository clothTypesRepository;


    @Override
    public List<ClothTypes> findAll() {
        return clothTypesRepository.findAll();
    }
}
