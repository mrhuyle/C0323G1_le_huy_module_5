package com.example.exam_back_end.controller;

import com.example.exam_back_end.model.Clothes;
import com.example.exam_back_end.service.IClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clothes")
@CrossOrigin("*")
public class ClothesController {
    @Autowired
    private IClothesService clothesService;

    @GetMapping
    public ResponseEntity<Page<Clothes>> getListClothes(@RequestParam(value = "page", defaultValue = "0", required = false) int page, @RequestParam(value = "name", defaultValue = "", required = false) String name) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Clothes> listClothes = clothesService.findAll(pageable, name);
        System.out.println("Check:" + listClothes);
        if (listClothes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(listClothes, HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Clothes> getById(@PathVariable("id") int id) {
        Clothes clothes = clothesService.findById(id);
        if (clothes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(clothes, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Clothes> addClothes(@RequestBody Clothes clothes) {
        return new ResponseEntity<>(clothesService.save(clothes), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Clothes> updateClothes(@PathVariable("id") int id, @RequestBody Clothes clothes) {
        Clothes updateClothes = clothesService.findById(id);
        if (updateClothes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        clothes.setId(updateClothes.getId());
        return new ResponseEntity<>(clothesService.save(clothes), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Clothes> deleteClothes(@PathVariable("id") int id) {
        Clothes deleteClothes = clothesService.findById(id);
        if (deleteClothes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        clothesService.deleteClothes(id);
        return new ResponseEntity<>(deleteClothes, HttpStatus.OK);
    }
}
