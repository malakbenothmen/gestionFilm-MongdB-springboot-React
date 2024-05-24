package film.example.platformFilm.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import film.example.platformFilm.Models.Film;
import film.example.platformFilm.Models.Review;
import film.example.platformFilm.repositries.ReviewRepository;

import java.time.LocalDateTime;


@Service
public class ReviewService {
    @Autowired
    private ReviewRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String id) {
        Review review = repository.insert(new Review(reviewBody, LocalDateTime.now(), LocalDateTime.now()));

        mongoTemplate.update(Film.class)
            .matching(Criteria.where("id").is(id))
            .apply(new Update().push("reviews").value(review))
            .first();

        return review;
    }
}
