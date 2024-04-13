package fi.oamk.muuvi.backend.controller;
import com.fasterxml.jackson.databind.JsonNode;
import io.swagger.v3.core.util.Json;
import org.springframework.web.bind.annotation.*;

import fi.oamk.muuvi.backend.Shemas.MovieResult;
import fi.oamk.muuvi.backend.Shemas.SpecificMovieInformation;
import fi.oamk.muuvi.backend.services.MovieService;
import okhttp3.Response;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/movie")
@CrossOrigin(origins = "*")
public class MovieController {
    private MovieService movieService;
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }
    
    @GetMapping("/search")
    public ResponseEntity<MovieResult> searchMovies(@RequestParam(required = false) String query,
                                                     @RequestParam(required = false) String genre,
                                                     @RequestParam(required = false) Integer page,
                                                     @RequestParam(required = false) Integer year,
                                                     @RequestParam(required = false) String language) {
        return movieService.search(query, genre, page, year, language);
    }

    @GetMapping("/genres")
    public Map<String, Integer> getGenres() {
        return movieService.getGenres();
    }

    @GetMapping("/fetchMovieDetails/{id}")
    public ResponseEntity<SpecificMovieInformation> getMovieById(@PathVariable Long id) {
        return movieService.fetchDetails(id);
    }

    @GetMapping("/fetchSerieDetails/{id}")
    public ResponseEntity<JsonNode> getSerieById(@PathVariable Long id) {
        return movieService.fetchSerieDetails(id);
    }
}
