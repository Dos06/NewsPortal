package spring.newsportal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.newsportal.config.Consts;
import spring.newsportal.config.jwt.JwtTokenGenerator;
import spring.newsportal.controllers.requests.CommentRequest;
import spring.newsportal.controllers.requests.ProgrammerRequest;
import spring.newsportal.controllers.requests.ProjectRequest;
import spring.newsportal.controllers.requests.TechRequest;
import spring.newsportal.entities.models.*;
import spring.newsportal.services.*;

import java.util.ArrayList;
import java.util.List;
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
    @Autowired
    private ProgrammerService programmerService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private TechnologyService technologyService;

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

        CategoryEntity category = categoryService.getCategoryById(Long.parseLong(id));
        categoryService.delete(category);
        return ResponseEntity.ok(HttpEntity.EMPTY);
    }

    @PostMapping(value = "/{token}/" + Consts.ADD + "/" + Consts.TABLE_TECHNOLOGIES)
    public ResponseEntity<?> addTech(@PathVariable String token, @RequestBody TechRequest request) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        TechnologyEntity technology = new TechnologyEntity();
        technology.setTechnology(request.getName());
        technology.setIcon(request.getImg());
        return ResponseEntity.ok(technologyService.add(technology));
    }
    @DeleteMapping(value = "/{token}/" + Consts.DELETE + "/" + Consts.TABLE_TECHNOLOGIES)
    public ResponseEntity<?> deleteTech(@PathVariable String token, @RequestBody String id) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        TechnologyEntity technology = technologyService.getTechnologyById(Long.parseLong(id));
        technologyService.delete(technology);
        return ResponseEntity.ok(HttpEntity.EMPTY);
    }

    @PostMapping(value = "/{token}/" + Consts.ADD + "/" + Consts.TABLE_PROJECTS)
    public ResponseEntity<?> addProject(@PathVariable String token, @RequestBody ProjectRequest request) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        ProjectEntity project = new ProjectEntity();
        project.setTitle(request.getTitle());
        project.setImgPath(request.getImg());
        project.setShortDescription(request.getShortDescription());
        project.setBody(request.getBody());

        List<CategoryEntity> cats = new ArrayList<>();
        List<ProgrammerEntity> progs = new ArrayList<>();
        List<TechnologyEntity> techs = new ArrayList<>();
        for (Long id : request.getCategoryIds()) {
            cats.add(categoryService.getCategoryById(id));
        }
        for (Long id : request.getProgrammerIds()) {
            progs.add(programmerService.getProgrammerById(id));
        }
        for (Long id : request.getTechnologyIds()) {
            techs.add(technologyService.getTechnologyById(id));
        }
        project.setCategory(cats);
        project.setProgrammers(progs);
        project.setTechnologies(techs);

        return ResponseEntity.ok(projectService.add(project));
    }
    @DeleteMapping(value = "/{token}/" + Consts.DELETE + "/" + Consts.TABLE_PROJECTS)
    public ResponseEntity<?> deleteProject(@PathVariable String token, @RequestBody String id) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        Optional<ProjectEntity> project = projectService.getProjectById(Long.parseLong(id));
        if (project.isPresent()) {
            ProjectEntity proj = project.get();
            projectService.delete(proj);
        }
        return ResponseEntity.ok(HttpEntity.EMPTY);
    }

    @PostMapping(value = "/{token}/" + Consts.ADD + "/" + Consts.TABLE_PROGRAMMERS)
    public ResponseEntity<?> addProgrammer(@PathVariable String token, @RequestBody ProgrammerRequest request) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        ProgrammerEntity programmer = new ProgrammerEntity();
        programmer.setName(request.getName());
        programmer.setLast_name(request.getLastName());
        programmer.setEmail(request.getEmail());
        programmer.setDescription(request.getDescription());
        programmer.setProfile_img(request.getImg());

        return ResponseEntity.ok(programmerService.add(programmer));
    }
    @DeleteMapping(value = "/{token}/" + Consts.DELETE + "/" + Consts.TABLE_PROGRAMMERS)
    public ResponseEntity<?> deleteProgrammer(@PathVariable String token, @RequestBody String id) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        ProgrammerEntity programmer = programmerService.getProgrammerById(Long.parseLong(id));
        if (programmer != null) {
            programmerService.delete(programmer);
        }
        return ResponseEntity.ok(HttpEntity.EMPTY);
    }

    @PostMapping(value = "/{token}/" + Consts.ADD + "/" + Consts.TABLE_COMMENTS)
    public ResponseEntity<?> addComment(@PathVariable String token, @RequestBody CommentRequest request) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        CommentEntity comment = new CommentEntity();
        comment.setComment(request.getComment());
        comment.setAuthor(user);

        Optional<ProjectEntity> projectOpt = projectService.getProjectById(request.getProjectId());
        ProjectEntity project;
        if (projectOpt.isPresent()) {
            project = projectOpt.get();
            List<CommentEntity> projectComments = project.getComments();
            projectComments.add(comment);
            project.setComments(projectComments);
            commentService.add(comment);
            projectService.save(project);
        }

        return ResponseEntity.ok(comment);
    }

    @DeleteMapping(value = "/{token}/" + Consts.DELETE + "/" + Consts.TABLE_COMMENTS)
    public ResponseEntity<?> deleteComment(@PathVariable String token, @RequestBody String id) {
        String login = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(login);

        CommentEntity comment = commentService.getOneById(Long.parseLong(id));
        if (comment != null && user.getId().equals(comment.getAuthor().getId())) {
            commentService.delete(comment);
        }
        return ResponseEntity.ok(HttpEntity.EMPTY);
    }
}
