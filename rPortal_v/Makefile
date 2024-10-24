NAME=react_C
VERSION=0.1

build:
	docker-compose build

start:
	docker-compose up -d
	docker-compose ps 
restart:
	docker-compose restart

rebuild:
	docker-compose build
	docker-compose down
	docker-compose up -d
	docker-compose ps 

fullbuild:
	docker-compose down --rmi all --volumes
	docker-compose up -d --build
	docker ps -a

exec:
	docker exec -it testreact_react_1 /bin/ash

logs:
	docker-compose logs -f

startpro:
	docker-compose -f docker-compose_pro.yaml up -d --build
	docker-compose -f docker-compose_pro.yaml ps

rebuildpro:
	docker-compose -f docker-compose_pro.yaml build --no-cache
	docker-compose -f docker-compose_pro.yaml up -d
	docker-compose -f docker-compose_pro.yaml ps

logspro:
	docker-compose -f docker-compose_pro.yaml logs -f

startdev:
	docker-compose -f docker-compose_pro.yaml down
	docker-compose up -d --build
	docker-compose ps

cypress:
	docker-compose -f docker-compose_pro.yaml exec cypress_c /bin/bash /E2Etest/runTest.sh