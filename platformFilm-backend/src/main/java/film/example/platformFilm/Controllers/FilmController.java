package film.example.platformFilm.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;



import film.example.platformFilm.Models.Film;


import film.example.platformFilm.repositries.FilmRepository;

import java.util.List;


@RestController
@CrossOrigin(origins="*",allowedHeaders="*")
@RequestMapping("/api/films")
public class FilmController {
    @Autowired
    
    private FilmRepository filmRepository;
  
    
    
    @PostMapping("")
    public Film addFilm(@RequestBody Film film) {
        return filmRepository.save(film);
    }

    @GetMapping("/")
    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }
    
    @GetMapping("/{id}" )
	public Film getOne(@PathVariable String id )
	{return filmRepository.findById(id).get() ;}
    
	@PutMapping ("/edit/{id}")
	public Film update(@RequestBody Film f  ,@PathVariable String id )
	{
		f.setId(id);
		return filmRepository.save(f);
	}
	
    @GetMapping("/search/title/{title}")
    public List<Film> getByTitle(@PathVariable String title) {
        return filmRepository.findByTitle(title);
    }

    @GetMapping("/search/genre/{genre}")
    public List<Film> getByGenre(@PathVariable String genre) {
        return filmRepository.findByGenre(genre);
    }
	


	@DeleteMapping (path="delete/{id}")
	public void deletedeleteFilm(@PathVariable String id )
	{
		filmRepository.deleteById(id);
	}
    
 
}

