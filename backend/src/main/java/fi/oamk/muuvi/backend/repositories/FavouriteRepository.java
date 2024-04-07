package fi.oamk.muuvi.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fi.oamk.muuvi.backend.models.Favourite;

public interface FavouriteRepository extends JpaRepository<Favourite, Long> {
    @Query(value="SELECT * FROM favourites fav WHERE fav.user_id = ?1 AND fav.movie_id = ?2", nativeQuery = true)
    Favourite findByUserIdAndMovieId(Long user_id, Long movie_id);
}
