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

import test.test.model.Comment;
import test.test.service.CommentService;
import test.test.support.CommentDtoToComment;
import test.test.support.CommentToCommentDto;
import test.test.web.dto.CommentDto;

@RestController
@RequestMapping(value = "/api/comments", produces = MediaType.APPLICATION_JSON_VALUE)
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private CommentDtoToComment toComment;

    @Autowired
    private CommentToCommentDto toCommentDto;

    @GetMapping("/{id}")
    public ResponseEntity<CommentDto> getOne(@PathVariable Long id) {
        Comment comment = commentService.findOne(id);

        if (comment != null) {
            return new ResponseEntity<>(toCommentDto.convert(comment), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<CommentDto>> getAll() {
        List<Comment> comments = commentService.findAll();
        return new ResponseEntity<>(toCommentDto.convert(comments), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        Comment comment = commentService.deleteComment(id);

        if (comment != null) { 
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CommentDto> create(@Valid @RequestBody CommentDto commentDto) {
        Comment comment = toComment.convert(commentDto);
        Comment savedComment = commentService.saveComment(comment);

        return new ResponseEntity<>(toCommentDto.convert(savedComment), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CommentDto> update(@PathVariable Long id, @Valid @RequestBody CommentDto commentDto) {
        if (!id.equals(commentDto.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Comment comment = toComment.convert(commentDto);
        Comment updatedComment = commentService.saveComment(comment);

        return new ResponseEntity<>(toCommentDto.convert(updatedComment), HttpStatus.OK);
    }
}
