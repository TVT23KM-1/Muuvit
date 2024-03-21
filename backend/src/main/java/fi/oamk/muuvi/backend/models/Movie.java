package fi.oamk.muuvi.backend.models;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class Movie {
    @Value("${tmdb.api.key}")
    private String tmdbApiKey;
}
