const invertString = (string) => (
  (string === '') ? '' : invertString(string.substr(1)) + string.charAt(0)
);

export default invertString;