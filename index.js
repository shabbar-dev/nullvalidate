function isNullOrEmpty(value) {
  // null / undefined
  if (value === null || value === undefined) return true;

  // string (empty or whitespace only)
  if (typeof value === "string" && value.trim() === "") return true;

  // array (empty array)
  if (Array.isArray(value) && value.length === 0) return true;

  // object (empty object: {})
  if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return true;

  return false;
}

module.exports = { isNullOrEmpty };
