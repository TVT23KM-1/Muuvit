package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long userId;
    private String userName;
    private String passwordHash;

    // No setter or getter yet
    @OneToMany(mappedBy = "user_id")
    Set<UsersToGroups> registrations;

    @OneToMany(mappedBy = "owner")
    private List<Favourite> favourites;

    @OneToMany(mappedBy = "owner")
    private List<Review> reviews;

    @OneToMany(mappedBy = "owner")
    private List<Group> groups;

    @ManyToMany(targetEntity = Group.class)
    private Set<Group> groupSet;

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
