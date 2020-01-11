package beans;

import java.util.Date;
import java.util.Collection;

public class Group {

	private int id;

	private String name;

	private String description;

	private User admin;

	private Date dateOfCreation;

	private Post post;

	private Collection<User> user;

}
