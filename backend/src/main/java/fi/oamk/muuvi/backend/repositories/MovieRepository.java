package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.misc.Type;
import fi.oamk.muuvi.backend.models.Movie;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie, Long>{
    @Query(value="SELECT * FROM movies mov WHERE mov.group_id = ?1 ORDER BY mov.movie_id DESC LIMIT 5 OFFSET ((?2-1)*5)" , nativeQuery = true)
    List<Movie> findContentByGroupId(Long groupId, Integer page);

    @Query(value="SELECT COUNT(*) FROM movies mov WHERE mov.group_id = ?1", nativeQuery = true)
    Integer countContentByGroupId(Long groupId);
}
