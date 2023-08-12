package test.test.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.test.model.Comment;
import test.test.model.LikeDislike;
import test.test.model.User;
import test.test.model.Video;
import test.test.repository.CommentRepository;
import test.test.repository.LikeDislikeRepository;
import test.test.repository.UserRepository;
import test.test.repository.VideoRepository;
import test.test.service.CommentService;

@Service
public class JpaCommentService implements CommentService {
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private VideoRepository videoRepository;
	
    @Autowired
    private LikeDislikeRepository likeDislikeRepository;
    

	@Override
	public Comment findOne(Long id) {
		return commentRepository.findOneById(id);
	}

	@Override
	public List<Comment> findAll() {
		return commentRepository.findAll();
	}


	@Override
	public Comment saveComment(Comment comment) {
		LocalDateTime now = LocalDateTime.now().withSecond(0).withNano(0);
		comment.setCreationDate(now);
		
	    if (comment.getContent().isEmpty()) {
	        System.out.println("Upozorenje: Content komentara je prazan.");
	        return null;
	    }
		
		return commentRepository.save(comment);
	}

	@Override
	public Comment deleteComment(Long commentId) {
		Comment comment = findOne(commentId);
		 if (comment != null) {
	            User user = comment.getOwner();
	            Video video = comment.getVideo();

	            if (user != null) {
	                user.removeComment(comment);
	                userRepository.save(user); 
	            }

	            if (video != null) {
	                video.removeComment(comment);
	                videoRepository.save(video);
	            }

	            List<LikeDislike> likeDislikes = comment.getLikedDislikedComments();
	            likeDislikeRepository.deleteAll(likeDislikes);

	            commentRepository.delete(comment);
	            return comment;
	        }

	        return null;
	}

}
