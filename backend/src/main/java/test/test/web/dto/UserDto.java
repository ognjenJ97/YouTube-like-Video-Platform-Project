package test.test.web.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import test.test.enumeration.UserRole;

public class UserDto {
	@JsonProperty
    private Long id;
	@JsonProperty
    private String username;
	@JsonProperty
    private String password;
	@JsonProperty
    private String firstName;
	@JsonProperty
    private String lastName;
	@JsonProperty
    private String email;
	@JsonProperty
    private String channelDescription;
	@JsonProperty
    private String registrationDate;
	@JsonProperty
    private byte[] picture;
	@JsonProperty
    private UserRole role;
	@JsonProperty
    private boolean blocked;
	@JsonProperty
    private List<UserDto> subscribers; // lista korisnika koji prate ovog korisnika
	@JsonProperty
    private List<UserDto> subscriptions; // lista korisnika na koje je ovaj korisnik pretplaćen
	@JsonProperty
    private List<VideoDto> videos; // lista video snimaka koje je ovaj korisnik objavio
    
	public UserDto() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getChannelDescription() {
		return channelDescription;
	}

	public void setChannelDescription(String channelDescription) {
		this.channelDescription = channelDescription;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	public boolean isBlocked() {
		return blocked;
	}

	public void setBlocked(boolean blocked) {
		this.blocked = blocked;
	}

	public List<UserDto> getSubscribers() {
		return subscribers;
	}

	public void setSubscribers(List<UserDto> subscribers) {
		this.subscribers = subscribers;
	}

	public List<UserDto> getSubscriptions() {
		return subscriptions;
	}

	public void setSubscriptions(List<UserDto> subscriptions) {
		this.subscriptions = subscriptions;
	}

	public List<VideoDto> getVideos() {
		return videos;
	}

	public void setVideos(List<VideoDto> videos) {
		this.videos = videos;
	}

//	public List<CommentDto> getComments() {
//		return comments;
//	}
//
//	public void setComments(List<CommentDto> comments) {
//		this.comments = comments;
//	}
//
//	public List<LikeDislikeDto> getLikedDislikedVideos() {
//		return likedDislikedVideos;
//	}
//
//	public void setLikedDislikedVideos(List<LikeDislikeDto> likedDislikedVideos) {
//		this.likedDislikedVideos = likedDislikedVideos;
//	}
//
//	public List<LikeDislikeDto> getLikedDislikedComments() {
//		return likedDislikedComments;
//	}
//
//	public void setLikedDislikedComments(List<LikeDislikeDto> likedDislikedComments) {
//		this.likedDislikedComments = likedDislikedComments;
//	}

    
}
