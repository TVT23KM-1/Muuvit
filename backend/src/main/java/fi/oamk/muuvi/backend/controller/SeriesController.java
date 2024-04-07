package fi.oamk.muuvi.backend.controller;

import fi.oamk.muuvi.backend.Shemas.SeriesCategoriesSchema;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/series")
public class SeriesController {

    @GetMapping("/categories")
    public ResponseEntity<List<SeriesCategoriesSchema>> getCategories() {
        return null;
    }
}
