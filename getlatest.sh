unalias yarn pm2
git checkout ./
git pull origin develop
yarn install
yarn build && pm2 restart tcgcollective
