# Setup Environment
* Intall [NodeJS](https://nodejs.org/en/download), NodeVersion: v20.10.0
* Install [Postman](https://www.postman.com/downloads/). Disarankan menggunakan : Linux(Ubuntu distro) atau WSL.
* Editor, disarankan [VSCode](https://code.visualstudio.com/download)
* Install [Git System](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Clone [this repo](https://github.com/josuadiontamba/testing-postman-node.git): `git clone https://github.com/josuadiontamba/testing-postman-node.git`
* Pada folder testing-postman-node, Run command:install packages: `npm i`

# Setup Postman
* Collection: /test/Postman Testing Collection.postman_collection.json
* Environment: test/postman-testing-env.postman_environment.json
* Import collection and environment to Postman from folder: test/.


# Run 
* run command: `npm run start-dev`, didalam folder: testing-postman-node
* In Postman: send one by one
* In Postman: test each folder
* In Postman: test One Collection
* Last: Run 3 4 ... times


# Notes:
* Conflict port for MacOS: use port >8000