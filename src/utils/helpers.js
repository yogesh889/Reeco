function convertHyphenatedToCapitalized(inputString) {
  if (!inputString) return;

  if (!inputString.includes("-")) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }

  return inputString
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function generateStatusColor(status) {
  if (!status) return;

  if (status === "approved") return "success";
  else if (status === "missing") return "warning";
  else if (status === "missing-urgent") return "error";
  else return "default";
}

export { convertHyphenatedToCapitalized, generateStatusColor };
