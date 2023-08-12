package test.test.service;

import java.util.List;
import java.util.Optional;

import test.test.model.LikeDislike;

public interface LikeDislikeService {
	
    LikeDislike saveLikeDislike(LikeDislike likeDislike);
    
    LikeDislike findOne(Long id);
    
    List<LikeDislike> findAll();
    
    LikeDislike deleteLikeDislike(Long id);
    
    LikeDislike create(LikeDislike likeDislike);
}
