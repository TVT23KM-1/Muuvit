package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
