# JR-DEV

React App to scrape junior developer jobs from GitHub and tabulate them.
Source: [Video by freeCodeCamp](https://www.youtube.com/watch?v=lauywdXKEXI)


## Dependencies
1. yarn
2. react
3. express
4. redis
5. material-ui
6. fetch
7. cron

## Instructions to start locally

### Start react app

```
$ /client > yarn start
```

### Start redis
```
$ > redis-server
```

In another console,

```
$ > redis-cli FLUSHALL
$ > redis-cli
```

### Start worker

```
$ > node worker\index.js
```

### API

```
$ > node api\index.js
```



