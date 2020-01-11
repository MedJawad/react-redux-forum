package beans;

import java.util.List;
import java.util.Date;
import java.util.Collection;

public class Post {

	private int id;

	private String title;

	private String text;

	private int votes;

	private List<Comment> comments;

	private Date date;

	private Collection<User> user;

	private Collection<Group> group;

	private Comment comment;

}
