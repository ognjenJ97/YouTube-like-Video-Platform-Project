package test.test.support;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import test.test.model.LikeDislike;
import test.test.service.UserService;
import test.test.service.VideoService;
import test.test.service.CommentService;
import test.test.web.dto.LikeDislikeDto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class LikeDislikeDtoToLikeDislike implements Converter<LikeDislikeDto, LikeDislike> {

    @Autowired
    private UserService userService;

    @Autowired
    private VideoService videoService;

    @Autowired
    private CommentService commentService;

    @Override
    public LikeDislike convert(LikeDislikeDto dto) {
        LikeDislike likeDislike = new LikeDislike();

        likeDislike.setId(dto.getId());
        likeDislike.setLike(dto.isLike());
        
        if (dto.getCreationDate() != null) {
            likeDislike.setCreationDate(getLocalDateTime(dto.getCreationDate()));
        }

        if (dto.getUserId() != null) {
            likeDislike.setUser(userService.findOne(dto.getUserId()));
        }

        if (dto.getVideoId() != null) {
            likeDislike.setVideo(videoService.findOne(dto.getVideoId()));
        }

        if (dto.getCommentId() != null) {
            likeDislike.setComment(commentService.findOne(dto.getCommentId()));
        }

        return likeDislike;
    }

    private LocalDateTime getLocalDateTime(String dateTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return LocalDateTime.parse(dateTime, formatter);
    }
}