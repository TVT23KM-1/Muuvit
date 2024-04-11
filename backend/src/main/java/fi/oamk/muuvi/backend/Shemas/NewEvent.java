package fi.oamk.muuvi.backend.Shemas;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewEvent {
    @JsonProperty("group_id")
    private Long group_id;
    @JsonProperty("event_id")
    private Long event_id;
    @JsonProperty("show_id")
    private Long show_id;

    public Long getGroup_id() {
        return group_id;
    }

    public void setGroup_id(Long group_id) {
        this.group_id = group_id;
    }

    public Long getEvent_id() {
        return event_id;
    }

    public void setEvent_id(Long event_id) {
        this.event_id = event_id;
    }

    public Long getShow_id() {
        return show_id;
    }

    public void setShow_id(Long show_id) {
        this.show_id = show_id;
    }
}
