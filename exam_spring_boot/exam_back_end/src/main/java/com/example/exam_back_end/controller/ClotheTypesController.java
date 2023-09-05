package com.example.exam_back_end.controller;

import com.example.exam_back_end.model.ClothTypes;
import com.example.exam_back_end.service.IClothTypesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/types")
@CrossOrigin("*")
public class ClotheTypesController {
    @Autowired
    private IClothTypesService clothTypesService;

    @GetMapping("/")
    public ResponseEntity<List<ClothTypes>> getTypes() {
        List<ClothTypes> listTypes = clothTypesService.findAll();
        if (listTypes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(listTypes, HttpStatus.OK);
        }
    }
}
