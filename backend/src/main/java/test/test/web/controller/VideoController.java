package test.test.web.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import test.test.model.Video;
import test.test.service.VideoService;
import test.test.support.VideoDtoToVideo;
import test.test.support.VideoToVideoDto;
import test.test.web.dto.VideoDto;



@RestController
@RequestMapping(value = "/api/videos", produces = MediaType.APPLICATION_JSON_VALUE)
public class VideoController {

    @Autowired
    private VideoService videoService;

    @Autowired
    private VideoToVideoDto toVideoDto;

    @Autowired
    private VideoDtoToVideo toVideo;
    
    private LocalDateTime getLocalDateTime(String dateTime) {
        if (dateTime == null || dateTime.trim().isEmpty()) {
            return null; // Vrati null za slučaj kada je vrednost prazan string ili null
        }

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return LocalDateTime.parse(dateTime, formatter);
    }
    
    
    
    
//  @PreAuthorize("hasAnyRole('KORISNIK', 'ADMIN')")
  @GetMapping("/blocked")
  public ResponseEntity<List<VideoDto>> getAll(){

      List<Video> video = videoService.findAllBlocked();

      return new ResponseEntity<>(toVideoDto.convert(video), HttpStatus.OK);
  }
    
    
   

    @GetMapping("/{id}")
    public ResponseEntity<VideoDto> getOne(@PathVariable Long id) {
        Video video = videoService.findOne(id);

        if (video != null) {
            return new ResponseEntity<>(toVideoDto.convert(video), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<VideoDto>> getAll(
            @RequestParam(required = false) String title,
            @RequestParam(value = "sortOrder", defaultValue = "2") int sortOrder,
            @RequestParam(value = "pageNo", defaultValue = "0") int pageNo) {

        Page<Video> page;

    	System.out.println("ovo je sortOrder:" + sortOrder);
    	
        try {
            page = videoService.sort(title, sortOrder, pageNo);
        } catch (Exception e) {
            page = videoService.findAll(pageNo);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Total-Pages", Integer.toString(page.getTotalPages()));

        return new ResponseEntity<>(toVideoDto.convert(page.getContent()), headers, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        Video video = videoService.delete(id);

        if (video != null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<VideoDto> create(@Valid @RequestBody VideoDto videoDto) {
        Video video = toVideo.convert(videoDto);
        Video savedVideo = videoService.createVideo(video);

        return new ResponseEntity<>(toVideoDto.convert(savedVideo), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<VideoDto> update(@PathVariable Long id, @Valid @RequestBody VideoDto videoDto) {

        if (!id.equals(videoDto.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Video video = toVideo.convert(videoDto);

        Video savedVideo = videoService.updateVideo(video);

        return new ResponseEntity<>(toVideoDto.convert(savedVideo), HttpStatus.OK);
    }
    
    
    @GetMapping("/{id}/view")
    public ResponseEntity<VideoDto> newView(@PathVariable Long id) {
        Video video = videoService.newView(id);

        if (video != null) {
            return new ResponseEntity<>(toVideoDto.convert(video), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    
}
