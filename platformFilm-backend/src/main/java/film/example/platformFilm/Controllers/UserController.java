package film.example.platformFilm.Controllers;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.core.model.Model;
import film.example.platformFilm.Models.User;

import film.example.platformFilm.repositries.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
	
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    

	@GetMapping("/")
	public List<User> getAll()
	{
		return userRepository.findAll();
	}
	

    @GetMapping("/{username}")
    public List<User> getUserByUsername(@PathVariable String username) {
        return  userRepository.findByUsername(username);
    }
    


    @PutMapping("/edit/{id}")
    public User updateUser(@PathVariable String id, @RequestBody User u) {
        u.setUser_id(id); 
        return userRepository.save(u);
      
    }
	@DeleteMapping ("delete/{id}")
	public void delete(@PathVariable String id )
	{
		userRepository.deleteById(id);
	}
	
    

}