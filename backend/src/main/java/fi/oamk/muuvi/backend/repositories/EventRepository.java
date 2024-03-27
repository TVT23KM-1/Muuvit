package fi.oamk.muuvi.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fi.oamk.muuvi.backend.models.Event;

public interface EventRepository extends JpaRepository<Event, Long>{
    
}
