package fi.oamk.muuvi.backend.models;
import jakarta.persistence.*;

@Entity
@Table(name = "favourites")
public class Favourite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long favouriteId;
    private Long movieId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User owner;

    public Long getFavouriteId() {
        return favouriteId;
    }

    public void setFavouriteId(Long favouriteId) {
        this.favouriteId = favouriteId;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
}
