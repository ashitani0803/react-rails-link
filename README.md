# Docker-React-Rails-Environment
<br>

## RailsAPI+React+PostgreSQLをDockerで環境構築

### 起動コマンド

1. `$ docker-compose build`
   - Dockerfileを読み込み、イメージのダウンロードと構築

2. `$ docker-compose run front yarn`
   - コンテナ側のワーキングディレクトリ上で`front yarn`を実行
  
3. `$ docker-compose run api rails db:create`
   - コンテナ側のワーキングディレクトリ上で`api rails db:create`を実行
  
4. `$ docker-compose up`
   - docker-compose.ymlファイルのservicesに定義された各コンテナを起動
