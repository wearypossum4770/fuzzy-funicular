const hideFields = [
  "_id",
  "_v",
  "__v",
  "alive",
  "is_active",
  "is_staff",
  "last_login",
  "is_superuser",
  "owasp_safe_password",
  "password",
];
const locals = { title: "My App", email: "me@myapp.com" };
const json_url_config = { limit: "1mb", extended: true };
export { hideFields, locals, json_url_config };
