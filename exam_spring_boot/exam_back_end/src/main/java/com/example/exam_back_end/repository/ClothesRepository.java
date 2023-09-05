package com.example.exam_back_end.repository;

import com.example.exam_back_end.model.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClothesRepository extends JpaRepository<Clothes, Integer> {

}
