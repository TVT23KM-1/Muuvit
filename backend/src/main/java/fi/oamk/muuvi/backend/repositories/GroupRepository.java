package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.Group;

import java.util.List;

//import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface GroupRepository extends CrudRepository<Group, Long> {

    // @Query(value="SELECT * FROM groups_ g", nativeQuery = true)
    // List<Group> findAllGroups();

    // @Query(value="SELECT group_name FROM group g where g.groupId = ?1 && g.userId = ?1", nativeQuery = true)
    // List<Group> findMyGroup();

}
