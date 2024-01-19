export default function generateUniqueId() {
  const timestamp = new Date().getTime().toString(16); // Convert timestamp to hexadecimal
  const randomPart = Math.random().toString(16).substring(2); // Remove '0.' from the start
  const uniqueId = `${timestamp}${randomPart}`;
  return uniqueId;
}
