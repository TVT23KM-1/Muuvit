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
}
