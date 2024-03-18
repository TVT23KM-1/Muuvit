package com.group_1.movie_application_backend.models;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class TMDBModel {
    @Value("${tmdb.api.key}")
    private String tmdbApiKey;
}
