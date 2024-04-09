package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.Review;
import fi.oamk.muuvi.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query(value="SELECT * FROM reviews r WHERE r.user_name = ?1;", nativeQuery = true)
    User findByUsername(String username);

}
