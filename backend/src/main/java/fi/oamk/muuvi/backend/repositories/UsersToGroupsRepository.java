package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.UsersToGroups;

//import org.hibernate.mapping.List;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UsersToGroupsRepository extends CrudRepository<UsersToGroups, Long> {

    @Query(value="SELECT * FROM userstogroups utog WHERE utog.group_id = ?1 AND utog.user_id = ?2 AND utog.status != 'pending'", nativeQuery = true)
    Optional<UsersToGroups> findByGroupAndUserWithoutPending(Long groupId, Long userId);

    @Query(value="SELECT * FROM userstogroups utog WHERE utog.group_id = ?1 AND utog.user_id = ?2 AND utog.status != 'pending'", nativeQuery = true)
    Optional<UsersToGroups> findByGroupAndUser(Long groupId, Long userId);

    @Modifying
    @Transactional
    @Query(value="DELETE FROM userstogroups u WHERE u.user_id = ?1 AND u.group_id = ?2", nativeQuery = true)
    void deleteGroupMemberById(Long userId, Long groupId);
}