package fi.oamk.muuvi.backend.Shemas;

import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

public class PaginatedSeriesOrMovies {
    private Integer numPages;
    private Integer currentPage;
    private Integer pageSize;
    private List<JsonNode> content;

    public Integer getNumPages() {
        return numPages;
    }

    public void setNumPages(Integer numPages) {
        this.numPages = numPages;
    }

    public Integer getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(Integer currentPage) {
        this.currentPage = currentPage;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public List<JsonNode> getContent() {
        return content;
    }

    public void setContent(List<JsonNode> content) {
        this.content = content;
    }
}

