# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Folder structure challenge

You're given a data.js file containing an object representing a folder structure. Every object inside of the global object has a key called isFolder

isFolder will let you know if the current object contains children or not. If true - object will have children.

## User stories

- A user should be able to click on a folder item, upon clicking, the folder will be expanded - showing the files and folders inside of it.
- Use the data object to mimic a real world data folder scenario.
- The <Folder /> component takes in a prop called files - which is the data object that we talked about earlier.
- Based on the type of the file, appropriate extension icon should be visible right next to the label. For example, a index.js file will show a JavaScipt icon.
- Appropriate paddings and margins should be provided to the children files and folders.
- If a file is not a folder - nothing happens.
