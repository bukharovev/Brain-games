install: 
	npm install
start: 
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish
make lint:
	npx eslint /home/evgeny/brain-games
