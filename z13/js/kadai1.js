
window.onload = function() {

    // ボタン要素の取得
    const button =document.getElementById("button");

    // 要素をクリックしたときの処理
    button.onclick = function() {
        // テキストの変更処理

        // テキスト要素の取得
        let elem = document.getElementById("sample")

        // テキストを書き換える
        elem.textContent = "書き換え完了"; // テキストノードの書き換え
        
        //　色を変更
        elem.style.color = "red";
    }
}

