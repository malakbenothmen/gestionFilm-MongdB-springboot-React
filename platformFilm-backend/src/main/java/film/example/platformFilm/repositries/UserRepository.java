package film.example.platformFilm.repositries;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import film.example.platformFilm.Models.User;

	@Repository
	public interface UserRepository extends MongoRepository<User, String> {
	    List<User> findByUsername(String username);
	}

