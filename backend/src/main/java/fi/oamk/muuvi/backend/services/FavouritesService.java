package fi.oamk.muuvi.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import fi.oamk.muuvi.backend.Shemas.SpecificMovieInformation;
import fi.oamk.muuvi.backend.misc.Type;
import fi.oamk.muuvi.backend.models.Favourite;
import fi.oamk.muuvi.backend.models.User;
import fi.oamk.muuvi.backend.repositories.FavouriteRepository;
import fi.oamk.muuvi.backend.repositories.UserRepository;
import java.util.ArrayList;

@Service
public class FavouritesService {
    private FavouriteRepository favouriteRepo;
    private UserRepository userRepo;
    private MovieService movieService;
    public FavouritesService(FavouriteRepository favouriteRepo, UserRepository userRepo, MovieService movieService) {
        this.favouriteRepo = favouriteRepo;
        this.userRepo = userRepo;
        this.movieService = movieService;
    }

    public String addFavourite(Long userId, Long movieId, Type type) {
        if(favouriteRepo.findByUserIdAndMovieId(userId, movieId) != null) {
            return "Favourite already exists";
        }
        Favourite favourite = new Favourite();
        favourite.setMovieId(movieId);
        Optional<User> user = userRepo.findById(userId);
        if(!user.isPresent()) {
            return "User not found";
        }
        favourite.setOwner(user.get());
        String slur = GenerateShareSlur.generateShareSlur(userId.toString());
        System.out.println("Share slur: " + slur);
        favourite.setShareSlur(slur);
        favourite.setType(type); 
        try {
            favouriteRepo.save(favourite);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error saving favourite";
        }
        return "Favourite added";
    }

    public void removeFavourite(Long userId, Long movieId) {
        Favourite favourite = favouriteRepo.findByUserIdAndMovieId(userId, movieId);
        if(favourite != null) {
            favouriteRepo.delete(favourite);
        }
    }

    public List<Pair<Favourite,SpecificMovieInformation>> getFavouritesList(Long userId) {
        List<Favourite> favourites = favouriteRepo.findByUserId(userId);
        List<Pair<Favourite,SpecificMovieInformation>> favouriteList = new ArrayList<>();

        for(Favourite favourite : favourites) {
            SpecificMovieInformation movie = movieService.fetchDetails(favourite.getMovieId()).getBody();
            if(movie != null) {
                favouriteList.add(Pair.of(favourite, movie));
            }else {
                //favouriteRepo.delete(favourite);
                System.out.println("Movie not found");
            }
        }

        return favouriteList;
    }

}
