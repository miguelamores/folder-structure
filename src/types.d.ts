interface FileType {
  name: string;
  isFolder: boolean;
  children?: FileType[];
}
