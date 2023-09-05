package com.example.exam_back_end.repository;

import com.example.exam_back_end.model.ClothTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothTypesRepository extends JpaRepository<ClothTypes,Integer> {
}
