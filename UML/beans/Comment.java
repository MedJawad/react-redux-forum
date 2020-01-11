package beans;

import java.util.Date;
import java.util.Collection;

public class Comment {

	private int id;

	private Post post;

	private User owner;

	private Date date;

	private Collection<User> user;

	private Collection<Post> post;

}
