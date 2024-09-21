package com.example.HostelFinderBackend.services;

import com.example.HostelFinderBackend.entity.User;

import java.util.List;

public interface UserService {
    void createUser(User user);
    void updateUser(User user);
    User getUser(int userId);
    List<User> getAllUsers ();
    void deleteUser(int userId);
}
