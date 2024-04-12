package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.Group;

import java.util.List;

//import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface GroupRepository extends CrudRepository<Group, Long> {

    @Query(value="SELECT groups_.* FROM users JOIN userstogroups ON userstogroups.user_id = users.user_id JOIN groups_ ON groups_.group_id = userstogroups.group_id WHERE users.user_id = ?1", nativeQuery = true)
    List<Group> findMyGroups(Long userId);

    @Query(value="SELECT g.group_id, g.group_name, g.group_description, utg.status, u.user_name FROM groups_ g JOIN userstogroups utg ON g.group_id = utg.group_id JOIN users u ON utg.user_id = u.user_id WHERE utg.status='owner'", nativeQuery = true)
    List<Group> findAllGroups();
    
}
