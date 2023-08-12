package test.test.support;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.Comment;
import test.test.model.LikeDislike;
import test.test.model.User;
import test.test.model.Video;
import test.test.service.CommentService;
import test.test.service.LikeDislikeService;
import test.test.service.UserService;
import test.test.service.VideoService;
import test.test.web.dto.CommentDto;
import test.test.web.dto.LikeDislikeDto;

@Component
public class CommentDtoToComment implements Converter<CommentDto, Comment> {

	@Autowired
    private CommentService commentService;
	
	@Autowired
    private UserService userService;
	
	@Autowired
    private VideoService videoService;
	
	@Autowired
    private LikeDislikeService likeDislikeService;


    @Override
    public Comment convert(CommentDto dto) {
        Comment comment;

        if (dto.getId() == null) {
            comment = new Comment();
        } else {
            comment = commentService.findOne(dto.getId());
        }

        if (comment != null) {
            comment.setId(dto.getId());
            comment.setContent(dto.getContent());
            
            if (dto.getCreationDate() != null) {
                comment.setCreationDate(getLocalDateTime(dto.getCreationDate()));
            }

            User owner = userService.findOne(dto.getOwnerId());
            if (owner != null) {
                comment.setOwner(owner);
            }

            Video video = videoService.findOne(dto.getVideoId());
            if (video != null) {
                comment.setVideo(video);
            }

            if (dto.getLikedDislikedComments() != null) {
                List<LikeDislike> likedDislikedComments = new ArrayList<>();
                for (LikeDislikeDto likeDislikeDto : dto.getLikedDislikedComments()) {
                    LikeDislike likeDislike = likeDislikeService.findOne(likeDislikeDto.getId());
                    if (likeDislike != null) {
                        likedDislikedComments.add(likeDislike);
                    }
                }
                comment.setLikedDislikedComments(likedDislikedComments);
            }
        }

        return comment;
    }

    private LocalDateTime getLocalDateTime(String dateTime) throws DateTimeParseException {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return LocalDateTime.parse(dateTime, formatter);
    }
}
