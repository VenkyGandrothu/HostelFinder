package com.example.HostelFinderBackend.controller;

import com.example.HostelFinderBackend.entity.User;
import com.example.HostelFinderBackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/HostelFinder/users")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;


    @PostMapping("/add")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        userService.createUser(user);
        return new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return new ResponseEntity<>("User updated successfully", HttpStatus.OK);
    }

    @GetMapping("/get/{userId}")
    public ResponseEntity<User> getUser(@PathVariable("userId") int userId) {
        User user = userService.getUser(userId);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<List<User>> getAllUser() {
        List<User> user = userService.getAllUsers();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable("userId") int userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
