package test.test.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Where;


@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private LocalDateTime creationDate;
    
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @ManyToOne
    @JoinColumn(name = "video_id")
    private Video video;
    
    @OneToMany(mappedBy = "comment")
    @Where(clause = "comment_id IS NOT NULL")
    private List<LikeDislike> likedDislikedComments;

	public Comment() {
		super();
	}

	@Override
	public String toString() {
		return "Comment [id=" + id + ", content=" + content + ", creationDate=" + creationDate + ", owner=" + owner
				+ ", video=" + video.getId() + "]";
	}



	@Override
	public int hashCode() {
		return java.util.Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Comment other = (Comment) obj;
		return java.util.Objects.equals(id, other.id);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public LocalDateTime getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(LocalDateTime creationDate) {
		this.creationDate = creationDate;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public Video getVideo() {
		return video;
	}

	public void setVideo(Video video) {
		this.video = video;
	}
    
	public void addLikeDislikeForComment(LikeDislike likeDislike) {
	    likedDislikedComments.add(likeDislike);
	    likeDislike.setComment(this);
	}

	public void removeLikeDislikeForComment(LikeDislike likeDislike) {
	    likedDislikedComments.remove(likeDislike);
	    likeDislike.setComment(null);
	}

	public List<LikeDislike> getLikedDislikedComments() {
		return likedDislikedComments;
	}

	public void setLikedDislikedComments(List<LikeDislike> likedDislikedComments) {
		this.likedDislikedComments = likedDislikedComments;
	}
    
    
    
}