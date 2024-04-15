package fi.oamk.muuvi.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.oamk.muuvi.backend.Shemas.NewFavourite;
import fi.oamk.muuvi.backend.services.FavouritesService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/favourites")
public class FavouritesController {
    private FavouritesService favouritesService;

    public FavouritesController(FavouritesService favouritesService) {
        this.favouritesService = favouritesService;
    }

    @PostMapping("/private/add")
    public ResponseEntity<String> addFavourite(@RequestBody NewFavourite favourite, @RequestAttribute(name="jwtSub") Long userId) {
        System.out.println("Received user id: " + userId + "and movie id: " + favourite.getMovieId() + " and type: " + favourite.getType());
        String response = favouritesService.addFavourite(userId, favourite.getMovieId(), favourite.getType());
        if(response.equals("Favourite added")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }
    
}
