## リファクタリング 練習お題URL
https://martinfowler.com/articles/refactoring-video-store-js/

ビデオレンタルのポイントを計算して表示するプログラムをリファクタリングするお題。不吉な臭い長い関数で、計算ロジックと表示用のロジックが混ざっている（例えば出力をHTMLに変えるにはどうすれば良い？）。また、計算が構造化されておらず理解しづらいものになっている。
まずは、関数の分解から進めていく

## DOING

## Decomposing into several functions(関数の分解)
- 関数の抽出（function `movieFor`)
- 問い合わせ(function `movieFor`)による一時変数(`movie`)の置き換え
- switch文の抽出(function `amountFor`)
- 会員のポイント計算処理を抽出(function `frequentRenterPointsFor`)
- Side effectをさせない(親スコープの変数を変更しない)ように関数(function `frequentRenterPointsFor`)を修正
- 作成した2つの関数の内容を振り返り、見直す
- (計算で使用されている)可変変数(`totalAmount`, `frequentRenterPoints`)を取り除くために
  - loopをsimple、inline化して、変数`thisAmount`を除去
  - loopを3つに分解
  - 計算用の関数を2つ抽出(function `totalAmount`, `totalFrequentRenterPoints`)
  - (上の2つの関数をcollection pipelinesで修正)

## Examining the composed function
- まだRefacorしないといけないと説明している
  - 全体的な関数にネストされてる。
  - htmlStatement関数を単純に呼び出す状態でない(textだけでなくhtmlバージョンも作りたい)
- ここから実施すべきRefactorが残り4つある。説明しながら追加していく。

## Using a parameter to determine the output
- `statement`関数にパラメータ(format, default 'text')を追加して、text formatting codeを抽出し、dispatchできるようにする
  - 変数`result`でtextを作っている箇所を`textStatement`関数にする
  - `statement`関数の中で`format`でswitchして、`textStatement`関数を呼び出す。`text`以外はError
- `htmlStatement`を追加し、dispacherにも加える
  - `htmlStatement`関数はhtmlタグを埋め込んだ感じ

つづく。。。