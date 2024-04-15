package fi.oamk.muuvi.backend.controller;

import com.fasterxml.jackson.databind.JsonNode;
import io.swagger.v3.core.util.Json;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import fi.oamk.muuvi.backend.Shemas.NewEvent;
import fi.oamk.muuvi.backend.services.EventService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/event")
public class EventController {
    private EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }
    
    @PostMapping("private/addToGroup")
    public ResponseEntity<String> postEventToGroup(@RequestBody NewEvent event, @RequestAttribute("jwtSub") Long userId) {
        String result = eventService.postEvent(event.getGroup_id(), event.getEvent_id(), event.getShow_id());
        if(result.equals("Event added")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.badRequest().body(result);
        }
    }
    
}
