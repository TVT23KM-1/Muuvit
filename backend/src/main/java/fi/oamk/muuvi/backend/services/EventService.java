package fi.oamk.muuvi.backend.services;

import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.JacksonXmlModule;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import fi.oamk.muuvi.backend.Schemas.TheatreArea;
import fi.oamk.muuvi.backend.Schemas.TheatreAreas;

@Service
public class EventService {

    public String getTheatreAreas() throws JsonMappingException, JsonProcessingException {
        String xml = "<TheatreAreas><TheatreArea><ID>1</ID><Name>Area 1</Name></TheatreArea><TheatreArea><ID>2</ID><Name>Area 2</Name></TheatreArea></TheatreAreas>";
//        String xml = "<root><person><name>John</name></person></root>";
        return (new XmlToJsonConverter()).convert(xml);
    }
}

