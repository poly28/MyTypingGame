'use strict';

// 単語表示用の関数
function setWord() {
	// wordにwords配列の単語のいづれかを代入する
	word = words[Math.floor(Math.random() * words.length)];
	// HTML要素のtargetにwordに格納されている単語を表示する
	target.textContent = word;

	//単語の判定用変数locを0に初期化する
	loc = 0;
}
// 問題となる単語を事前に定数として配列で定義
const words = ['red', 'blue', 'pink'];
// 単語表示用の変数wordを定義
let word;
// 単語の文字のn番目を表す変数 loc(location)を定義
let loc = 0;
// 単語を表示するHTML要素を変数として取得
const target = document.getElementById('target');

// 単語を表示する関数setWordを実行
setWord();

// 文字の入力をイベントとして以下の処理を実行
document.addEventListener('keydown', (e) => {
	// 早期リターン
	// 入力された文字がwordのloc番目と一致しなければ
	//returnを返し、以降の処理を実行しない
	if (e.key !== word[loc]) {
		return;
	}

	// 単語の文字と入力文字が一致した場合
	// 正解の処理

	// 単語の次の文字へ進むため、locを+1する
	loc++;

	// targetのテキストを
	target.textContent = '_'.repeat(loc) + word.substring(loc);

	// locがwordの長さと等しい
	// つまり単語の文字全て入力正解したらsetWord実行
	if (loc === word.length) {
		// 次の単語を表示する
		setWord();
	}
});
