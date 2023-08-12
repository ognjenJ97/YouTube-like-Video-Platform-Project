package test.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.LikeDislike;
import test.test.web.dto.LikeDislikeDto;

@Component
public class LikeDislikeToLikeDislikeDto implements Converter<LikeDislike, LikeDislikeDto> {


    @Override
    public LikeDislikeDto convert(LikeDislike likeDislike) {
        LikeDislikeDto dto = new LikeDislikeDto();

        dto.setId(likeDislike.getId());
        dto.setLike(likeDislike.isLike());
        dto.setCreationDate(likeDislike.getCreationDate().toString().replace("T", " "));

        if (likeDislike.getUser() != null) {
            dto.setUserId(likeDislike.getUser().getId());
            dto.setUserUsername(likeDislike.getUser().getUsername());
        }

        if (likeDislike.getVideo() != null) {
            dto.setVideoId(likeDislike.getVideo().getId());
            dto.setVideoUrl(likeDislike.getVideo().getVideoUrl());
        }

        if (likeDislike.getComment() != null) {
            dto.setCommentId(likeDislike.getComment().getId());
            dto.setCommentContent(likeDislike.getComment().getContent());
        }

        return dto;
    }
    
	public List<LikeDislikeDto> convert(List<LikeDislike> likeDislikes){
		List<LikeDislikeDto> dto = new ArrayList<>();

        for(LikeDislike f : likeDislikes) {
            dto.add(convert(f));
        }

        return dto;
    }
}