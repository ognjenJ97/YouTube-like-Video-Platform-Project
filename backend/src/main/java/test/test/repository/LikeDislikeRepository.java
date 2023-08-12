package test.test.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.test.model.LikeDislike;

@Repository
public interface LikeDislikeRepository extends JpaRepository<LikeDislike, Long>{

	LikeDislike findOneById(Long id);

}
