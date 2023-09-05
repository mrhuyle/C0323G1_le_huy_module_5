package com.example.exam_back_end.repository;

import com.example.exam_back_end.model.ClothTypes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClothTypesRepository extends JpaRepository<ClothTypes,Integer> {
}
