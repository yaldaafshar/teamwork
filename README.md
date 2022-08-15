# cpsc671-hw-problem9
## Requirments
1. Node.js and npm
2. Yarn
3. A MongoDB Service (Either localhost or on the web)
<!-- 3. docker -->
<!-- 4. creat a docker instance of mongo -->

## How to run
1. execute "yarn install"
2. Create a .env file and setup all the environment variables listed in .env.txt. An example would be like this:

PORT=3000

MONGO_URL=mongodb://localhost:27017 (if you have the mongo docker container running on your local system, if not connect to a remote server)

MONGO_DB=cpsc_671_hw_problem9

NODE_ENV=development

APP_NAME=CSPC-671-HW-Problem9

TOKEN_KEY=D65DB9BDFF3ED4A244CFCB79D6E93

TOKEN_EXP=2h

SAMPLE_AVATAR_URL=sample_images/sample_avatar.jpg

NO_IMAGE_URL=sample_images/no_image.jpg

3. execute "yarn dev"
