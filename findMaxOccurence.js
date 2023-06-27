const numberList = ["0","1","2","3","4","5","6","7","8","9"];

function checkIfNumber(alphabet){
    if(numberList.includes(alphabet)){
        return true;
    } else {
        return false;
    }
}

function findMaxOccurCharacter(str) {
    let charCountMap = {};

    for(let i=0; i< str.length; i++){
        let isNumber = checkIfNumber(str[i]);
        if(!isNumber){
            if(charCountMap[str[i]]){
                charCountMap[str[i]] = charCountMap[str[i]] + 1;
            } else {
                charCountMap[str[i]] = 1;
            } 
        }
    }



    return getMaxOccurChar(charCountMap);
}

function getMaxOccurChar(charCountMap) {
    let maxOccurChar;
    let maxCount = 0;

    Object.keys(charCountMap).forEach((it)=>{
        if(charCountMap[it] > maxCount) {
            maxCount = charCountMap[it];
            maxOccurChar = it;
        }
    })
    return maxOccurChar;
}





console.log(JSON.stringify(findMaxOccurCharacter("1112222ggghhhgbnnnggdsss555555")))


function swapAlphabetsInString(str){
    let alphabetIndexList = [];

    for(let i=0; i< str.length; i++){
        if(!checkIfNumber(str[i])){
            alphabetIndexList.push(i);
        }
    }

    return reverseInStr(str.split(""), alphabetIndexList);
}

function reverseInStr(strArr, alphabetIndexList) {
    let left = 0;
    let right = alphabetIndexList.length - 1;

    while(left < right){
        swapping(strArr, alphabetIndexList[left], alphabetIndexList[right]);
        left++;
        right--;
    }
    return strArr;
}

function swapping(strArr, leftIndex, rightIndex){
    let tmp = strArr[parseInt(leftIndex)];
    strArr[leftIndex] = strArr[parseInt(rightIndex)];
    strArr[rightIndex] = tmp;
}


console.log(JSON.stringify(swapAlphabetsInString("76hhg7h7h7u7u").join("")))
