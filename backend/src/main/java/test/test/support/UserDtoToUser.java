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

import test.test.model.User;
import test.test.model.Video;
import test.test.service.UserService;
import test.test.service.VideoService;
import test.test.web.dto.UserDto;
import test.test.web.dto.VideoDto;

@Component
public class UserDtoToUser implements Converter<UserDto, User> {

    @Autowired
    private UserService userService;

    @Autowired
    private VideoService videoService;


    @Override
    public User convert(UserDto dto) {

        User entity;

        if (dto.getId() == null) {
            entity = new User();
        } else {
            entity = userService.findOne(dto.getId());
        }

        if (entity != null) {
            entity.setUsername(dto.getUsername());
            entity.setPassword(dto.getPassword());
            entity.setFirstName(dto.getFirstName());
            entity.setLastName(dto.getLastName());
            entity.setEmail(dto.getEmail());
            entity.setChannelDescription(dto.getChannelDescription());
//            entity.setRegistrationDate(getLocalDateTime(dto.getRegistrationDate()));
            if (dto.getRegistrationDate() != null) {
            	entity.setRegistrationDate(getLocalDateTime(dto.getRegistrationDate()));
            }
            entity.setPicture(dto.getPicture());
            entity.setRole(dto.getRole());
            entity.setBlocked(dto.isBlocked());

            // Konvertovanje DTO lista u entitetsku listu pretplata (subscribers) i pretplaćenja (subscriptions)
            if (dto.getSubscribers() != null) {
                List<User> subscribers = new ArrayList<>();
                for (UserDto subscriberDto : dto.getSubscribers()) {
                    User subscriber = userService.findOne(subscriberDto.getId());
                    if (subscriber != null) {
                        subscribers.add(subscriber);
                    }
                }
                entity.setSubscribers(subscribers);
            }

            if (dto.getSubscriptions() != null) {
                List<User> subscriptions = new ArrayList<>();
                for (UserDto subscriptionDto : dto.getSubscriptions()) {
                    User subscription = userService.findOne(subscriptionDto.getId());
                    if (subscription != null) {
                        subscriptions.add(subscription);
                    }
                }
                entity.setSubscriptions(subscriptions);
            }
            
            // Konvertovanje DTO lista u entitetske liste za video, komentare i like/dislike
            if (dto.getVideos() != null) {
                List<Video> videos = new ArrayList<>();
                for (VideoDto videoDto : dto.getVideos()) {
                    Video video = videoService.findOne(videoDto.getId());
                    if (video != null) {
                        videos.add(video);
                    }
                }
                entity.setVideos(videos);
            }

//            if (dto.getComments() != null) {
//                List<Comment> comments = new ArrayList<>();
//                for (CommentDto commentDto : dto.getComments()) {
//                    Comment comment = commentService.findOne(commentDto.getId());
//                    if (comment != null) {
//                        comments.add(comment);
//                    }
//                }
//                entity.setComments(comments);
//            }

//            if (dto.getLikedDislikedVideos() != null) {
//                List<LikeDislike> likedDislikedVideos = new ArrayList<>();
//                for (LikeDislikeDto likeDislikeDto : dto.getLikedDislikedVideos()) {
//                    LikeDislike likeDislike = likeDislikeService.findOne(likeDislikeDto.getId());
//                    if (likeDislike != null) {
//                        likedDislikedVideos.add(likeDislike);
//                    }
//                }
//                entity.setLikedDislikedVideos(likedDislikedVideos);
//            }
//
//            if (dto.getLikedDislikedComments() != null) {
//                List<LikeDislike> likedDislikedComments = new ArrayList<>();
//                for (LikeDislikeDto likeDislikeDto : dto.getLikedDislikedComments()) {
//                    LikeDislike likeDislike = likeDislikeService.findOne(likeDislikeDto.getId());
//                    if (likeDislike != null) {
//                        likedDislikedComments.add(likeDislike);
//                    }
//                }
//                entity.setLikedDislikedComments(likedDislikedComments);
//            }
        }

        return entity;
    }
    
	private LocalDateTime getLocalDateTime(String dateTime) throws DateTimeParseException {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return LocalDateTime.parse(dateTime, formatter);
    }
	
}