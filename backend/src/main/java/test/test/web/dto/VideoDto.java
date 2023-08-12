package test.test.web.dto;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import test.test.enumeration.Visibility;


public class VideoDto {
    private Long id;
    
    @Length(min= 1, max = 70)
    private String title;
    private String videoUrl;
    private String thumbnailUrl;
    @Length(max = 300)
    private String description;
    private Visibility visibility;
    private boolean allowComments;
    private boolean showRatings; 
    private boolean blocked;
    private int views;
    private String creationDate;
    private Long ownerId;
    private String ownerUsername;// DTO objekat za vlasnika video snimka
    private List<CommentDto> comments; // lista komentara za ovaj video snimak
    private List<LikeDislikeDto> likedDislikedVideos; // lista like/dislike-ova za ovaj video snimak
    
	public VideoDto() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
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
	public String getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}

	public List<CommentDto> getComments() {
		return comments;
	}
	public void setComments(List<CommentDto> comments) {
		this.comments = comments;
	}
	public List<LikeDislikeDto> getLikedDislikedVideos() {
		return likedDislikedVideos;
	}
	public void setLikedDislikedVideos(List<LikeDislikeDto> likedDislikedVideos) {
		this.likedDislikedVideos = likedDislikedVideos;
	}
	public Long getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(Long ownerId) {
		this.ownerId = ownerId;
	}
	public String getOwnerUsername() {
		return ownerUsername;
	}
	public void setOwnerUsername(String ownerUsername) {
		this.ownerUsername = ownerUsername;
	}

    
}
