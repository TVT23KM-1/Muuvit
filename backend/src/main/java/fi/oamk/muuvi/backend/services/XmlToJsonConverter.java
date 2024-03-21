package fi.oamk.muuvi.backend.services;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import java.io.IOException;

public class XmlToJsonConverter {

    public String convert(String xmlString) {

//        String xmlString = "<root><person><name>John</name><age>30</age></person></root>";

        ObjectMapper xmlMapper = new XmlMapper();
        try {
            JsonNode node = xmlMapper.readTree(xmlString.getBytes());
            ObjectMapper jsonMapper = new ObjectMapper();
            return jsonMapper.writeValueAsString(node);
        } catch (IOException e) {
            System.out.println(e);
            return "error.";
        }
    }
}
