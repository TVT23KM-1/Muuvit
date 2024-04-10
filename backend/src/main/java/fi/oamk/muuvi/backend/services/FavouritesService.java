package fi.oamk.muuvi.backend.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import fi.oamk.muuvi.backend.misc.Type;
import fi.oamk.muuvi.backend.models.Favourite;
import fi.oamk.muuvi.backend.models.User;
import fi.oamk.muuvi.backend.repositories.FavouriteRepository;
import fi.oamk.muuvi.backend.repositories.UserRepository;

@Service
public class FavouritesService {
    private FavouriteRepository favouriteRepo;
    private UserRepository userRepo;

    public FavouritesService(FavouriteRepository favouriteRepo, UserRepository userRepo) {
        this.favouriteRepo = favouriteRepo;
        this.userRepo = userRepo;
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
}
