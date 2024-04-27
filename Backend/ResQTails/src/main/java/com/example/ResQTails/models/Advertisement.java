package com.example.ResQTails.models;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Advertisement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ad_id;
    private String title;
    private String description;


    private LocalDateTime createdAt;
    private String status;

    @OneToMany(mappedBy = "advertisement", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();
}