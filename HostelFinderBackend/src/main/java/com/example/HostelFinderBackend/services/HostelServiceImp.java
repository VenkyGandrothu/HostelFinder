package com.example.HostelFinderBackend.services;

import com.example.HostelFinderBackend.entity.Hostel;
import com.example.HostelFinderBackend.repository.HostelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HostelServiceImp implements HostelService
{

    @Autowired
    HostelRepo hostelRepo;

    @Override
    public void saveHostelData(Hostel hostel) {
        hostelRepo.save(hostel);
    }

    @Override
    public Hostel getHostel(int hostelId) {
        hostelRepo.findById(hostelId);
        return null;
    }

    @Override
    public List<Hostel> getAllHostels() {
        return hostelRepo.findAll();
    }

    @Override
    public void deleteHostel(int hostelId) {
        hostelRepo.deleteById(hostelId);
    }

}
