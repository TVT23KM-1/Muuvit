package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie, Long>{

}
