describe("User class", () => {
  let user;

  beforeEach(() => {
    // Create a new instance of User before each test
    user = new User();
    user.name = 'John Doe';
    user.isActive = true;
  });

  it("should update the user's name", () => {
    user.updateName('Jane Doe');
    expect(user.name).toBe('Jane Doe');
  });

  it("should toggle the user's active status", () => {
    user.toggleStatus();
    expect(user.isActive).toBe(false);
  });

});