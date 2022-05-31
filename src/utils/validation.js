import toast from "react-hot-toast";

export const validateAddressForm = (address) => {
  if (!address.street) {
    toast.error("Please enter street address");
    return false;
  }
  if (!address.city) {
    toast.error("Please enter city");
    return false;
  }
  if (!address.state) {
    toast.error("Please Select a state.");
    return false;
  }
  if (!address.pincode) {
    toast.error("Please enter pincode");
    return false;
  }
  if (address.pincode.length !== 6) {
    toast.error("Please enter valid pincode");
    return false;
  }
  return true;
};

export const validateSignupForm = (form) => {
  const [firstName, lastName, email, password, confirmPassword] = form;
  if (!firstName.value) {
    toast.error("Please enter first name");
    return false;
  }
  if (!lastName.value) {
    toast.error("Please enter last name");
    return false;
  }
  if (!email.value) {
    toast.error("Please enter email");
    return false;
  }
  if (!password.value) {
    toast.error("Please enter password");
    return false;
  }
  if (password.value.length < 6) {
    toast.error("Please enter password with minimum 6 characters");
    return false;
  }
  if (!confirmPassword.value) {
    toast.error("Please enter confirm password");
    return false;
  }
  if (password.value !== confirmPassword.value) {
    toast.error("Password and confirm password must match");
    return false;
  }
  return true;
};
