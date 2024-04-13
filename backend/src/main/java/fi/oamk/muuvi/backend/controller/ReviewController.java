package fi.oamk.muuvi.backend.controller;

import fi.oamk.muuvi.backend.Shemas.PaginatedReviews;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.http.ResponseEntity;

import fi.oamk.muuvi.backend.Shemas.ReviewSchema;
import fi.oamk.muuvi.backend.models.Review;
import fi.oamk.muuvi.backend.repositories.ReviewRepository;
import fi.oamk.muuvi.backend.services.ReviewService;
import io.micrometer.core.ipc.http.HttpSender.Response;
import jakarta.persistence.EntityNotFoundException;

import java.util.List;


@RestController
@RequestMapping("/review")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.OPTIONS})
public class ReviewController {
    private ReviewService reviewservice;

    public ReviewController(ReviewService reviewservice) {
        this.reviewservice = reviewservice;
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/private/newReview")
    public ResponseEntity<String> newreview(@RequestBody ReviewSchema reviewContent, @RequestAttribute(name = "jwtSub") Long userId) {
        return reviewservice.newReview(reviewContent.getMovieId(), reviewContent.getType(), reviewContent.getStars(), reviewContent.getDescription(), userId);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getReviews/{page}")
    public ResponseEntity<PaginatedReviews> getReviews(@PathVariable Integer page) {
        return reviewservice.getReviews(page);
    }

}
