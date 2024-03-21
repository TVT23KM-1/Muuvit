package fi.oamk.muuvi.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import fi.oamk.muuvi.backend.Schemas.TheatreArea;
import fi.oamk.muuvi.backend.Schemas.TheatreAreas;

@Service
public class EventService {

    public List<TheatreArea> getTheatreAreas() throws JsonMappingException, JsonProcessingException {
        String xml = "<TheatreAreas><TheatreArea><ID>1</ID><Name>Area 1</Name></TheatreArea><TheatreArea><ID>2</ID><Name>Area 2</Name></TheatreArea></TheatreAreas>";
        
        XmlMapper xmlMapper = new XmlMapper();

        // Deserialize XML into a Java object
        TheatreAreas areas = xmlMapper.readValue(xml, TheatreAreas.class);

        System.out.println(areas.getTheatreArea());
        return areas.getTheatreArea();
        
    }
}
