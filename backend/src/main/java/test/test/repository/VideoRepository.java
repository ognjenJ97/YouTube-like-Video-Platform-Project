package test.test.repository;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import test.test.model.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long>  {

	Video findOneById(Long id);


	@Query("SELECT v FROM Video v WHERE " +
	        "(:title IS NULL OR v.title LIKE %:title%) " +
	        "ORDER BY v.views DESC")
	Page<Video> search(
			@Param("title") String title,
			Pageable pageable
    );
    
	@Query("SELECT v FROM Video v WHERE (:title IS NULL OR v.title LIKE %:title%) AND v.visibility = 'PUBLIC' AND v.blocked = false ORDER BY v.views ASC")
	Page<Video> findAllOrderByViewsAsc(@Param("title") String title, Pageable pageable);

	@Query("SELECT v FROM Video v WHERE (:title IS NULL OR v.title LIKE %:title%) AND v.visibility = 'PUBLIC' AND v.blocked = false ORDER BY v.views DESC")
	Page<Video> findAllOrderByViewsDesc(@Param("title") String title, Pageable pageable);

	@Query("SELECT v FROM Video v WHERE (:title IS NULL OR v.title LIKE %:title%) AND v.visibility = 'PUBLIC' AND v.blocked = false ORDER BY v.creationDate ASC")
	Page<Video> findAllOrderByCreationDateAsc(@Param("title") String title, Pageable pageable);

	@Query("SELECT v FROM Video v WHERE (:title IS NULL OR v.title LIKE %:title%) AND v.visibility = 'PUBLIC' AND v.blocked = false ORDER BY v.creationDate DESC")
	Page<Video> findAllOrderByCreationDateDesc(@Param("title") String title, Pageable pageable);


	@Query("SELECT v FROM Video v WHERE v.blocked = true ORDER BY v.views ASC")
	List<Video> findAllBlocked();
    
    
    
    
    
}
