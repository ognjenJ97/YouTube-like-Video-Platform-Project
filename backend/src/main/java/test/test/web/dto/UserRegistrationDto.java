package test.test.web.dto;

import javax.validation.constraints.NotBlank;

public class UserRegistrationDto extends UserDto{
    @NotBlank(message = "Lozinka nije zadata.")
    private String password;

    @NotBlank(message = "Ponovljena lozinka nije zadata.")
    private String repeatedPassword;

	public UserRegistrationDto() {
		super();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRepeatedPassword() {
		return repeatedPassword;
	}

	public void setRepeatedPassword(String repeatedPassword) {
		this.repeatedPassword = repeatedPassword;
	}


    
    
}
