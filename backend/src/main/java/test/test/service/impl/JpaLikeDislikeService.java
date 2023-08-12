package test.test.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.test.model.Comment;
import test.test.model.LikeDislike;
import test.test.model.User;
import test.test.model.Video;
import test.test.repository.LikeDislikeRepository;
import test.test.service.LikeDislikeService;

@Service
public class JpaLikeDislikeService implements LikeDislikeService {
	
	@Autowired
	private LikeDislikeRepository likeDislikeRepository;

	@Override
	public LikeDislike saveLikeDislike(LikeDislike likeDislike) {
		return likeDislikeRepository.save(likeDislike);
	}

	@Override
	public LikeDislike findOne(Long id) {
		return likeDislikeRepository.findOneById(id);
	}

	@Override
	public List<LikeDislike> findAll() {
		return likeDislikeRepository.findAll();
	}

	@Override
	public LikeDislike deleteLikeDislike(Long id) {
		
		LikeDislike likeDislike = findOne(id);
		
		if(likeDislike != null) {
			if(likeDislike.getComment() != null) {
				Comment comment = likeDislike.getComment();
				comment.removeLikeDislikeForComment(likeDislike);
				User user = likeDislike.getUser();
				user.removeLikeDislikeForComment(likeDislike);
				likeDislikeRepository.delete(likeDislike);
			}
			if(likeDislike.getVideo() != null) {
				Video video = likeDislike.getVideo();
				video.removeLikeDislikeForVideo(likeDislike);
				User user = likeDislike.getUser();
				user.removeLikeDislikeForVideo(likeDislike);
				likeDislikeRepository.delete(likeDislike);
			}
			return likeDislike;
		}
		
		return null;
	}



	@Override
	public LikeDislike create(LikeDislike likeDislike) {
		LocalDateTime now = LocalDateTime.now().withSecond(0).withNano(0);
		likeDislike.setCreationDate(now);
		return likeDislikeRepository.save(likeDislike);
	}





}
