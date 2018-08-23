An example of running shared code modules in a related React Native and React web app.

## Native App startup

```sh
cd native-project
yarn start
```

## Web App Startup

```sh
cd web-project
yarn start
```

### Code editor configuration

Since local copies of the `/modules/src` folders are copied into each project, you must be careful to not try to edit the copies, as they are not in source control and will be overwritten.

Whatever code editor/IDE you use, you should add a rule to ignore all of the copied files, as they will help clean up your editor as well as prevent searches from returning results from the copies.

For example, with vscode add the workspace setting:

```js
"settings": {
    "files.exclude":{
        // defaults
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        // custom
        "src/modules/**": true
    }
}
```