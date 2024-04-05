package fi.oamk.muuvi.backend.controller;

import fi.oamk.muuvi.backend.User;
import fi.oamk.muuvi.backend.Shemas.MovieResult;
import fi.oamk.muuvi.backend.Shemas.UserInformation;
import fi.oamk.muuvi.backend.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="*")
public class UserController {

    private UserService userservice;
    public UserController(UserService userservice){
        this.userservice=userservice;
    }
    
    @GetMapping("/{id}")
    public User.UserDetails getUser() {
        return new User.UserDetails("testi");
    }

    @PostMapping("/createAccount")
    public ResponseEntity<String> createAccount(@RequestBody UserInformation credentials) {
        return userservice.CreateAccount(credentials.getUserName(), credentials.getPassword());
    }
    
}
