<h1 align="center">Welcome to membership mission 1 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/front">
    <img alt="Version" src="https://img.shields.io/npm/v/front.svg">
  </a>
</p>

> boostcamp membership mission 1

## Structure
### frontend
```
./
├── css/                      # 구역 별 스타일 시트
├── dist/                     # 웹팩 번들링 결과
├── public/                   # 정적 문서
├── src/                      # 소스 파일
|   ├── data/                 # 지속가능성을 위한 제이슨 파일
|   ├── lib/                  # 각 라우트에서 필요한 기능 파일
|   ├── routes/               # 라우트 파일
|   └── index.js              # 라우터
├── home.html                 # 진짜 엔트리 포인트
├── index.php                 # 헤로쿠 배포를 위한 가짜 엔트리 포인트
└── webpack.config.js         # 웹팩 설정
```
### backend
```
./
├── bin/                      # Express 구동
├── public/                   # 정적 문서
|   ├── images/               # 정적 이미지
|   ├── javascripts/          # 정적 자바스크립트
|   └── stylesheets/          # 정적 스타일 시트
├── routes/                   # 라우트
|   ├── index.js              # 인덱스 관련 라우트
|   └── users.js              # 유저 관련 라우트
├── views/                    # 에러 페이지
├── app.js                    # 엔트리 포인트
└── db.json                   # 데이터베이스
```

### 🏠 [Homepage](https://boostcamp-membership.herokuapp.com)

## Install
```sh
npm install
```

## Usage

back end
```sh
cd back
npm run dev            # run with nodemon
```

front end
```sh
cd front
npm run build          # build with webpack
```

## Run tests

```sh
npm run test
```

## Author

👤 **Einere**

* Github: [@Einere](https://github.com/Einere)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Einere/membership-login/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_