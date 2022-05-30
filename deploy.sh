echo "pulling"
git pull

echo "building marnie-web-app"
npm --prefix ./marnie-web run build

echo "building caddy app"
docker-compose up -d 