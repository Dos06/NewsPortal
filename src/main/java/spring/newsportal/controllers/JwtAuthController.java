package spring.newsportal.controllers;

import spring.newsportal.entities.models.Role;
import spring.newsportal.entities.models.Users;
import spring.newsportal.config.jwt.JwtRequest;
import spring.newsportal.config.jwt.JwtResponse;
import spring.newsportal.config.jwt.JwtTokenGenerator;
import spring.newsportal.services.RoleService;
import spring.newsportal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JwtAuthController {
    @Autowired
    private JwtTokenGenerator jwtTokenGenerator;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @RequestMapping(value = "/auth")
    public ResponseEntity<?> auth(@RequestBody JwtRequest request) throws Exception {
        authenticate(request.getEmail(), request.getPassword());
        final UserDetails userDetails = userService.loadUserByUsername(request.getEmail());
        final String token = jwtTokenGenerator.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    public void authenticate(String email, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (DisabledException e) {
            throw new Exception("User is disabled", e);
        } catch (BadCredentialsException e) {
            throw new Exception("Invalid credentials", e);
        }
    }

    @PostMapping(value = "/auth/register")
    @PreAuthorize("isAnonymous()")
    public ResponseEntity<?> signUp(@RequestBody Users newUser) {
        Users user = userService.getUserByUsername(newUser.getUsername());
        if (user == null) {
            List<Role> roles = new ArrayList<>(1);
            roles.add(roleService.getOneByName("USER"));
            newUser.setRoles(roles);
            userService.saveUser(newUser);
        }
        return ResponseEntity.ok(newUser);
    }

    @GetMapping(value = "/auth/profile/{token}")
    public ResponseEntity<?> getProfile(@PathVariable String token) {
        String email = jwtTokenGenerator.getEmailFromToken(token);
        Users user = userService.getUserByUsername(email);
        return ResponseEntity.ok(Objects.requireNonNullElse(user, HttpEntity.EMPTY));
    }
}
