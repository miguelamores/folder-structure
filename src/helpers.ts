export function getIconName(file: string) {
  return file.split(".").pop();
}

export function getFolderIconName(expanded: boolean) {
  return expanded ? "caretDown" : "caretRight";
}
