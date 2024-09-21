package com.example.HostelFinderBackend.services;

import com.example.HostelFinderBackend.entity.Hostel;

import java.util.List;

public interface HostelService {

    void saveHostelData(Hostel hostel);
    Hostel getHostel(int hostelId);
    List<Hostel> getAllHostels();
    void deleteHostel(int hostelId);
 }
