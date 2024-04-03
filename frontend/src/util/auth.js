import { redirect } from "react-router-dom";
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expiratinDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expiratinDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const tokenDuration = getTokenDuration();
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokerLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
}
