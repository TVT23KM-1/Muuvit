package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "userstogroups")
public class UsersToGroups {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long usersToGroupsId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;

    public static enum Status { accepted, pending };
    @Enumerated(EnumType.STRING)
    private Status status;

    public Long getUsersToGroupsId() {
        return usersToGroupsId;
    }

    public void setUsersToGroupsId(Long usersToGroupsId) {
        this.usersToGroupsId = usersToGroupsId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
