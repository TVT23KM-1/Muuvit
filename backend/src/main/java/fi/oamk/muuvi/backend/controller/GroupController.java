package fi.oamk.muuvi.backend.controller;
import fi.oamk.muuvi.backend.Shemas.NewGroup;
import fi.oamk.muuvi.backend.models.Group;
import fi.oamk.muuvi.backend.repositories.GroupRepository;
import fi.oamk.muuvi.backend.services.GroupService;
//import fi.oamk.muuvi.backend.services.MovieService;

//import java.util.List;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/group")
@CrossOrigin(origins = "*")
public class GroupController {

    private GroupService groupService;
    private GroupRepository groupRepository;

    public GroupController(GroupService groupService, GroupRepository groupRepository) {
        this.groupService = groupService;
        this.groupRepository = groupRepository;
    }

    @PostMapping("/private/create")
    public ResponseEntity<String> createGroup(@RequestBody NewGroup group, @RequestAttribute(name="jwtSub") Long userId) {
        String created = groupService.createGroup(group, userId);
        if (created.equals("Created")) {
            return ResponseEntity.ok("Group created");
        } else {
            return ResponseEntity.badRequest().body(created);
        }
    }

    @GetMapping("/groupslist")
    public ResponseEntity<Iterable<Group>> groupsAsList() {
        try {
            return ResponseEntity.ok(groupRepository.findAll());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/mygroups")
    public ResponseEntity<Iterable<Group>> myOwnGroups(@RequestParam Long userId) {
        try {
            return ResponseEntity.ok(groupService.getMyGroups(userId));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
}
