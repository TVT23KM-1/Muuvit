package fi.oamk.muuvi.backend.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fi.oamk.muuvi.backend.models.Review;
import fi.oamk.muuvi.backend.repositories.ReviewRepository;

import io.micrometer.core.ipc.http.HttpSender.Response;
import jakarta.persistence.EntityNotFoundException;

@Service
public class ReviewService {
    ReviewRepository repo;

    ReviewService(ReviewRepository repo) {
        this.repo = repo;
    }

    public ResponseEntity<String> newReview(Integer movieId, Integer stars, String description) {
        Review newreview = new Review();
        try {
            newreview.setMovieId(movieId);
            newreview.setStars(stars);
            newreview.setDescription(description);
            this.repo.save(newreview);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body("Invalid review");
        }
        return ResponseEntity.ok().body("Review created");
        
    }

}