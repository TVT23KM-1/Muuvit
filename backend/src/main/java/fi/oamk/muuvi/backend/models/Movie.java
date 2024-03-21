package fi.oamk.muuvi.backend.models;

import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Value;


public class Movie {
    @Value("${tmdb.api.key}")
    private String tmdbApiKey;
}
