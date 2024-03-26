package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;


@Entity
@Table(name = "groups_")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;

    private String groupName;
    private String groupDescription;

    public Set<UsersToGroups> getParticipantRegistrations() {
        return participantRegistrations;
    }

    public void setParticipantRegistrations(Set<UsersToGroups> participantRegistrations) {
        this.participantRegistrations = participantRegistrations;
    }

    public Set<Movie> getMovies() {
        return movies;
    }

    public void setMovies(Set<Movie> movies) {
        this.movies = movies;
    }

    public Set<Event> getEvents() {
        return events;
    }

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

    // No setter or getter yet
    @OneToMany(mappedBy = "user_id")
    private Set<UsersToGroups> participantRegistrations;

    @OneToMany(mappedBy = "group_id")
    private Set<Movie> movies;

    @OneToMany(mappedBy = "group_id")
    private Set<Event> events;


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

}
