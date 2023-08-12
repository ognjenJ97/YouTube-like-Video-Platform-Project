package test.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.test.model.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{

	Comment findOneById(Long id);

}
