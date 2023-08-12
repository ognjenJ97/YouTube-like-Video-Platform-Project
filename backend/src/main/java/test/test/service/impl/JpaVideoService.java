package test.test.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import test.test.enumeration.Visibility;
import test.test.model.Comment;
import test.test.model.LikeDislike;
import test.test.model.User;
import test.test.model.Video;
import test.test.repository.VideoRepository;
import test.test.service.VideoService;

@Service
public class JpaVideoService implements VideoService {
	
	@Autowired
	private VideoRepository videoRepository;

	@Override
	public Video findOne(Long id) {
		return videoRepository.findOneById(id);
	}

	@Override
	public Video createVideo(Video video) {
        LocalDateTime now = LocalDateTime.now().withSecond(0).withNano(0);
        video.setCreationDate(now);
        video.setAllowComments(true);
        video.setBlocked(false);
        video.setShowRatings(true);
        video.setVisibility(Visibility.PUBLIC);
        return videoRepository.save(video);
	}
	

	@Override
	public Video updateVideo(Video video) {
		 return videoRepository.save(video);
	}

	@Override
	public Video delete(Long id) { 
		  Video video = findOne(id);

		    if (video != null) {
		        for (Comment comment : video.getComments()) {
		            comment.setVideo(null);
		        }
		        for (LikeDislike likeDislike : video.getLikedDislikedVideos()) {
		            likeDislike.setVideo(null);
		        }
		        User user = video.getOwner();
		        user.removeVideo(video);

		        videoRepository.delete(video);
		        return video;
		    }
		    return null;
	}



	@Override
	public Page<Video> sort(String title, int sortOrder, int pageNo) {
		 switch (sortOrder) {
         case 1:
             return videoRepository.findAllOrderByViewsAsc(title, PageRequest.of(pageNo, 9));
         case 2:
             return videoRepository.findAllOrderByViewsDesc(title, PageRequest.of(pageNo, 9));
         case 3:
             return videoRepository.findAllOrderByCreationDateAsc(title, PageRequest.of(pageNo, 9));
         case 4:
             return videoRepository.findAllOrderByCreationDateDesc(title, PageRequest.of(pageNo, 9));
         default:
             throw new IllegalArgumentException("Invalid sort order: " + sortOrder);
     }
	}

	@Override
	public Page<Video> find(String title, int pageNo) {
		return videoRepository.search(title, PageRequest.of(pageNo, 9));
	}

	@Override
	public Page<Video> findAll(int pageNo) {
		return videoRepository.findAll(PageRequest.of(pageNo, 9));
	}

	@Override
	public Video newView(Long id) {
		Video video = findOne(id);
		
		if (video != null) {
			
			int newVIews = video.getViews();
			video.setViews(newVIews + 1);
			
			videoRepository.save(video);
			return video;
		}
		
		return null;
	}

	@Override
	public List<Video> findAllBlocked() {
		return videoRepository.findAllBlocked();
	}
	
	
	
	}



