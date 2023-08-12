package test.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.Comment;
import test.test.model.LikeDislike;
import test.test.service.UserService;
import test.test.service.VideoService;
import test.test.web.dto.CommentDto;
import test.test.web.dto.LikeDislikeDto;

@Component
public class CommentToCommentDto implements Converter<Comment, CommentDto> {

	@Override
	public CommentDto convert(Comment comment) {
	    CommentDto dto = new CommentDto();

	    dto.setId(comment.getId());
	    dto.setContent(comment.getContent());
	    dto.setCreationDate(comment.getCreationDate().toString().replace("T", " "));
	    dto.setOwnerId(comment.getOwner().getId());
	    dto.setOwnerUsername(comment.getOwner().getUsername());
	    if (comment.getVideo() != null) {
	        dto.setVideoId(comment.getVideo().getId());
	        dto.setVideoUrl(comment.getVideo().getVideoUrl());
	    }
	    // Dodavanje informacija o like/dislike-ovima za ovaj komentar
	    List<LikeDislikeDto> likeDislikeDtos = new ArrayList<>();
	    List<LikeDislike> likedDislikedComments = comment.getLikedDislikedComments();
	    if (likedDislikedComments != null) {
	        for (LikeDislike likeDislike : likedDislikedComments) {
	            LikeDislikeDto likeDislikeDto = new LikeDislikeDto();
	            likeDislikeDto.setId(likeDislike.getId());
	            likeDislikeDto.setLike(likeDislike.isLike());
	            likeDislikeDto.setCreationDate(likeDislike.getCreationDate().toString());
	            likeDislikeDto.setUserId(likeDislike.getUser().getId());
	            likeDislikeDto.setUserUsername(likeDislike.getUser().getUsername());

	            likeDislikeDtos.add(likeDislikeDto);
	        }
	    }
	    dto.setLikedDislikedComments(likeDislikeDtos);

	    return dto;
	}
	
	public List<CommentDto> convert(List<Comment> comments){
		List<CommentDto> dto = new ArrayList<>();

        for(Comment f : comments) {
            dto.add(convert(f));
        }

        return dto;
    }
	
}