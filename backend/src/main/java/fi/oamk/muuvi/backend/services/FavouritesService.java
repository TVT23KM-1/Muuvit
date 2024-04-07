package fi.oamk.muuvi.backend.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

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

    public String addFavourite(Long userId, Long movieId, String shareSlur) {
        Favourite favourite = new Favourite();
        favourite.setMovieId(movieId);
        Optional<User> user = userRepo.findById(userId);
        if(!user.isPresent()) {
            return "User not found";
        }
        favourite.setOwner(user.get());
        favourite.setShareSlur(shareSlur);
        favouriteRepo.save(favourite);
        return "Favourite added";
    }
}
