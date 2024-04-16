package com.example.ResQTails.repository;

import com.example.ResQTails.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
