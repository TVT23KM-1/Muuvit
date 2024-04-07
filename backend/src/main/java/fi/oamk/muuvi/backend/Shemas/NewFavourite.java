package fi.oamk.muuvi.backend.Shemas;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewFavourite {
    @JsonProperty("movieId")
    private Long movieId;
    @JsonProperty("shareSlur")
    private String shareSlur;

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getShareSlur() {
        return shareSlur;
    }

    public void setShareSlur(String shareSlur) {
        this.shareSlur = shareSlur;
    }
}
