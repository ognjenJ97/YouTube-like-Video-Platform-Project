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
import test.test.web.dto.VideoDto;

@Component
public class VideoDtoToVideo implements Converter<VideoDto, Video> {

    @Autowired
    private UserService userService;
    
    @Autowired
    private VideoService videoService;
    
    @Autowired
    private CommentService commentService;
    
    @Autowired
    private LikeDislikeService likeDislikeService;

    @Override
    public Video convert(VideoDto dto) {
        Video video;

        if (dto.getId() == null) {
            video = new Video();
        } else {
            video = videoService.findOne(dto.getId());
        }

        if (video != null) {
            video.setId(dto.getId());
            video.setTitle(dto.getTitle());
            video.setVideoUrl(dto.getVideoUrl());
            video.setThumbnailUrl(dto.getThumbnailUrl());
            video.setDescription(dto.getDescription());
            video.setVisibility(dto.getVisibility());
            video.setAllowComments(dto.isAllowComments());
            video.setShowRatings(dto.isShowRatings());
            video.setBlocked(dto.isBlocked());
            video.setViews(dto.getViews());
//            video.setCreationDate(getLocalDateTime(dto.getCreationDate()));
            
            if (dto.getCreationDate() != null) {
                video.setCreationDate(getLocalDateTime(dto.getCreationDate()));
            }

            User owner = userService.findOne(dto.getOwnerId());
            if (owner != null) {
                video.setOwner(owner);
            }

            if (dto.getComments() != null) {
                List<Comment> comments = new ArrayList<>();
                for (CommentDto commentDto : dto.getComments()) {
                    Comment comment = commentService.findOne(commentDto.getId());
                    if (comment != null) {
                        comments.add(comment);
                    }
                }
                video.setComments(comments);
            } else {
                video.setComments(new ArrayList<>()); // Inicijalizuj praznu listu ako je dto.getComments() == null
            }

            if (dto.getLikedDislikedVideos() != null) {
                List<LikeDislike> likedDislikedVideos = new ArrayList<>();
                for (LikeDislikeDto likeDislikeDto : dto.getLikedDislikedVideos()) {
                    LikeDislike likeDislike = likeDislikeService.findOne(likeDislikeDto.getId());
                    if (likeDislike != null) {
                        likedDislikedVideos.add(likeDislike);
                    }
                }
                video.setLikedDislikedVideos(likedDislikedVideos);
            } else {
                video.setLikedDislikedVideos(new ArrayList<>()); // Inicijalizuj praznu listu ako je dto.getLikedDislikedVideos() == null
            }
        }

        return video;
    }

    private LocalDateTime getLocalDateTime(String dateTime) throws DateTimeParseException {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return LocalDateTime.parse(dateTime, formatter);
    }
}