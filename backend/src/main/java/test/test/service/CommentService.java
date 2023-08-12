package test.test.service;

import java.util.List;

import test.test.model.Comment;

public interface CommentService {
	
	Comment findOne(Long id);
	
	List<Comment> findAll();
	
    Comment saveComment(Comment comment);
    
    Comment deleteComment(Long commentId);
}
