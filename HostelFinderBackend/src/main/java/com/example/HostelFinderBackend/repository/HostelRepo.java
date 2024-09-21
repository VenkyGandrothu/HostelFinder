package com.example.HostelFinderBackend.repository;

import com.example.HostelFinderBackend.entity.Hostel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HostelRepo extends JpaRepository<Hostel,Integer> {

}
