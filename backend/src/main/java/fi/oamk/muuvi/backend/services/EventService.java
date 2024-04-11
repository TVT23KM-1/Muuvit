package fi.oamk.muuvi.backend.services;

import com.fasterxml.jackson.databind.JsonNode;

import fi.oamk.muuvi.backend.models.Event;
import fi.oamk.muuvi.backend.models.Group;
import fi.oamk.muuvi.backend.repositories.EventRepository;
import fi.oamk.muuvi.backend.repositories.GroupRepository;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;


@Service
public class EventService {
    private EventRepository eventRepository;
    private GroupRepository groupRepository;
    public EventService(EventRepository eventRepository, GroupRepository groupRepository) {
        this.eventRepository = eventRepository;
        this.groupRepository = groupRepository;
    }

    public String postEvent(Long group_id, Long event_id, Long show_id) {
        Optional<Group> group = groupRepository.findById(group_id);
        if(!group.isPresent()) {
            return "Group not found";
        }
        Event event = new Event();
        event.setGroup(group.get());
        event.setEventIdOnFinnkino(event_id);
        event.setShowIdOnFinnkino(show_id);
        try {
            eventRepository.save(event);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error saving event";
        }
        return "Event added";
    }
}

