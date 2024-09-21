package com.example.HostelFinderBackend.controller;


import com.example.HostelFinderBackend.entity.Hostel;
import com.example.HostelFinderBackend.services.HostelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("HostelFinder/Hostel")
public class HostelController
{
    @Autowired
    HostelService hostelService;

    @PostMapping("/add")
    public ResponseEntity<String> createHostel(@RequestBody Hostel hostel){
        hostelService.saveHostelData(hostel);
        return new ResponseEntity<>("Hostel Added Sucessfully", HttpStatus.CREATED);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Hostel> getHostelById(@PathVariable("hostelId") int hostelId)
    {
         Hostel hostel = hostelService.getHostel(hostelId);
        if (hostel != null) {
            return new ResponseEntity<>(hostel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get")
    public ResponseEntity <List<Hostel>> getAllHostels(){
        List<Hostel> hostel = hostelService.getAllHostels();
        return new ResponseEntity<>(hostel,HttpStatus.OK);
    }

    @DeleteMapping("/remove/{hostelId}")
    public ResponseEntity<Void> deletehostel(@PathVariable("hostelId")int hostelId) {
        hostelService.deleteHostel(hostelId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
