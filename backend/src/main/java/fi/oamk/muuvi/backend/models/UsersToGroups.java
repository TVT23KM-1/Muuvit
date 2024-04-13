package fi.oamk.muuvi.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import fi.oamk.muuvi.backend.misc.Status;
import jakarta.persistence.*;
import org.hibernate.annotations.Type;

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

    @Enumerated(EnumType.STRING)
    private Status status;

    public Long getUsersToGroupsId() {
        return usersToGroupsId;
    }

    public void setUsersToGroupsId(Long usersToGroupsId) {
        this.usersToGroupsId = usersToGroupsId;
    }

    @JsonManagedReference
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @JsonIgnore
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
