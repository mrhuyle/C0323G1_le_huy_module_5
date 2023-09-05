package com.example.exam_back_end.repository;

import com.example.exam_back_end.model.Clothes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothesRepository extends JpaRepository<Clothes, Integer> {
    Page<Clothes> findClothesByNameContaining (Pageable pageable, String name);
}
