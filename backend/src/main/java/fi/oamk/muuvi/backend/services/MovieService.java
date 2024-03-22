package fi.oamk.muuvi.backend.services;

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

    public String getApiKey() {
        return api_key;
    }

    public ResponseEntity<MovieResult> search() {
        OkHttpClient client = new OkHttpClient();
        String URL = String.format("https://api.themoviedb.org/3/discover/movie?api_key=%s&with_genres=%s", this.getApiKey(), 27);

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
