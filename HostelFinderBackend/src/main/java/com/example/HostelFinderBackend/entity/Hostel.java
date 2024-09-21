package com.example.HostelFinderBackend.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "HostelData")
public class Hostel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int hostelId;
    private String hostelName;
    private String hostelAddress;
    private int singleSharePrice;
    private int twoSharePrice;
    private int threeSharePrice;
    private int fourSharePrice;
    private String ownerName;
    private long ownerPhoneno;
    private String email;
    private String hostelType;
    private String wifi;
    private String hotWater;
    private String washingMechine;
    private String foodType;


    public int getHostelId() {
        return hostelId;
    }

    public void setHostelId(int hostelId) {
        this.hostelId = hostelId;
    }

    public String getHostelName() {
        return hostelName;
    }

    public void setHostelName(String hostelName) {
        this.hostelName = hostelName;
    }

    public String getHostelAddress() {
        return hostelAddress;
    }

    public void setHostelAddress(String hostelAddress) {
        this.hostelAddress = hostelAddress;
    }

    public int getSingleSharePrice() {
        return singleSharePrice;
    }

    public void setSingleSharePrice(int singleSharePrice) {
        this.singleSharePrice = singleSharePrice;
    }

    public int getTwoSharePrice() {
        return twoSharePrice;
    }

    public void setTwoSharePrice(int twoSharePrice) {
        this.twoSharePrice = twoSharePrice;
    }

    public int getThreeSharePrice() {
        return threeSharePrice;
    }

    public void setThreeSharePrice(int threeSharePrice) {
        this.threeSharePrice = threeSharePrice;
    }

    public int getFourSharePrice() {
        return fourSharePrice;
    }

    public void setFourSharePrice(int fourSharePrice) {
        this.fourSharePrice = fourSharePrice;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public long getOwnerPhoneno() {
        return ownerPhoneno;
    }

    public void setOwnerPhoneno(long ownerPhoneno) {
        this.ownerPhoneno = ownerPhoneno;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHostelType() {
        return hostelType;
    }

    public void setHostelType(String hostelType) {
        this.hostelType = hostelType;
    }

    public String getWifi() {
        return wifi;
    }

    public void setWifi(String wifi) {
        this.wifi = wifi;
    }

    public String getHotWater() {
        return hotWater;
    }

    public void setHotWater(String hotWater) {
        this.hotWater = hotWater;
    }

    public String getWashingMechine() {
        return washingMechine;
    }

    public void setWashingMechine(String washingMechine) {
        this.washingMechine = washingMechine;
    }

    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public Hostel(int hostelId, String hostelName, String hostelAddress, int singleSharePrice, int twoSharePrice, int threeSharePrice, int fourSharePrice, String ownerName, long ownerPhoneno, String email, String hostelType, String wifi, String hotWater, String washingMechine, String foodType) {
        this.hostelId = hostelId;
        this.hostelName = hostelName;
        this.hostelAddress = hostelAddress;
        this.singleSharePrice = singleSharePrice;
        this.twoSharePrice = twoSharePrice;
        this.threeSharePrice = threeSharePrice;
        this.fourSharePrice = fourSharePrice;
        this.ownerName = ownerName;
        this.ownerPhoneno = ownerPhoneno;
        this.email = email;
        this.hostelType = hostelType;
        this.wifi = wifi;
        this.hotWater = hotWater;
        this.washingMechine = washingMechine;
        this.foodType = foodType;
    }

    public Hostel() {
    }

    @Override
    public String toString() {
        return "Hostel{" +
                "hostelId=" + hostelId +
                ", hostelName='" + hostelName + '\'' +
                ", hostelAddress='" + hostelAddress + '\'' +
                ", singleSharePrice=" + singleSharePrice +
                ", twoSharePrice=" + twoSharePrice +
                ", threeSharePrice=" + threeSharePrice +
                ", fourSharePrice=" + fourSharePrice +
                ", OwnerName='" + ownerName + '\'' +
                ", OwnerPhoneno=" + ownerPhoneno +
                ", email='" + email + '\'' +
                ", hostelType='" + hostelType + '\'' +
                ", wifi='" + wifi + '\'' +
                ", hotWater='" + hotWater + '\'' +
                ", washingMechine='" + washingMechine + '\'' +
                ", foodType='" + foodType + '\'' +
                '}';
    }

}
