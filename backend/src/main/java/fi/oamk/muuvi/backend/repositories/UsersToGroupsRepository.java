package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.UsersToGroups;

//import org.hibernate.mapping.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UsersToGroupsRepository extends CrudRepository<UsersToGroups, Long> {

    @Query(value="SELECT * FROM userstogroups utog WHERE utog.group_id = ?1 AND utog.user_id = ?2", nativeQuery = true)
    Optional<UsersToGroups> findByGroupAndUser(Long groupId, Long userId);
}