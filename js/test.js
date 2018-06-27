function test() {


    var testString = 'qqhtml5player.setVideoTitle(\'청순녀 열일곱\');';
    var findS = getMiddleString(testString, 'Title\\(\'', '\'');
    console.log(findS)
}

function getMiddleString(string, start, end) {
    var reg = ''+start+'(.*?)'+end+'';
    var result = string.match(reg);
    if (result && result.length > 0) {
        return result[1];
    }
    return null;
}

test()