package fi.oamk.muuvi.backend.services;

import fi.oamk.muuvi.backend.Shemas.NewGroup;
import fi.oamk.muuvi.backend.misc.Status;
import fi.oamk.muuvi.backend.models.Group;
import fi.oamk.muuvi.backend.models.User;
import fi.oamk.muuvi.backend.models.UsersToGroups;
import fi.oamk.muuvi.backend.repositories.GroupRepository;
import fi.oamk.muuvi.backend.repositories.UserRepository;
import fi.oamk.muuvi.backend.repositories.UsersToGroupsRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestAttribute;

import java.util.Optional;

@Service
public class GroupService {

    GroupRepository groupRepo;
    UserRepository userRepo;
    UsersToGroupsRepository utogRepo;

    public GroupService(GroupRepository grepo, UserRepository urepo, UsersToGroupsRepository utogRepo) {
        this.groupRepo = grepo;
        this.userRepo = urepo;
        this.utogRepo = utogRepo;
    }

    public String createGroup(NewGroup group, Long ownerId) {
        // Create new group
        Group newGroup = new Group();
        newGroup.setGroupName(group.getGroupName());
        System.out.println(group.getDescription());
        newGroup.setGroupDescription(group.getDescription());

        // Create new UsersToGroups
        UsersToGroups utog = new UsersToGroups();
        utog.setStatus(Status.owner);
        utog.setGroup(newGroup);


        // Get user by id from database
        Optional<User> owner = userRepo.findById(ownerId);
        if (owner.isPresent()) {
            utog.setUser(owner.get());
            groupRepo.save(newGroup);
            utogRepo.save(utog);
            return "Created";
        } else {
            return "User not found";
        }
    }
}
