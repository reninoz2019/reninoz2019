# platform-ui

## Node Commands for development

### Project setup
```
npm install
```

### Compiles and hot-reloads for local development
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

```
npm run dev-build
```
+
## External environment variable 
In order to achieve this, 
+ 1. Configuration file, settings.js is excluded from compilation.
+ 2. Configuration file, settings.js, "constructs" the env before Vue app is run.
+ 3. Environment variable can be updated during runtime
+ 4. Environment variable can be loaded from env. file to support dev environment.
+
+So here is code structure:
+
+root_project_dir:
+ ├─> cfg
+ │   └── settings.js
+ ├─> public
+ │   ├── favicon.ico
+ │   └── index.html
+ ├─> src
+ │   ├── App.vue
+ |--> test

+Here is the code structure after build:
+www
+ ├─> cfg
+ │   └── settings.js
+ ├─> font
+ ├── favicon.ico
+ ├─> img
+ │   └── logo.09e0e4e1.png
+ ├── index.html
+ └─> app.js

## Delopy in NGINX with sub-path, e.g. http://[domain]/pf/act
1. build pf-ui with 
    ````
    npm run dev-build
    ````

2. create 'pf' folder under NGINX html root folder, e.g. /html. Copy www folder under target to 'pf' folder
and rename it to 'act';
3. configure /html/pf/act/cfg/settings.js as follow:
    ```
    VUE_APP_LOGIN_REDIRECT_URL: 'http://[domain]/pf/act',
    ```  
4. configure WSO2 Identify Server to add path for login redirection;   
5. put the following configure under 'server' section in NGINX configuraiton file nginx.conf as follow for the deployment
    ```
    location /pf/act {
        alias  html/pf/act;
        index  index.html index.htm;
    }
    ```
6. restart NGINX