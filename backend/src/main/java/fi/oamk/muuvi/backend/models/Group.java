package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;


@Entity
@Table(name = "groups_")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;

    private String groupName;
    private String groupDescription;

    // Foreign key user_id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User owner;

    public Long getGroupId() {
        return this.groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return this.groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupDescription() {
        return this.groupDescription;
    }

    public void setGroupDescription(String groupDescription) {
        this.groupDescription = groupDescription;
    }

    public User getOwner() {
        return this.owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

}
