package fi.oamk.muuvi.backend.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.oamk.muuvi.backend.Shemas.MovieResult;
import fi.oamk.muuvi.backend.services.MovieService;
import okhttp3.Response;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/movie")
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
    
    @GetMapping("/fetchDetails")
    public ResponseEntity<MovieResult> getMoviesByIDs(@RequestParam List<Integer> id) {
        return movieService.fetchDetails(id);
    }
}
