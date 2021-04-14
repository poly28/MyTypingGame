'use strict';

// 単語表示用の関数
function setWord() {
	// wordにwords配列の単語のいづれかを代入する
	// spliceで配列を取り出すので、単語が重複して表示されることはない
	word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
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

// ゲーム開始からの経過時間を取得
let startTime;

// ゲーム中か否かの判別用変数
let isPlaying = false;

// 単語を表示するHTML要素を変数として取得
const target = document.getElementById('target');

// 画面をクリックしたらゲームスタート
document.addEventListener('click', () => {
	// ゲーム中の場合、クリック処理をできないようにする
	if (isPlaying === true) {
		return;
	}

	// ゲーム中フラグを立てる
	isPlaying = true;

	// ゲーム開始時刻をstartTimeに記録
	startTime = Date.now();

	// 単語セット処理実行
	setWord();
});

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

	// targetのテキストに代入
	target.textContent = '_'.repeat(loc) + word.substring(loc);

	// locがwordの長さと等しい
	// つまり単語の文字全て入力正解したらsetWord実行
	if (loc === word.length) {
		// wordsの中の単語を全て解答し終えたら結果を表示する
		if (words.length === 0) {
			// elapsedTimeに経過時間を格納
			const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
			// 結果表示先のHTML要素を取得する
			const result = document.getElementById('result');
			// 結果表示。
			result.textContent = `Finished! ${elapsedTime} seconds!`;
			return;
		}
		// 次の単語を表示する
		setWord();
	}
});
