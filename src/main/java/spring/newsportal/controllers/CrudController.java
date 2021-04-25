package spring.newsportal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.newsportal.config.Consts;
import spring.newsportal.config.jwt.JwtTokenGenerator;
import spring.newsportal.entities.models.CategoryEntity;
import spring.newsportal.entities.models.ProjectEntity;
import spring.newsportal.entities.models.Users;
import spring.newsportal.services.CategoryService;
import spring.newsportal.services.ProjectService;
import spring.newsportal.services.UserService;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CrudController {
    @Autowired
    private JwtTokenGenerator jwtTokenGenerator;
    @Autowired
    private UserService userService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ProjectService projectService;

    @PostMapping(value = "/{token}/" + Consts.ADD + "/" + Consts.TABLE_CATEGORIES)
    public ResponseEntity<?> addCategory(@PathVariable String token, @RequestBody String name) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        CategoryEntity category = new CategoryEntity();
        category.setCategory(name);
        return ResponseEntity.ok(categoryService.add(category));
    }
    @DeleteMapping(value = "/{token}/" + Consts.DELETE + "/" + Consts.TABLE_CATEGORIES)
    public ResponseEntity<?> deleteCategory(@PathVariable String token, @RequestBody String id) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        System.out.println("here");
        System.out.println(id);

        CategoryEntity category = categoryService.getCategoryById(Long.valueOf(id));
        categoryService.delete(category);
        return ResponseEntity.ok(HttpEntity.EMPTY);
    }

    @PostMapping(value = "/{token}/" + Consts.ADD + "/" + Consts.TABLE_PROJECTS)
    public ResponseEntity<?> addProject(@PathVariable String token, @RequestBody String name) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        System.out.println(name);
        ProjectEntity project = new ProjectEntity();
        project.setTitle(name);
        return ResponseEntity.ok(projectService.add(project));
    }
    @DeleteMapping(value = "/{token}/" + Consts.DELETE + "/" + Consts.TABLE_PROJECTS)
    public ResponseEntity<?> deleteProject(@PathVariable String token, @RequestBody Long id) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        Optional<ProjectEntity> project = projectService.getProjectById(id);
        if (project.isPresent()) {
            ProjectEntity proj = project.get();
            projectService.delete(proj);
        }
        return ResponseEntity.ok(HttpEntity.EMPTY);
    }
}
