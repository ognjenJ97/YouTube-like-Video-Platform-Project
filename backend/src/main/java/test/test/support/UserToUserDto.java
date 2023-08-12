package test.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import test.test.model.User;
import test.test.model.Video;
import test.test.web.dto.UserDto;
import test.test.web.dto.VideoDto;


@Component
public class UserToUserDto implements Converter<User, UserDto> {

    @Override
    public UserDto convert(User entity) {
        UserDto dto = new UserDto();
        dto.setId(entity.getId());
        dto.setUsername(entity.getUsername());
        dto.setPassword(entity.getPassword());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setEmail(entity.getEmail());
        dto.setChannelDescription(entity.getChannelDescription());
        dto.setRegistrationDate(entity.getRegistrationDate().toString().replace("T", " "));
        dto.setPicture(entity.getPicture());
        dto.setRole(entity.getRole());
        dto.setBlocked(entity.isBlocked());

        // Konvertovanje liste pretplatilaca (subscribers) u listu DTO korisnika (UserDto)
        if (entity.getSubscribers() != null) {
            List<UserDto> subscribersDto = new ArrayList<>();
            for (User subscriber : entity.getSubscribers()) {
                UserDto subscriberDto = new UserDto();
                subscriberDto.setId(subscriber.getId());
                subscriberDto.setUsername(subscriber.getUsername());
                subscribersDto.add(subscriberDto);
            }
            dto.setSubscribers(subscribersDto);
        }

        // Konvertovanje liste pretplata (subscriptions) u listu DTO korisnika (UserDto)
        if (entity.getSubscriptions() != null) {
            List<UserDto> subscriptionsDto = new ArrayList<>();
            for (User subscription : entity.getSubscriptions()) {
                UserDto subscriptionDto = new UserDto();
                subscriptionDto.setId(subscription.getId());
                subscriptionDto.setUsername(subscription.getUsername());
                subscriptionsDto.add(subscriptionDto);
            }
            dto.setSubscriptions(subscriptionsDto);
        }

        // Konvertovanje liste video snimaka (videos) u listu DTO video snimaka (VideoDto)
        if (entity.getVideos() != null) {
            List<VideoDto> videosDto = new ArrayList<>();
            for (Video video : entity.getVideos()) {
                VideoDto videoDto = new VideoDto();
                videoDto.setId(video.getId());
                videoDto.setTitle(video.getTitle());
                videoDto.setVideoUrl(video.getVideoUrl());
                videoDto.setViews(video.getViews());
                videoDto.setCreationDate(video.getCreationDate().toString().replace("T", " "));
                videoDto.setThumbnailUrl(video.getThumbnailUrl());
                videoDto.setAllowComments(video.isAllowComments());
                videoDto.setBlocked(video.isBlocked());
                videoDto.setShowRatings(video.isShowRatings());
                videoDto.setVisibility(video.getVisibility());               
                videosDto.add(videoDto);
            }
            dto.setVideos(videosDto);
        }


        return dto;
    }
    
    public List<UserDto> convert(List<User> users){
        List<UserDto> UsersDto = new ArrayList<>();

        for(User k : users) {
            UserDto dto = convert(k);
            UsersDto.add(dto);
        }

        return UsersDto;
    }
    
    
}
