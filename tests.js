describe("KeyCodeDoorLock", () => {
  describe("initial state", () => {
    const keyCodeDoorLock = new KeyCodeDoorLock();

    it("starts disarmed", () => {
      expect(keyCodeDoorLock.isArmed).toBe(true);
    });

    it("starts with password configured to 1234", () => {
      expect(keyCodeDoorLock.password).toBe("password1234");
    });

    it("starts with hard lock disabled", () => {
      expect(keyCodeDoorLock.isHardLocked).toBe(false);
    });

    it("starts with security question set to ice cream", () => {
      expect(keyCodeDoorLock.securityQuestionAnswer).toBe("ice cream");
    });
  });

describe("arming and disarming alarm", () => {
  it("can be armed and disarmed by entering the password", () => {
    const keyCodeDoorLock = new KeyCodeDoorLock();
    keyCodeDoorLock.isArmed = true;

    keyCodeDoorLock.armAlarm("password1234");

    expect(keyCodeDoorLock.isArmed).toBe(false);
  });

  it("can be toggled with repeated entries of password", () => {
    const keyCodeDoorLock = new KeyCodeDoorLock();
    keyCodeDoorLock.armAlarm("password1234");
    expect(keyCodeDoorLock.isArmed).toBe(false);

    keyCodeDoorLock.armAlarm("password1234");
    expect(keyCodeDoorLock.isArmed).toBe(true);

    keyCodeDoorLock.armAlarm("password1234");
    expect(keyCodeDoorLock.isArmed).toBe(false);

    keyCodeDoorLock.armAlarm("password1234");
    expect(keyCodeDoorLock.isArmed).toBe(true);
  });
  
describe("changing password", () => {
    it("changes the password", () => {
      const keyCodeDoorLock = new KeyCodeDoorLock();
      keyCodeDoorLock.isArmed = false;

      keyCodeDoorLock.changePassword("5678");
      expect(keyCodeDoorLock.password).toBe("5678");
  
      keyCodeDoorLock.changePassword("apple");
      expect(keyCodeDoorLock.password).toBe("apple");
    })
  });

describe("hard locking", () => {
  it("hard locks after entering incorrect password 3 times in a row", () => {
    const keyCodeDoorLock = new KeyCodeDoorLock();

    keyCodeDoorLock.armAlarm(["12345", "12345", "12345"]);
    expect(keyCodeDoorLock.isHardLocked).toBe(true);
  })
});
});
describe("it allows resetting password while hard-locked", () => {
  it('allows reset of password after verifying security question', () => {
    const keyCodeDoorLock = new KeyCodeDoorLock();
    keyCodeDoorLock.isHardLocked = true;



    keyCodeDoorLock.resetPassword("ice cream", "45678");
    expect(keyCodeDoorLock.isHardLocked).toBe(false);
    expect(keyCodeDoorLock.password).toBe("45678");
  })
})
});

describe("password management", () => {
  it("has to be disarmed to change password", () => {
    const keyCodeDoorLock = new KeyCodeDoorLock();
    keyCodeDoorLock.isArmed = true;
    
    keyCodeDoorLock.changePassword('5678');
    expect(keyCodeDoorLock.password).toBe("password1234");
  })
})
