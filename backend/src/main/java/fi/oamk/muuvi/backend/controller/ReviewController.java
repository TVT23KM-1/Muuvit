package fi.oamk.muuvi.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import fi.oamk.muuvi.backend.Shemas.ReviewSchema;
import fi.oamk.muuvi.backend.models.Review;
import fi.oamk.muuvi.backend.repositories.ReviewRepository;
import fi.oamk.muuvi.backend.services.ReviewService;
import io.micrometer.core.ipc.http.HttpSender.Response;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/review")
@CrossOrigin(origins="*")
public class ReviewController {
    private ReviewService reviewservice;
    public ReviewController(ReviewService reviewservice){
        this.reviewservice=reviewservice;
    }

     @PostMapping("/private/newReview")
    public ResponseEntity<String> newreview(@RequestBody ReviewSchema reviewContent) {
        return reviewservice.newReview(reviewContent.getMovieId(), reviewContent.getStars(), reviewContent.getDescription());
    }

}