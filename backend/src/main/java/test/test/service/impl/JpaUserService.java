package test.test.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import test.test.enumeration.UserRole;
import test.test.model.User;
import test.test.repository.UserRepository;
import test.test.service.UserService;
import test.test.web.dto.UserPasswordChangeDto;

@Service
public class JpaUserService implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
    @Autowired
    private PasswordEncoder passwordEncoder;

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public Page<User> findAll(int brojStranice) {
		return userRepository.findAll(PageRequest.of(brojStranice,5));
	}


    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

	@Override
	public Optional<User> findbyUsername(String username) {
        return userRepository.findFirstByUsername(username);
	}

	@Override
	public User create(User user) {
        LocalDateTime now = LocalDateTime.now().withSecond(0).withNano(0);
		user.setRegistrationDate(now);
		user.setRole(UserRole.USER);
		user.setBlocked(false);
		return userRepository.save(user);
	}

	@Override
	public User update(User user) {
		return userRepository.save(user);
	}

	@Override
	public User findOne(Long id) {
		return userRepository.findOneById(id);
	}

	@Override
	public boolean changePassword(Long id, UserPasswordChangeDto dto) {
		   User user = findOne(id);

		    if (user == null) {
		        throw new EntityNotFoundException(); 
		    }
		    
		    String oldPassword = dto.getOldPassword();
		    String newPassword = dto.getPassword();
		    String confirmPassword = dto.getRepeatedPassword();
		    
		    boolean passwordsMatch = BCrypt.checkpw(oldPassword, user.getPassword());

		    if (!user.getUsername().equals(dto.getUsername()) || !passwordsMatch || newPassword.isEmpty() || !newPassword.equals(confirmPassword)) {
		        return false;
		    }
		    
		    String encryptedPassword = passwordEncoder.encode(newPassword);
		    user.setPassword(encryptedPassword);
		    update(user);

		    return true;
	}

	@Override
	@Transactional
	public void subscribeUser(Long subscriberId, Long channelId) {
		 User subscriber = userRepository.findById(subscriberId).orElse(null);
	        User channelOwner = userRepository.findById(channelId).orElse(null);

	        if (subscriber != null && channelOwner != null) {
	            channelOwner.addSubscriber(subscriber);
	            userRepository.save(channelOwner);
	            userRepository.save(subscriber);

	        } else {
	            System.out.println("Greska");
	        }
	}

	@Override
	@Transactional
	public void unsubscribeUser(Long subscriberId, Long channelId) {
		User subscriber = userRepository.findById(subscriberId).orElse(null);
        User channelOwner = userRepository.findById(channelId).orElse(null);

        if (subscriber != null && channelOwner != null) {
            channelOwner.removeSubscriber(subscriber);
            userRepository.save(subscriber);
            userRepository.save(channelOwner);
        } else {
            System.out.println("Greska");
        }
    }
	

}
