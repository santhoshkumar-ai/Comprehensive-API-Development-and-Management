export function validateUser(user) {
  if (!user.name || !user.email || !user.phone) return false;
  return true;
}
