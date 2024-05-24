package film.example.platformFilm.Models;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Document(collection = "users")
@AllArgsConstructor
@Getter
@Setter

public class User {
    @Id
	private String user_id ;
    
	private String username ;
	private String email ;
	private String password ;
	private Set<String> favoriteFilms = new HashSet<>();
	
	public User() {}
	
	public User(String username, String email, String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}
	

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}


	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	 public Set<String> getFavoriteFilms() {
	        return favoriteFilms;
	    }

	    public void setFavoriteFilms(Set<String> favoriteFilms) {
	        this.favoriteFilms = favoriteFilms;
	    }

	    public void addFavoriteFilm(String filmId) {
	        this.favoriteFilms.add(filmId);
	    }

	    public void removeFavoriteFilm(String filmId) {
	        this.favoriteFilms.remove(filmId);
	    }
	

}
