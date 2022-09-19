let english_data = ["apple", "banana", "hello", "world"];
let vietnamese_data = ["tao", "chuoi", "xin chao", "the gioi"];
let index = null;
let result = document.getElementById('result');
let keyword;

function translate_word() {
    keyword = document.getElementById('keyword').value;
    for (let i = 0; i < english_data.length; i++) {
        if (keyword === english_data[i]) {
            index = i;
            break;
        }
    }
    if (index === null) {
        result.innerHTML = "No Match Case";
    } else {
        result.innerHTML = "Meaning: " + vietnamese_data[index];
    }
}