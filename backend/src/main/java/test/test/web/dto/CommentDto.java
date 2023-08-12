package test.test.web.dto;

import java.util.List;

public class CommentDto {

    private Long id;
    private String content;
    private String creationDate;
    private Long ownerId;
    private String ownerUsername; // DTO objekat za vlasnika komentara
    private Long videoId; // DTO objekat za video snimak na koji se odnosi komentar
    private String videoUrl;
    private List<LikeDislikeDto> likedDislikedComments; // lista like/dislike-ova za ovaj komentar
    
	public CommentDto() {
		super();
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

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}


	public Long getVideoId() {
		return videoId;
	}

	public void setVideoId(Long videoId) {
		this.videoId = videoId;
	}

	public String getVideoUrl() {
		return videoUrl;
	}

	public void setVideoUrl(String videoUrl) {
		this.videoUrl = videoUrl;
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

	public List<LikeDislikeDto> getLikedDislikedComments() {
		return likedDislikedComments;
	}

	public void setLikedDislikedComments(List<LikeDislikeDto> likedDislikedComments) {
		this.likedDislikedComments = likedDislikedComments;
	}

	
	
    
}
