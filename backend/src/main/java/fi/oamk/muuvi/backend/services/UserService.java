package fi.oamk.muuvi.backend.services;

import org.springframework.http.ResponseEntity;

import fi.oamk.muuvi.backend.models.User;
import fi.oamk.muuvi.backend.repositories.UserRepository;
import io.micrometer.core.ipc.http.HttpSender.Response;
import jakarta.persistence.EntityNotFoundException;

public class UserService {

    UserRepository repo;

    UserService(UserRepository repo) {
        this.repo = repo;
    }

    User getUserById(Long id) {
        if (id == null) return null;
        try {
            return this.repo.getReferenceById(id);
        } catch (EntityNotFoundException e) {
            return null;
        }
    }

    public ResponseEntity<String> addAccount(String username, String password) {
        User user = new User();
        user.userName(username);
        user.passwordHash(password);
        this.repo.save(user);
        return ResponseEntity.ok("Account created");
    }

}
