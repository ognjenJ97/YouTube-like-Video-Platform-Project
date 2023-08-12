package test.test.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import test.test.enumeration.Visibility;



@Entity
@Table(name = "videos")
public class Video {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(nullable = false)
    private String videoUrl;
    
    @Column(nullable = false)
    private String thumbnailUrl;
    
    @Column(nullable = false)
    private String description;
    
    @Enumerated(EnumType.STRING)
    private Visibility visibility;
    
    private boolean allowComments;
    
    private boolean showRatings;
    
    private boolean blocked;
    
    private int views;

    private LocalDateTime creationDate;
    
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @OneToMany(mappedBy = "video")
    private List<Comment> comments;
    
    @OneToMany(mappedBy = "video")
    @Where(clause = "video_id IS NOT NULL")
    private List<LikeDislike> likedDislikedVideos;

	public Video() {
		super();
	}

	@Override
	public String toString() {
		return "Video [id=" + id + ", videoUrl=" + videoUrl + ", thumbnailUrl=" + thumbnailUrl + ", description="
				+ description + ", visibility=" + visibility + ", allowComments=" + allowComments + ", showRatings="
				+ showRatings + ", blocked=" + blocked + ", views=" + views + ", creationDate=" + creationDate
				+ ", owner=" + owner + ", comments=" + comments + "]";
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
		Video other = (Video) obj;
		return java.util.Objects.equals(id, other.id);
	}
	
	

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVideoUrl() {
		return videoUrl;
	}

	public void setVideoUrl(String videoUrl) {
		this.videoUrl = videoUrl;
	}

	public String getThumbnailUrl() {
		return thumbnailUrl;
	}

	public void setThumbnailUrl(String thumbnailUrl) {
		this.thumbnailUrl = thumbnailUrl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Visibility getVisibility() {
		return visibility;
	}

	public void setVisibility(Visibility visibility) {
		this.visibility = visibility;
	}

	public boolean isAllowComments() {
		return allowComments;
	}

	public void setAllowComments(boolean allowComments) {
		this.allowComments = allowComments;
	}

	public boolean isShowRatings() {
		return showRatings;
	}

	public void setShowRatings(boolean showRatings) {
		this.showRatings = showRatings;
	}

	public boolean isBlocked() {
		return blocked;
	}

	public void setBlocked(boolean blocked) {
		this.blocked = blocked;
	}

	public int getViews() {
		return views;
	}

	public void setViews(int views) {
		this.views = views;
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

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public void addComment(Comment comment) {
	    comments.add(comment);
	    comment.setVideo(this);
	}

	public void removeComment(Comment comment) {
	    comments.remove(comment);
	    comment.setVideo(null);
	}
	
	public void addLikeDislikeForVideo(LikeDislike likeDislike) {
	    likedDislikedVideos.add(likeDislike);
	    likeDislike.setVideo(this);
	}

	public void removeLikeDislikeForVideo(LikeDislike likeDislike) {
	    likedDislikedVideos.remove(likeDislike);
	    likeDislike.setVideo(null);
	}

	public List<LikeDislike> getLikedDislikedVideos() {
		return likedDislikedVideos;
	}

	public void setLikedDislikedVideos(List<LikeDislike> likedDislikedVideos) {
		this.likedDislikedVideos = likedDislikedVideos;
	}
	
	

}