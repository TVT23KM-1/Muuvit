package fi.oamk.muuvi.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fi.oamk.muuvi.backend.models.Event;

public interface EventRepository extends JpaRepository<Event, Long>{
    @Query(value="SELECT * FROM events_ WHERE group_id = ?1 AND event_id_on_finnkino = ?2 AND show_id_on_finnkino = ?3", nativeQuery = true)
    Event findEvent(Long group_id, Long event_id, Long show_id);
}
