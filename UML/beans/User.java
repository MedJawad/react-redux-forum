package beans;

import java.util.Collection;

public class User {

	private int id;

	private int nbrOfPosts;

	private int nbrOfComments;

	private int nbrOfVotes;

	private String username;

	private String password;

	private Post post;

	private Collection<Group> group;

	private Comment comment;

}
