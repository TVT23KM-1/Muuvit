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

    @PostMapping("/create")
    public ResponseEntity<String> createGroup(@RequestBody NewGroup group, @RequestHeader("Authorization") String token) {
        this.groupService.createGroup(group);
        return new ResponseEntity<String>("Group created", org.springframework.http.HttpStatus.OK);
    }

}
