package fi.oamk.muuvi.backend.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

import com.fasterxml.jackson.databind.ObjectMapper;

import fi.oamk.muuvi.backend.Shemas.MovieResult;
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

    public String getApiKey() {
        return api_key;
    }

    public Integer getGenreId(String genre) {
        return genres.get(genre);
    }
    
    public ResponseEntity<MovieResult> search(String queryString, String genre, Integer page, Integer year, String language) {     
        String nameSearchString = queryString != null ? String.format("&query=%s", queryString) : "";
        String genreSearch = genre != null ? String.format("&with_genres=%s", getGenreId(genre)) : "";
        String pageSearch = page != null ? String.format("&page=%s", page) : "";
        String yearSearch = year != null ? String.format("&primary_release_year=%s", year) : "";
        String languageSearch = language != null ? String.format("&language=%s", language) : "";
        
        String URL;
    
        if (queryString == null) {
           URL = String.format("https://api.themoviedb.org/3/discover/movie?api_key=%s%s%s%s%s", this.getApiKey(), genreSearch, pageSearch, yearSearch, languageSearch);
        } else {
           URL = String.format("https://api.themoviedb.org/3/search/movie?api_key=%s%s%s%s%s%s", this.getApiKey(), nameSearchString, genreSearch, pageSearch, yearSearch, languageSearch);
        }
    
        return executeAndDeserialise(URL);
    }
    
    public ResponseEntity<MovieResult> fetchDetails(List<Integer> id) {
        String URL = String.format("https://api.themoviedb.org/3/search/movie?api_key=%s&query=%s", this.getApiKey(), id.toString().replace("[", "").replace("]", ""));

        return executeAndDeserialise(URL);
    }

    public ResponseEntity<MovieResult> executeAndDeserialise(String URL) {
        Request request = new Request.Builder()
        .url(URL)
        .get()
        .addHeader("accept", "application/json")
        .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                return ResponseEntity.status(response.code()).body(null);
            }

            String responseBody = response.body().string();

            ObjectMapper mapper = new ObjectMapper();
            MovieResult movieResult = mapper.readValue(responseBody, MovieResult.class);

            return ResponseEntity.ok(movieResult);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
