package fi.oamk.muuvi.backend.controller;
import fi.oamk.muuvi.backend.Shemas.NewGroup;
import fi.oamk.muuvi.backend.services.GroupService;
import fi.oamk.muuvi.backend.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/group")
@CrossOrigin(origins = "*")
public class GroupController {

    private GroupService groupService;
    public GroupController(GroupService groupService) {
        this.groupService = groupService;
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
}
