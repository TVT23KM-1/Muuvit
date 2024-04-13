package fi.oamk.muuvi.backend.services;

import fi.oamk.muuvi.backend.Shemas.NewGroup;
//import fi.oamk.muuvi.backend.controller.Map;
import fi.oamk.muuvi.backend.misc.Status;
import fi.oamk.muuvi.backend.models.Group;
import fi.oamk.muuvi.backend.models.User;
import fi.oamk.muuvi.backend.models.UsersToGroups;
import fi.oamk.muuvi.backend.repositories.GroupRepository;
import fi.oamk.muuvi.backend.repositories.UserRepository;
import fi.oamk.muuvi.backend.repositories.UsersToGroupsRepository;
import jakarta.transaction.Transactional;

//import org.springframework.http.ResponseEntity;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.UnexpectedRollbackException;
//import org.springframework.web.bind.annotation.RequestAttribute;


import java.util.Map;
import java.util.Optional;
//import java.util.List;

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

    public ResponseEntity<String> createGroup(NewGroup group, Long ownerId) {
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
            utog.setUser(owner.get());  // Owner will definitely exist, since JWT says so.

        try {
            groupRepo.save(newGroup);
            utogRepo.save(utog);
            return ResponseEntity.ok("Created");
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Error creating group. Maybe it already exists?");
        } catch (Exception e) {
            throw e;
        }
    }

    public Iterable<Group> getAllGroups() {
        return groupRepo.findAllGroups();
    }

    public Iterable<Group> getMyGroups(Long userId) {
        return groupRepo.findMyGroups(userId);
    }

}
