package test.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.Comment;
import test.test.model.LikeDislike;
import test.test.model.Video;
import test.test.web.dto.CommentDto;
import test.test.web.dto.LikeDislikeDto;
import test.test.web.dto.VideoDto;

@Component
public class VideoToVideoDto implements Converter<Video, VideoDto> {



    @Override
    public VideoDto convert(Video video) {
        VideoDto dto = new VideoDto();

        dto.setId(video.getId());
        dto.setTitle(video.getTitle());
        dto.setVideoUrl(video.getVideoUrl());
        dto.setThumbnailUrl(video.getThumbnailUrl());
        dto.setDescription(video.getDescription());
        dto.setVisibility(video.getVisibility());
        dto.setAllowComments(video.isAllowComments());
        dto.setShowRatings(video.isShowRatings());
        dto.setBlocked(video.isBlocked());
        dto.setViews(video.getViews());
        dto.setCreationDate(video.getCreationDate().toString().replace("T", " "));
        dto.setOwnerId(video.getOwner().getId());
        dto.setOwnerUsername(video.getOwner().getUsername());

        // Dodavanje informacija o komentarima za ovaj video snimak
        List<CommentDto> commentDtos = new ArrayList<>();
        for (Comment comment : video.getComments()) {
            CommentDto commentDto = new CommentDto();
            commentDto.setId(comment.getId());
            commentDto.setContent(comment.getContent());
            commentDto.setCreationDate(comment.getCreationDate().toString().replace("T", " "));
            commentDto.setOwnerId(comment.getOwner().getId());
            commentDto.setOwnerUsername(comment.getOwner().getUsername());
            
            List<LikeDislikeDto> likeDislikeDtosForComment = new ArrayList<>();
            for(LikeDislike likeDislike : comment.getLikedDislikedComments()) {
            	LikeDislikeDto likeDislikeDto = new LikeDislikeDto();
            	likeDislikeDto.setId(likeDislike.getId());
            	likeDislikeDto.setLike(likeDislike.isLike());
            	likeDislikeDto.setCommentId(likeDislike.getComment().getId());
            	likeDislikeDto.setUserId(likeDislike.getUser().getId());
            	
            	likeDislikeDtosForComment.add(likeDislikeDto);
            }
            commentDto.setLikedDislikedComments(likeDislikeDtosForComment);
            
            commentDtos.add(commentDto);
        }
        dto.setComments(commentDtos);

        // Dodavanje informacija o like/dislike-ovima za ovaj video snimak
        List<LikeDislikeDto> likeDislikeDtos = new ArrayList<>();
        for (LikeDislike likeDislike : video.getLikedDislikedVideos()) {
            LikeDislikeDto likeDislikeDto = new LikeDislikeDto();
            likeDislikeDto.setId(likeDislike.getId());
            likeDislikeDto.setLike(likeDislike.isLike());
            likeDislikeDto.setUserId(likeDislike.getUser().getId());
            
            likeDislikeDtos.add(likeDislikeDto);
        }
        dto.setLikedDislikedVideos(likeDislikeDtos);

        return dto;
    }

	public List<VideoDto> convert(List<Video> videos){
		List<VideoDto> dto = new ArrayList<>();

        for(Video f : videos) {
            dto.add(convert(f));
        }

        return dto;
    }
}