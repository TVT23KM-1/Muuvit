package fi.oamk.muuvi.backend.services;

import fi.oamk.muuvi.backend.Shemas.SeriesCategoriesSchema;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class SeriesService {

    @Value("${tmdb.api_key}")
    private String api_key;
    private OkHttpClient client;

    public SeriesService() {
        client = new OkHttpClient();
    }


    public List<SeriesCategoriesSchema> getCategories() {
        Request request = new Request.Builder()
                .url(String.format("https://api.themoviedb.org/3/genre/tv/list?api_key=%s&language=fi", api_key))
                .get()
                .build();

        this.client.newCall(request).enqueue(new okhttp3.Callback() {
            @Override
            public void onFailure(okhttp3.Call call, IOException e) {
                System.out.println("Error: " + e.getMessage());
            }

            @Override
            public void onResponse(okhttp3.Call call, okhttp3.Response response) throws IOException {
                System.out.println(response.body().string());
            }
        });
        return null;
    }

}
