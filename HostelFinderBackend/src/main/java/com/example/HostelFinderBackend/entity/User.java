package com.example.HostelFinderBackend.entity;


import jakarta.persistence.*;

@Entity
@Table(name="User_Details")

public class User
{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    private String fullName;
    private String surName;
    private String dop;
    private String gender;
    private String password;
    private String confirmPassword;

    private String address;
    private String foodType;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getDop() {
        return dop;
    }

    public void setDop(String dop) {
        this.dop = dop;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public User() {
    }

    public User(String fullName, String surName, String dop, String gender, String password, String confirmPassword, String proffesion, String address, String foodType) {
        this.fullName = fullName;
        this.surName = surName;
        this.dop = dop;
        this.gender = gender;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.address = address;
        this.foodType = foodType;
    }

    @Override
    public String toString() {
        return "User{" +
                "UserId=" + userId +
                ", fullName='" + fullName + '\'' +
                ", surName='" + surName + '\'' +
                ", dop='" + dop + '\'' +
                ", gender='" + gender + '\'' +
                ", password='" + password + '\'' +
                ", confirmPassword='" + confirmPassword + '\'' +
                ", address='" + address + '\'' +
                ", foodType='" + foodType + '\'' +
                '}';
    }
}


