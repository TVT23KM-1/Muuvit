package fi.oamk.muuvi.backend.services;

import fi.oamk.muuvi.backend.models.User;
import fi.oamk.muuvi.backend.repositories.UserRepository;
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

}
