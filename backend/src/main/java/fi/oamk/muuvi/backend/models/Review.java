package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    private Integer movieId;
    //tähän tarvii reviewtype, koska movie ja sarja
    private Integer stars;
    private String description;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User owner;
    private Long shareSlur;

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long favouriteId) {
        this.reviewId = favouriteId;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Long getShareSlur() {
        return shareSlur;
    }

    public void setShareSlur(Long shareSlur) {
        this.shareSlur = shareSlur;
    }

    public int getStars() {
        return this.stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public Integer getMovieId() {
        return this.movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

}
