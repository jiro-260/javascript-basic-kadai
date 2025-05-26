// 1以上の正の数を代入
let num = 30;
//変数numの値を出力する
console.log(num);

//変数numが3の倍数の場合： 「3の倍数です」と出力する
if (num % 3 == 0) {
    console.log('3の倍数です');
}

//変数numが5の倍数の場合： 「5の倍数です」と出力する
if (num % 5 == 0) {
    console.log('5の倍数です');
}

//変数numが3と5の倍数の場合： 「3と5の倍数です」と出力する
if (num % 15 == 0) {
    console.log('3と5の倍数です');
}
// それ以外の場合： 変数numの値を出力する
else {
    console.log(num);
}