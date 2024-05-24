package film.example.platformFilm.Models;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Document(collection = "film")
@AllArgsConstructor
@Getter
@Setter
public class Film {
	
	@Id
	private String id ;
	
	private String title ;
	private String image ;
	private String background ;
	private String description ;
	private String type ;
	private String genre ;
	private Date release_date ;
	private int num_available ;
	private int num_total ;
	private String status ;
	private String duration ;
	
	 @DocumentReference
    private List<Review> reviews;
	 




	public Film(String title, String image, String background, String description, String type, String genre,
			Date release_date, int num_available, int num_total, String status, String duration) {
		super();
		this.title = title;
		this.image = image;
		this.background = background;
		this.description = description;
		this.type = type;
		this.genre = genre;
		this.release_date = release_date;
		this.num_available = num_available;
		this.num_total = num_total;
		this.status = status;
		this.duration = duration;
	}



	
    public Film() {
    }
	
	
	public Film(String title, String image, String description, String type, String genre, Date release_date,
			int num_available, int num_total, String status, String duration) {
		super();
		this.title = title;
		this.image = image;
		this.description = description;
		this.type = type;
		this.genre = genre;
		this.release_date = release_date;
		this.num_available = num_available;
		this.num_total = num_total;
		this.status = status;
		this.duration = duration;
	}
	
	
	public String getBackground() {
		return background;
	}



	public void setBackground(String background) {
		this.background = background;
	}
	

	public String getId() {
		return id;
	}


	public void setId(String film_id) {
		this.id = film_id;
	}


	public Date getRelease_date() {
		return release_date;
	}


	public void setRelease_date(Date release_date) {
		this.release_date = release_date;
	}



	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getGenre() {
		return genre;
	}


	public void setGenre(String genre) {
		this.genre = genre;
	}





	public int getNum_available() {
		return num_available;
	}


	public void setNum_available(int num_available) {
		this.num_available = num_available;
	}


	public int getNum_total() {
		return num_total;
	}


	public void setNum_total(int num_total) {
		this.num_total = num_total;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getDuration() {
		return duration;
	}


	public void setDuration(String duration) {
		this.duration = duration;
	}
	
		
	
}