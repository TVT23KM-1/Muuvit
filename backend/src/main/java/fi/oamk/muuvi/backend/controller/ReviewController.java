package fi.oamk.muuvi.backend.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.oamk.muuvi.backend.models.Review;
import fi.oamk.muuvi.backend.repositories.ReviewRepository;
import io.micrometer.core.ipc.http.HttpSender.Response;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/review")
public class ReviewController {

}
