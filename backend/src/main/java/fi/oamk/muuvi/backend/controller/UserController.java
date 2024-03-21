package fi.oamk.muuvi.backend.controller;

import fi.oamk.muuvi.backend.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    
    @GetMapping("/{id}")
    public User.UserDetails getUser() {
        return new User.UserDetails("testi");
    }
}
