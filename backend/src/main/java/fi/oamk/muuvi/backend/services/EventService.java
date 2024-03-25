package fi.oamk.muuvi.backend.services;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;


@Service
public class EventService {

    public JsonNode getTheatreAreas() throws JsonMappingException, JsonProcessingException {
        String xml = "<TheatreAreas><TheatreArea><ID>1</ID><Name>Area 1</Name></TheatreArea><TheatreArea><ID>2</ID><Name>Area 2</Name></TheatreArea></TheatreAreas>";
//        String xml = "<root><person><name>John</name></person></root>";
        return (new XmlToJsonConverter()).convert(xml);
    }
}

