# Accordion Accessibility Lab

`accordion-accessibility-lab`は、HTMLの実装方法によって開閉UIのアクセシビリティにどのような違いが生じるかを比較する検証です。
単に開閉できることと、キーボードやスクリーンリーダーで操作し、内容や状態を理解できることの違いに着目します。
6つの実装を使い、キーボード操作、読み上げ、Accessibility Treeでの認識を比較します。

## 比較する実装

| パターン | 実装方法 | 実装内容 |
| --- | --- | --- |
| A | div + JavaScript | clickイベントのみでパネルの`hidden`属性を切り替える。 |
| B | button + JavaScript | ボタン標準のキーボード操作を利用し、`hidden`属性を切り替える。`aria-expanded`・`aria-controls`は付けない。 |
| C | button + ARIA + JavaScript | `hidden`属性と`aria-expanded`を同期し、`aria-controls`でパネルを参照する。 |
| D | details + summary | HTML標準の開閉動作を利用する。開閉制御のJavaScriptは使わない。 |
| E | details + summary内の見出し | `summary`内に`h3`を配置し、HTML標準の動作で開閉する。 |
| F | 見出し内のbutton + ARIA + JavaScript | `h3`内に`button`を配置し、Cと同様に開閉状態を同期して対象パネルを参照する。 |

Aは比較のため、アクセシビリティ上の問題を意図的に残しています。`role`・`tabindex`・ARIA属性を付けず、キーボード操作への追加対応も行っていません。

6パターンの見た目とパネルの内容を揃え、初期状態はすべて閉じています。

## 検証項目

以下は比較時に確認する項目です。

- マウスによる開閉
- Tabによるフォーカス移動と、Enter / Spaceによる開閉操作
- VoiceOverによる読み上げと開閉操作
- 開閉状態の伝達
- 見出しナビゲーション
- Chrome DevToolsのAccessibility Treeでの要素・役割・状態の認識

読み上げや認識の仕方は、ブラウザ・OS・スクリーンリーダーの組み合わせによって異なります。

## 実行方法

ビルド不要のVanilla HTML / CSS / JavaScriptで構成しています。npmや外部ライブラリは不要です。

```text
accordion-accessibility-lab/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

リポジトリをダウンロードまたはcloneし、上記のフォルダ構成を保ったまま`index.html`をブラウザで開いてください。ローカルで開閉やキーボード操作を確認できます。

## 参考資料

- [WAI-ARIA APG — Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [WAI-ARIA APG — Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [MDN — details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN — summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
