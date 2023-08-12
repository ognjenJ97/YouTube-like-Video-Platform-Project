package test.test.web.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

import test.test.model.LikeDislike;
import test.test.service.LikeDislikeService;
import test.test.support.LikeDislikeDtoToLikeDislike;
import test.test.support.LikeDislikeToLikeDislikeDto;
import test.test.web.dto.LikeDislikeDto;

@RestController
@RequestMapping(value = "/api/likesdislikes", produces = MediaType.APPLICATION_JSON_VALUE)
public class LikeDislikeController {

    @Autowired
    private LikeDislikeService likeDislikeService;

    @Autowired
    private LikeDislikeDtoToLikeDislike toLikeDislike;

    @Autowired
    private LikeDislikeToLikeDislikeDto toLikeDislikeDto;

    @GetMapping("/{id}")
    public ResponseEntity<LikeDislikeDto> getOne(@PathVariable Long id) {
        LikeDislike likeDislike = likeDislikeService.findOne(id);

        if (likeDislike != null) {
            return new ResponseEntity<>(toLikeDislikeDto.convert(likeDislike), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<LikeDislikeDto>> getAll() {
        List<LikeDislike> likeDislikes = likeDislikeService.findAll();
        return new ResponseEntity<>(toLikeDislikeDto.convert(likeDislikes), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

    	LikeDislike likeDislike = likeDislikeService.deleteLikeDislike(id);
    	
        if (likeDislike != null) {
            return ResponseEntity.noContent().build(); // Vraća status 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // Vraća status 404 Not Found
        }
         
    } 

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<LikeDislikeDto> create(@Valid @RequestBody LikeDislikeDto likeDislikeDto) {
        LikeDislike likeDislike = toLikeDislike.convert(likeDislikeDto);
        LikeDislike savedLikeDislike = likeDislikeService.create(likeDislike);

        return new ResponseEntity<>(toLikeDislikeDto.convert(savedLikeDislike), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<LikeDislikeDto> update(@PathVariable Long id, @Valid @RequestBody LikeDislikeDto likeDislikeDto) {
        if (!id.equals(likeDislikeDto.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } 

        LikeDislike likeDislike = toLikeDislike.convert(likeDislikeDto);
        LikeDislike updatedLikeDislike = likeDislikeService.create(likeDislike);

        return new ResponseEntity<>(toLikeDislikeDto.convert(updatedLikeDislike), HttpStatus.OK);
    }
}