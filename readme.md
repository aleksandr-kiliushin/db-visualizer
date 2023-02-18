# DATABASE VISUALIZER &middot; [![npm version](https://img.shields.io/npm/v/db-visualizer)](https://www.npmjs.com/package/db-visualizer)

<video width="320" height="240" controls>
  <source src="demo.mp4" type="video/mp4">
</video>

## FOR USERS

1.  `npm install --save-dev db-visualizer`;
2.  `npm pkg set scripts.visualize-db="ts-node ./node_modules/db-visualizer/bin/index.js && npm --prefix ./node_modules/db-visualizer run dev:client"`;
3.  `mkdir ./.db-visualizer`;
4.  `touch ./.db-visualizer/config.js`.
5.  Specify your DB configuration. Example:
    ```
    module.exports = {
    	DB_HOST: "localhost",
    	DB_NAME: "my_app_db",
    	DB_PORT: "5432",
    	POSTGRES_PASSWORD: "123",
    	POSTGRES_USERNAME: "postgres",
    }
    ```
6.  Generate a dump of your DB and put it to `./.db-visualizer/dump.sql`;
7.  Add `/.db-visualizer/dump.sql` to `/.gitignore`;
8.  `npm run visualize-db`.

## FOR CONTRIBUTORS

1. `git clone git@github.com:aleksandr-kiliushin/db-visualizer.git`;
2. `cd db-visualizer`;
3. `npm i`;
4. `cp ./.env.example ./.env`;
5. `cp ./.db-visualizer/dump.sql.example ./.db-visualizer/dump.sql`;
6. `npm run launch-sample-db`;
7. `npm run restore-sample-db-from-dump`;
8. `npm run generate-db-portrait`;
9. `npm run test`.
10. `npm run dev:client`.
