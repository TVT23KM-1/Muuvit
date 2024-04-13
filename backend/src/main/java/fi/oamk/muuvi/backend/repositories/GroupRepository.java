package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.Group;

import java.util.ArrayList;
import java.util.List;

//import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface GroupRepository extends CrudRepository<Group, Long> {

    @Query(value="SELECT groups_.* FROM users JOIN userstogroups ON userstogroups.user_id = users.user_id JOIN groups_ ON groups_.group_id = userstogroups.group_id ", nativeQuery = true)
    List<Group> findMyGroups(Long userId);

    @Query(value="SELECT g.* FROM groups_ g ORDER BY g.group_name LIMIT 10 OFFSET (?1-1)*10", nativeQuery = true)
    ArrayList<Group> findGroupsPaginated(int page);

    @Query(value="SELECT COUNT(*) FROM groups_", nativeQuery = true)
    Integer countAllGroups();

    @Query(value="SELECT g.* FROM groups_ g", nativeQuery = true)
    List<Group> findAllGroups();
    
}
