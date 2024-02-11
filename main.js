function KeyCodeDoorLock(isLocked, isHardLocked, password){
    this.isArmed = true;
    this.isHardLocked = false;
    this.password = "password1234";
    this.securityQuestionAnswer = "ice cream";
    this.failures = 0;
};

KeyCodeDoorLock.prototype.armAlarm = function(enterPassword) {
    if (enterPassword.length == 3){
        this.isHardLocked = (enterPassword[0] != this.password 
            && enterPassword[1] != this.password 
            && enterPassword[2] != this.password ) ? true : false;
    }
    else {
        this.isArmed = (this.password = enterPassword) ? !this.isArmed : this.isArmed;
    }
}

KeyCodeDoorLock.prototype.changePassword = function(newPassword) {
    this.password = (!this.isArmed) ? newPassword : this.password;
};

KeyCodeDoorLock.prototype.resetPassword = function(securityQuestion, newPassword) {
        this.isHardLocked = (securityQuestion == this.securityQuestionAnswer) ? !this.isHardLocked : this.isHardLocked;
        this.password = (securityQuestion == this.securityQuestionAnswer) ? newPassword : this.password;
};
