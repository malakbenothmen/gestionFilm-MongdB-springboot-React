package film.example.platformFilm.repositries;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import film.example.platformFilm.Models.Film;

@Repository
public interface FilmRepository extends MongoRepository<Film, String> {
	 List<Film> findByTitleContainingIgnoreCase(String title);
	    List<Film> findByTitle(String title);
	    List<Film> findByGenre(String genre);
}
