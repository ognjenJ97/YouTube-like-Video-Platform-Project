package test.test.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PreRemove;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import test.test.enumeration.UserRole;

@Entity
@Table(name = "users")
public class User {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private String username;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String firstName;
    
    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    private String channelDescription;

    private LocalDateTime registrationDate;
    
    @Lob
    private byte[] picture;
    
    @Enumerated(EnumType.STRING)
    private UserRole role;
    
    private boolean blocked;
    
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_subscriptions",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "subscription_id")
    )
    private List<User> subscribers;
    
    @ManyToMany(mappedBy = "subscribers")
    private List<User> subscriptions;
    
    @OneToMany(mappedBy = "owner")
    private List<Video> videos;

    @OneToMany(mappedBy = "owner")
    private List<Comment> comments;
    
    @OneToMany(mappedBy = "user")
    @Where(clause = "video_id IS NOT NULL")
    private List<LikeDislike> likedDislikedVideos;

    @OneToMany(mappedBy = "user")
    @Where(clause = "comment_id IS NOT NULL")
    private List<LikeDislike> likedDislikedComments;

	public User() {
		super();
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", email=" + email + ", channelDescription=" + channelDescription
				+ ", registrationDate=" + registrationDate + ", role=" + role + ", blocked=" + blocked
				+ ", subscribers=" + subscribers + ", videos=" + videos + ", comments=" + comments
				+ ", likedDislikedVideos=" + likedDislikedVideos + ", likedDislikedComments=" + likedDislikedComments
				+ "]";
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
		User other = (User) obj;
		return java.util.Objects.equals(id, other.id);
	}
	
    @PreRemove
    private void removeUserFromSubscriptions() {
        // Uklanjanje ovog korisnika iz liste pretplata drugih korisnika
        for (User subscriber : subscribers) {
            subscriber.getSubscriptions().remove(this);
        }
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

	public List<User> getSubscriptions() {
		return subscriptions;
	}

	public void setSubscriptions(List<User> subscriptions) {
		this.subscriptions = subscriptions;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
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

	public LocalDateTime getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(LocalDateTime registrationDate) {
		this.registrationDate = registrationDate;
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

	public List<User> getSubscribers() {
		return subscribers;
	}

	public void setSubscribers(List<User> subscribers) {
		this.subscribers = subscribers;
	}

	public List<Video> getVideos() {
		return videos;
	}

	public void setVideos(List<Video> videos) {
		this.videos = videos;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public List<LikeDislike> getLikedDislikedVideos() {
		return likedDislikedVideos;
	}

	public void setLikedDislikedVideos(List<LikeDislike> likedDislikedVideos) {
		this.likedDislikedVideos = likedDislikedVideos;
	}

	public List<LikeDislike> getLikedDislikedComments() {
		return likedDislikedComments;
	}

	public void setLikedDislikedComments(List<LikeDislike> likedDislikedComments) {
		this.likedDislikedComments = likedDislikedComments;
	}
    
	public void addSubscriber(User subscriber) {
	    subscribers.add(subscriber);
//	    subscriber.getSubscribers().add(this);
	}
    
	public void removeSubscriber(User subscriber) {
	    subscribers.remove(subscriber);
//	    subscriber.getSubscribers().remove(this);
	}
    
	public void addVideo(Video video) {
	    videos.add(video);
	    video.setOwner(this);
	}

	public void removeVideo(Video video) {
	    videos.remove(video);
	    video.setOwner(null);
	}
	
	public void addComment(Comment comment) {
	    comments.add(comment);
	    comment.setOwner(this);
	}

	public void removeComment(Comment comment) {
	    comments.remove(comment);
	    comment.setOwner(null);
	}
    
	public void addLikeDislikeForVideo(LikeDislike likeDislike) {
	    likedDislikedVideos.add(likeDislike);
	    likeDislike.setUser(this);
	}

	public void removeLikeDislikeForVideo(LikeDislike likeDislike) {
	    likedDislikedVideos.remove(likeDislike);
	    likeDislike.setUser(null);
	}
    
	public void addLikeDislikeForComment(LikeDislike likeDislike) {
	    likedDislikedComments.add(likeDislike);
	    likeDislike.setUser(this);
	}

	public void removeLikeDislikeForComment(LikeDislike likeDislike) {
	    likedDislikedComments.remove(likeDislike);
	    likeDislike.setUser(null);
	}
	
}