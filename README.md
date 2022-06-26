# hello-deno

## Overview
Tried the tutorial in this article.   
[Deno入門 ─ 新しいTypeScript/JavaScript実行環境でWebアプリ開発とデータベース接続の基本を体験しよう](https://eh-career.com/engineerhub/entry/2022/06/17/093000)

## Setup

1. Prepare the database.  
[The Open Source Firebase Alternative | Supabase](https://supabase.com/)


2. Add .env file.  
```env
HOST_NAME=*** # Connection info Database Host 
PASSWORD=***　# Connection info Password
PORT=*** # Connection info Port
```
<img width="800" alt="スクリーンショット 2022-06-26 12 50 35" src="https://user-images.githubusercontent.com/8470739/175813838-4078d2f8-43f0-41e4-8058-b17c03496943.png">


## Run it
```
$ vr server
```
Then, open browser to `http://localhost:8000/`.

## Reference
- [Deno製タスクランナーVelociraptorの使い方と設定の紹介](https://zenn.dev/kawarimidoll/articles/b6570176eaaaea)
- [Deno Deployではdotenvを使えない](https://zenn.dev/kawarimidoll/articles/752f74860d0d78)
- [deno deployでWebサイトを公開する方法4種 - Qiita](https://qiita.com/access3151fq/items/5d9654874647cb7d1cc4)
