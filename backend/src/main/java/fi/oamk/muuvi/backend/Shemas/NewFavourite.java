package fi.oamk.muuvi.backend.Shemas;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewFavourite {
    @JsonProperty("movieId")
    private Long movieId;

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

}
