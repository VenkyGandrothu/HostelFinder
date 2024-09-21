package com.example.HostelFinderBackend.services;

import com.example.HostelFinderBackend.entity.User;
import com.example.HostelFinderBackend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    UserRepo userRepo;

    @Override
    public void createUser(User user) {
        userRepo.save(user);
    }

    @Override
    public void updateUser(User user) {
        userRepo.save(user);
    }

    @Override
    public User getUser(int userId) {
        return userRepo.findById(userId).orElse(null);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public void deleteUser(int userId) {
        userRepo.deleteById(userId);
    }
}
