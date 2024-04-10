package fi.oamk.muuvi.backend.services;



import org.springframework.beans.factory.annotation.Autowired;
import fi.oamk.muuvi.backend.models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fi.oamk.muuvi.backend.misc.Type;
import fi.oamk.muuvi.backend.models.Review;
import fi.oamk.muuvi.backend.repositories.ReviewRepository;
import fi.oamk.muuvi.backend.repositories.UserRepository;
import io.micrometer.core.ipc.http.HttpSender.Response;
import jakarta.persistence.EntityNotFoundException;

import java.util.Optional;

@Service
public class ReviewService {
    ReviewRepository repo;
    UserRepository userRepo;
    ReviewService(ReviewRepository repo, UserRepository userRepo) {
        this.repo = repo;
        this.userRepo=userRepo;
    }

    public ResponseEntity<String> newReview(Integer movieId, Type type, Integer stars, String description, Long userId) {
        Review newreview = new Review();
        Optional<User> owner = userRepo.findById(userId);
        try {
            newreview.setMovieId(movieId);
            newreview.setStars(stars);
            newreview.setType(type);
            newreview.setDescription(description);
            newreview.setOwner(owner.get());
            this.repo.save(newreview);
            return ResponseEntity.ok().body("Review created");
        } catch (HttpMessageNotReadableException e) {
            System.out.println(e.getStackTrace());
            return ResponseEntity.badRequest().body("bad request");
        } catch (Exception e) {
            System.out.println(e.getStackTrace());
            return ResponseEntity.status(418).body("I'm a teapot");
        }
    }

}
