package spring.newsportal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.newsportal.entities.models.CategoryEntity;
import spring.newsportal.entities.models.ProjectEntity;
import spring.newsportal.entities.models.Users;
import spring.newsportal.services.CategoryService;
import spring.newsportal.services.ProjectService;
import spring.newsportal.services.UserService;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {
    @Autowired
    private UserService userService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ProjectService projectService;

    @GetMapping(value = "/users")
    public ResponseEntity<?> getUsers() {
        List<Users> users = userService.allUsers();
        return ResponseEntity.ok(Objects.requireNonNullElse(users, HttpEntity.EMPTY));
    }

    @GetMapping(value = "/categories")
    public ResponseEntity<?> getCategories() {
        List<CategoryEntity> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(Objects.requireNonNullElse(categories, HttpEntity.EMPTY));
    }

    @GetMapping(value = "/projects")
    public ResponseEntity<?> getProjects() {
        List<ProjectEntity> projects = projectService.getAllProjects();
        return ResponseEntity.ok(Objects.requireNonNullElse(projects, HttpEntity.EMPTY));
    }
}
