package fi.oamk.muuvi.backend.controller;

import com.fasterxml.jackson.databind.JsonNode;
import io.swagger.v3.core.util.Json;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import fi.oamk.muuvi.backend.services.EventService;

@RestController
@RequestMapping("/event")
public class EventController {
    private EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/theatreAreas")
    public JsonNode getTheatreAreas() throws JsonMappingException, JsonProcessingException {
        
        return this.eventService.getTheatreAreas();
    }
}
