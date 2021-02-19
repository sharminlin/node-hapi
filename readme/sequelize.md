
# sequelize 创建数据库

doc: [v6 documentation](https://sequelize.org/)

## 1. 安装依赖

```
npm i sequelize-cli -D
npm i sequelize
npm i mysql2
```

## 2. sequelize init

```
node_modules/.bin/sequelize init
```

```
├── config                       # 项目配置目录
|   ├── config.json              # 数据库连接的配置
├── models                       # 数据库 model
|   ├── index.js                 # 数据库连接的样板代码
├── migrations                   # 数据迁移的目录
├── seeders                      # 数据填充的目录
```

`config/config.json`替换成`config/config.js`，配合.env动态生成数据可连接配置

## 3. db create

生成数据库，该步骤首先得安装好mysql

```
node_modules/.bin/sequelize db:create

# 通过 --env 参数，指定为生产环境创建项目数据库
# node_modules/.bin/sequelize db:create --env production
```

# migration 表管理

## 1. sequelize migration:create 表结构文件

```
node_modules/.bin/sequelize migration:create --name create-shops-table
node_modules/.bin/sequelize migration:create --name create-goods-table
```

## 2. sequelize db:migrate 生成表

根据`up`规则生成对应mysql表

```
node_modules/.bin/sequelize db:migrate
```

## 3. sequelize db:migrate:undo 撤销

根据`down`规则撤销

```
node_modules/.bin/sequelize db:migrate:undo
```


## 4. 追加字段

```
node_modules/.bin/sequelize migration:create --name add-columns-to-shops-table
```


``` js
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('shops', 'address', { type: Sequelize.STRING }),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('shops', 'address'),
  ]),
};
```
