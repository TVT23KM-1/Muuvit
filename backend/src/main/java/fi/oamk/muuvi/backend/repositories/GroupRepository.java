package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.Group;

import java.util.List;

//import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface GroupRepository extends CrudRepository<Group, Long> {

    @Query(value="SELECT groups_.* FROM users JOIN userstogroups ON userstogroups.user_id = users.user_id JOIN groups_ ON groups_.group_id = userstogroups.group_id WHERE users.user_id = ?1", nativeQuery = true)
    List<Group> findMyGroups(Long userId);
    
}
