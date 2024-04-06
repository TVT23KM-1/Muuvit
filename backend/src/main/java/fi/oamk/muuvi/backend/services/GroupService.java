package fi.oamk.muuvi.backend.services;

import fi.oamk.muuvi.backend.Shemas.NewGroup;
import fi.oamk.muuvi.backend.models.Group;
import fi.oamk.muuvi.backend.repositories.GroupRepository;
import org.springframework.stereotype.Service;

@Service
public class GroupService {

    GroupRepository repo;

    public GroupService(GroupRepository repo) {
        this.repo = repo;
    }

    public void createGroup(NewGroup group) {
        Group newGroup = new Group();
        newGroup.setGroupName(group.getGroupName());
        newGroup.setGroupDescription(group.getDescription());
        repo.save(newGroup);
    }
}
