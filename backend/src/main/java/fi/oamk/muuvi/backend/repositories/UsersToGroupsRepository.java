package fi.oamk.muuvi.backend.repositories;

import fi.oamk.muuvi.backend.models.UsersToGroups;
import org.springframework.data.repository.CrudRepository;

public interface UsersToGroupsRepository extends CrudRepository<UsersToGroups, Long> {
}
