export const loginUser = async (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      // let response = await fetch(`http://localhost:8080/ForUs/Login?username=${action.infos.username}&password=${action.infos.password}&${action.infos.remember?"remember=yes":""}`);

      let response = await fetch(
        `http://localhost:8080/ForUs/Login?username=${
          action.infos.username
        }&password=${action.infos.password}&${
          action.infos.remember ? "remember=yes" : ""
        }`
        // ,
        // {
        //   method: "GET", // *GET, POST, PUT, DELETE, etc.
        //   mode: "cors", // no-cors, *cors, same-origin
        //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: "same-origin", // include, *same-origin, omit
        //   headers: {
        //     "Content-Type": "application/json"
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   redirect: "follow", // manual, *follow, error
        //   referrerPolicy: "no-referrer" // no-referrer, *client
        //   // body data type must match "Content-Type" header
        // }
      );

      console.log(response);

      if (response.ok) {
        // if HTTP-status is 200-299
        // get the response body
        let json = await response.json();
        console.log(json);
        alert("yay it worked");
        
        return json;
      } else {
        alert("HTTP-Error: " + response.status);
        return state;
      }
      break;

    default:
      return state;
      break;
  }
};

export default loginUser;
