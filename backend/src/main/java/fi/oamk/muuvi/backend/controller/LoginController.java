package fi.oamk.muuvi.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import fi.oamk.muuvi.backend.Shemas.UserInformation;
import fi.oamk.muuvi.backend.services.SecurityService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/auth")
public class LoginController {
    private SecurityService securityService;

    public LoginController(SecurityService securityService) {
        this.securityService = securityService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> Login(@RequestBody UserInformation credentials) {
        System.out.println("Login controller attempt with username: " + credentials.getUserName() + " and password: " + credentials.getPassword());
        String response = securityService.login(credentials.getUserName(), credentials.getPassword());
        if(response.equals("User not found")) {
            return ResponseEntity.badRequest().body(response);
        }else if(response.equals("Invalid password")) {
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok().body(response);

    }
    
}
