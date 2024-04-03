package fi.oamk.muuvi.backend.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import fi.oamk.muuvi.backend.Shemas.Movie;
import fi.oamk.muuvi.backend.Shemas.MovieResult;
import fi.oamk.muuvi.backend.Shemas.SpecificMovieInformation;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

@Service
public class MovieService {
    @Value("${tmdb.api_key}")
    private String api_key;
    private Map<String, Integer> genres;
    private OkHttpClient client = new OkHttpClient();

    public MovieService() {
        // Initialize the genre map
        genres = new HashMap<>();
        genres.put("action", 28);
        genres.put("adventure", 12);
        genres.put("animation", 16);
        genres.put("comedy", 35);
        genres.put("crime", 80);
        genres.put("documentary", 99);
        genres.put("drama", 18);
        genres.put("family", 10751);
        genres.put("fantasy", 14);
        genres.put("history", 36);
        genres.put("horror", 27);
        genres.put("music", 10402);
        genres.put("mystery", 9648);
        genres.put("romance", 10749);
        genres.put("science fiction", 878);
        genres.put("tv movie", 10770);
        genres.put("thriller", 53);
        genres.put("war", 10752);
        genres.put("western", 37);

        client = new OkHttpClient();
    }

    public Map<String, Integer> getGenres() {
        return genres;
    }

    public String getApiKey() {
        return api_key;
    }

    public Integer getGenreId(String genre) {
        return genres.get(genre);
    }
    
    public ResponseEntity<MovieResult> search(String queryString, String genre, Integer page, Integer year, String language) {   
        // Construct the URL based on the query parameters  
        String nameSearchString = queryString != null ? String.format("&query=%s", queryString) : "";
        String genreSearch = genre != null ? String.format("&with_genres=%s", getGenreId(genre)) : "";
        String pageSearch = page != null ? String.format("&page=%s", page) : "";
        String yearSearch = year != null ? String.format("&primary_release_year=%s", year) : "";
        String languageSearch = language != null ? String.format("&language=%s", language) : "";
        
        String URL;
        
        // If the query string is null, we are using a different endpoint
        if (queryString == null) {
           URL = String.format("https://api.themoviedb.org/3/discover/movie?api_key=%s%s%s%s%s", this.getApiKey(), genreSearch, pageSearch, yearSearch, languageSearch);
        } else {
           URL = String.format("https://api.themoviedb.org/3/search/movie?api_key=%s%s%s%s%s%s", this.getApiKey(), nameSearchString, genreSearch, pageSearch, yearSearch, languageSearch);
        }
        
        // Execute the request and get the response body
        JsonNode result = executeAndDeserialise(URL);

        // Deserialise the JsonNode body into a MovieResult object
        try {
            ObjectMapper mapper = new ObjectMapper();
            return ResponseEntity.ok(mapper.treeToValue(result, MovieResult.class));
        } catch (JsonProcessingException e) {
            // Handle deserialization error
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    
    public ResponseEntity<List<SpecificMovieInformation>> fetchDetails(List<Integer> id) {
        List<SpecificMovieInformation> movies = new ArrayList<>();
        
        // For each movie ID, fetch the details
        for (Integer id_ : id) {
    
            String URL = String.format("https://api.themoviedb.org/3/movie/%d?api_key=%s", id_, this.getApiKey());

            // Execute the request and get the response body
            JsonNode response = executeAndDeserialise(URL);
            
            // Deserialise the JsonNode body into a SpecificMovieInformation object
            try {
                ObjectMapper mapper = new ObjectMapper();
                movies.add(mapper.treeToValue(response, SpecificMovieInformation.class));
            } catch (JsonProcessingException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            }
        }

        return ResponseEntity.ok(movies);
    }

    public JsonNode executeAndDeserialise(String URL) {
        // Construct the request
        Request request = new Request.Builder()
        .url(URL)
        .get()
        .addHeader("accept", "application/json")
        .build();

        // Execute the request
        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                return null;
            }

            String responseBody = response.body().string();

            ObjectMapper mapper = new ObjectMapper();

            // Deserialise the response body into a JsonNode
            JsonNode movieResult = mapper.readValue(responseBody, JsonNode.class);

            return movieResult;
        } catch (Exception e) {
            return null;
        }
    }
}
