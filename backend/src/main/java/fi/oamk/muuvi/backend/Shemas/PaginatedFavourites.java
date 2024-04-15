package fi.oamk.muuvi.backend.Shemas;

import java.util.List;

import org.springframework.data.util.Pair;

import fi.oamk.muuvi.backend.models.Favourite;

public class PaginatedFavourites {
    private int numPages;
    private int currentPage;
    private int pageSize;
    List<Pair<Favourite,SpecificMovieInformation>> favourites;

    public int getNumPages() {
        return numPages;
    }

    public void setNumPages(int numPages) {
        this.numPages = numPages;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public List<Pair<Favourite,SpecificMovieInformation>> getFavourites() {
        return favourites;
    }

    public void setFavourites(List<Pair<Favourite,SpecificMovieInformation>> favourites) {
        this.favourites = favourites;
    }
}
