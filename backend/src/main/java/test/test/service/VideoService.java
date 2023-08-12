package test.test.service;

import java.util.List;

import org.springframework.data.domain.Page;

import test.test.model.Video;

public interface VideoService {
	
    Video findOne(Long id);
    
    Page<Video> findAll(int pageNo);
    
    List<Video> findAllBlocked();
    
    Page<Video> find(String title, int pageNo);

    Video createVideo(Video video);

    Video updateVideo(Video video);

    Video delete(Long id);
    
    Video newView(Long id);

	Page<Video> sort(String title, int sortOrder, int pageNo);
}
