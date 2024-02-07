//defining a User class
class User {
    name = ""
    isActive = false;
    
    //method to update user's name
    updateName(newName) {
      this.name = newName; // sets the name property to the new name
    }
  
    // method to toggle the user's active status
    toggleStatus() {
      this.isActive = !this.isActive; // toggle the value of the isActive property
    }
}