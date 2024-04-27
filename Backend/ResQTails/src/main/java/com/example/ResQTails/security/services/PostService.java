package com.example.ResQTails.security.services;
import com.example.ResQTails.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import com.example.ResQTails.models.Post;
import java.util.List;
@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    // Create
    public Post createPost(Post post) {
        post.setCreatedAt(LocalDateTime.now());
        return postRepository.save(post);
    }

    // Read
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    // Update
    public Post updatePost(Long id, Post updatedPost) {
        updatedPost.setId(id);
        return postRepository.save(updatedPost);
    }

    // Delete
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}
