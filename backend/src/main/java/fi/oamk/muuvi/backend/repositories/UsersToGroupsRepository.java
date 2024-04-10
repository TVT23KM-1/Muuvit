package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.UsersToGroups;

//import org.hibernate.mapping.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UsersToGroupsRepository extends CrudRepository<UsersToGroups, Long> {

    @Query(value="SELECT * FROM users_to_groups utog WHERE utog.user_id = ?1 AND utog.group_id = ?2;", nativeQuery = true)
    UsersToGroups findByUserIdAndGroupId(Long userId, Long groupId);
}