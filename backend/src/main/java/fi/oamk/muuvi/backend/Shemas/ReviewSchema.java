package fi.oamk.muuvi.backend.Shemas;

public class ReviewSchema {
    private Integer movieId;
    private Integer stars;
    private String description;
    //Tähän tarvitaan type
    

    public Integer getMovieId() {
        return this.movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public Integer getStars() {
        return this.stars;
    }

    public void setStars(Integer stars) {
        this.stars = stars;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}