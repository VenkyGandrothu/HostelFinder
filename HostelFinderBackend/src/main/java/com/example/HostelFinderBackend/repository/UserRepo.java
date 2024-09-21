package com.example.HostelFinderBackend.repository;

import com.example.HostelFinderBackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
