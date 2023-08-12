package test.test.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;

import test.test.model.User;
import test.test.web.dto.UserPasswordChangeDto;


public interface UserService {
	
    User findOne(Long id);

    List<User> findAll();

    Page<User> findAll(int brojStranice);

    User create(User user);
    
    User update(User user);

    void delete(Long id);

    Optional<User> findbyUsername(String username);

	boolean changePassword(Long id, UserPasswordChangeDto dto);
	
    void subscribeUser(Long subscriberId, Long channelId);
    
    void unsubscribeUser(Long subscriberId, Long channelId);

}
