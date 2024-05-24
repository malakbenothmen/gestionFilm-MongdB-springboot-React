package film.example.platformFilm.repositries;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import film.example.platformFilm.Models.Review;

public interface ReviewRepository extends MongoRepository<Review, String> {
  
}
