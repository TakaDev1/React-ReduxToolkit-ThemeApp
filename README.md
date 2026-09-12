# React-ReduxToolkit-ThemeApp

ReactとRedux Toolkitを使用して、ライトテーマとダークテーマを切り替える練習用アプリです。

## 概要

Redux Toolkitでテーマの状態を管理し、ボタン操作によってライトテーマとダークテーマを切り替えます。

テーマの状態管理にはRedux Toolkitの`createSlice`を使用し、コンポーネントから`dispatch`で状態を変更します。

また、`useSelector`でRedux Storeに保持されている現在のテーマ状態を取得し、Tailwind CSSのクラスを切り替えて画面に反映します。

## 使用技術

* React
* TypeScript
* Redux Toolkit
* React Redux
* Tailwind CSS
* Vite

## 主な機能

* ライトテーマ / ダークテーマの切り替え
* Redux Storeによるテーマ状態管理
* `toggleTheme` Actionによるテーマ変更
* `useSelector`による現在のテーマ取得
* Tailwind CSSによるテーマ別スタイル適用

## ディレクトリ構成

```text
src/
├── app/
│   └── store.ts
├── features/
│   └── theme/
│       ├── components/
│       │   ├── ThemeToggle.tsx
│       │   └── DisplayTheme.tsx
│       ├── slices/
│       │   └── ThemeSlice.ts
│       └── types/
│           └── ThemeType.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Redux Toolkitの構成

### ThemeType

テーマの状態をTypeScriptで定義します。

```ts
export interface ThemeType {
  darkMode: boolean;
}
```

### ThemeSlice

`createSlice`を使用してテーマの状態変更処理を定義します。

```ts
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});
```

`toggleTheme`を実行することで、`darkMode`の`true` / `false`を切り替えます。

### Store

作成したReducerをRedux Storeに登録します。

```ts
const store = configureStore({
  reducer: themeReducer,
});
```

### ThemeToggle

`useDispatch`を使用して`toggleTheme` ActionをStoreへ送ります。

```ts
dispatch(toggleTheme());
```

### DisplayTheme

`useSelector`を使用して、Storeに保持されている現在のStateを取得します。

```ts
const darkMode = useSelector(
  (state: ThemeType) => state.darkMode
);
```

取得した`darkMode`の値によってTailwind CSSのクラスを切り替えます。

## Reduxの処理の流れ

```text
ThemeToggle
    ↓
dispatch(toggleTheme())
    ↓
Redux Store
    ↓
ThemeSlice Reducer
    ↓
darkModeを更新
    ↓
DisplayTheme
    ↓
useSelector()
    ↓
現在のStateを取得
    ↓
Tailwind CSSを切り替え
```

## 学習ポイント

* Redux Toolkitの`createSlice`
* `reducers`と`reducer`の役割
* Action Creatorと`dispatch`
* Redux Store
* `useDispatch`
* `useSelector`
* Reduxによる状態管理
* ReactコンポーネントとReduxの連携
* Tailwind CSSによる条件付きスタイル変更

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで表示されたURLへアクセスしてください。
