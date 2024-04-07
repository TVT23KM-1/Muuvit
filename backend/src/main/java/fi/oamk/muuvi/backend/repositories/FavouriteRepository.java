package fi.oamk.muuvi.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fi.oamk.muuvi.backend.models.Favourite;

public interface FavouriteRepository extends JpaRepository<Favourite, Long> {

}
