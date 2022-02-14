class UserStore {
  userStore = [
    {
      id: "1",
      username: "user1",
      password: "pass123",
      displayName: "user1",
      email: "email@email.com",
      github_id: "123456789"
    },
    {
      id: "2",
      username: "user2",
      password: "pass123",
      displayName: "user2",
      email: "email@email.com",
      google_id: "123456789"
    }
  ];

  GetUser(id: string, password: string, provider: string): any {
    const findUser = Object.values(this.userStore).filter(u => {
      switch (provider) {
        case "google":
          return u.google_id === id;
        case "github":
          return u.github_id === id;
        case "local":
          return u.username === id && u.password === password;
        default:
          return false;
      }
    });
    if (findUser.length > 0) {
      const { id, username, displayName } = findUser[0];
      return { id, username, displayName };
    } else {
      //throw "User Not Found";
      return null;
    }
  }
}

const userStore = new UserStore();

export default userStore;
