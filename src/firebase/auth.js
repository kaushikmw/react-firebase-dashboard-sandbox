import firebase from "./config";
import "firebase/auth";

export const signup = async ({ firstName, lastName, email, password }) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await resp.user.updateProfile({ displayName: `${firstName} ${lastName}` });
};
