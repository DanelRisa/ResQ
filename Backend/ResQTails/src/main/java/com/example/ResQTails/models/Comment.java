package com.example.ResQTails.models;
import jakarta.persistence.*;

import java.time.LocalDateTime;


@Entity
@Table(name = "Comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long commentId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "news_id")
    private News news;

    @ManyToOne
    @JoinColumn(name = "ad_id")
    private Advertisement advertisement;

    private String content;
    private LocalDateTime createdAt;

}