# Study App

このアプリケーションは、Next.jsの学習用に開発されたもので、顔検出やタスク管理、認証機能など、複数の機能を実装しています。API通信を利用してFlaskと連携することで、これらの機能を実現しています。

## 主な機能

- **顔検出**：FlaskバックエンドとAPI通信を利用して顔検出を行います。
*画面*
![application_image2](./application_img2.png)
![application_image](./application_img.png)
- **タスク管理**：タスクの作成、編集、削除が可能です。
- **認証機能**：ユーザー認証を実装し、アプリケーションのセキュリティを確保します。
- **インタラクティブなUI**：Next.jsで再利用可能なコンポーネントを使用して構築されています。

## ディレクトリ構造

プロジェクトのディレクトリ構造は以下の通りです：

```plaintext
study-app/
├── app/
│   ├── ui/
│   │   ├── UserButton.tsx
│   │   └── header.tsx
│   ├── types/
│   │   └── types.ts
│   ├── (header)/
│   │   ├── test/
│   │   │   ├── components/
│   │   │   │   ├── markdown-section.tsx
│   │   │   │   └── sheet-side.tsx
│   │   │   └── page.tsx
│   │   ├── docs/
│   │   │   └── page.tsx
│   │   ├── todo/
│   │   │   ├── [todoId]/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── flask.tsx
│   │   ├── todo.tsx
│   │   ├── formArea.tsx
│   │   └── todolist.tsx
│   ├── actions/
│   │   └── postTodoAction.ts
│   ├── (noHeader)/
│   │   ├── flask/
│   │   │   ├── video/
│   │   │   │   ├── [name]/
│   │   │   │   │   └── page.tsx
│   │   │   ├── test/
│   │   │   │   └── page.tsx
│   │   │   ├── static.ts
│   │   │   ├── components/
│   │   │   │   ├── nav.tsx
│   │   │   │   ├── video-section.tsx
│   │   │   │   ├── images-grid-view2.tsx
│   │   │   │   ├── gabbage.txt
│   │   │   │   ├── comment-section.tsx
│   │   │   │   ├── play-video.tsx
│   │   │   │   ├── alert-name-input-form.tsx
│   │   │   │   ├── skeletons.tsx
│   │   │   │   ├── video-grid-view.tsx
│   │   │   │   ├── images-grid-view.tsx
│   │   │   │   ├── header.tsx
│   │   │   │   └── sidebar.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── example/
│   │   │   ├── nino-html-css-tailwind/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── flask.zip
│   ├── api/
│   │   ├── flask/
│   │   │   ├── playVideo/
│   │   │   │   └── route.ts
│   │   │   ├── processVideo/
│   │   │   │   └── route.ts
│   │   │   ├── images/
│   │   │   │   └── route.ts
│   │   │   ├── thumbnails/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── post/
│   │   │   ├── [todoId]/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── auth/
│   │   │   ├── [...nextauth]/
│   │   │   │   └── route.ts
│   │   └── videoApi.ts
│   ├── data/
│   │   └── static.ts
│   └── globals.css
├── application_img.png
├── application_img2.png
└── README.md
```
