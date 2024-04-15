package fi.oamk.muuvi.backend.controller;
import fi.oamk.muuvi.backend.Shemas.NewGroup;
import fi.oamk.muuvi.backend.Shemas.PaginatedGroups;
import fi.oamk.muuvi.backend.models.Group;
import fi.oamk.muuvi.backend.repositories.GroupRepository;
import fi.oamk.muuvi.backend.services.GroupService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;


@RestController
@RequestMapping("/group")
public class GroupController {

    private GroupService groupService;
    private GroupRepository groupRepository;


    public GroupController(GroupService groupService, GroupRepository groupRepository) {
        this.groupService = groupService;
        this.groupRepository = groupRepository;
    }

    @PostMapping("/private/create")
    public ResponseEntity<String> createGroup(@RequestBody NewGroup group, @RequestAttribute(name="jwtSub") Long userId) {
        return groupService.createGroup(group, userId);
    }

    @GetMapping("/groupslist/{page}")
    public ResponseEntity<PaginatedGroups> groupsAsList(@PathVariable(name = "page") Integer page) {
        try {
            return ResponseEntity.ok(groupService.getAllGroupsAndPaginate(page));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/private/mygroups/{page}")
    public ResponseEntity<PaginatedGroups> myOwnGroups(@PathVariable(name = "page") Integer page, @RequestAttribute(name = "jwtSub") Long userId) {
        try {
            return ResponseEntity.ok(groupService.getMyGroups(page, userId));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/private/allmygroups")
    public ResponseEntity<ArrayList<Group>> allMyOwnGroups(@RequestAttribute(name = "jwtSub") Long userId) {
        try {
            return ResponseEntity.ok(groupService.getAllMyGroups(userId));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/private/joingroup/{groupId}")
    public ResponseEntity<String> joinGroup(@PathVariable(name = "groupId") Long groupId, @RequestAttribute(name = "jwtSub") Long userId) {
        return groupService.joinGroupRequest(groupId, userId);
    }

    @GetMapping("/private/queryMyGroupMembership/{groupId}")
    public ResponseEntity<Boolean> queryMyGroupMembership(@PathVariable(name = "groupId") Long groupId, @RequestAttribute(name = "jwtSub") Long userId) {
        return groupService.queryGroupMembership(groupId, userId);
    }
}
