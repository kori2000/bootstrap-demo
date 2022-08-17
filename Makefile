compile:
	npm run build
dev:
	npm run dev
build:
	docker-compose build
up:
	docker-compose up -d
	sleep 3
	docker logs bootstrap-demo-app-1
down:
	docker-compose down
remove:
	docker rmi bootstrap-demo_app 