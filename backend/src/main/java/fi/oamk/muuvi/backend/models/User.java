package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long userId;
    private String userName;
    private String passwordHash;

    @OneToMany(mappedBy = "owner")
    private List<Favourite> favourites;

    @OneToMany(mappedBy = "owner")
    private List<Review> reviews;

    public String userName() {
        return userName;
    }

    public void userName(String usreName) {
        this.userName = userName;
    }

    public String passwordHash() {
        return passwordHash;
    }

    public void passwordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }


}
