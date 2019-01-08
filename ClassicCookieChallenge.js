/*
##########
#PROBLEM DESCRIPTION
##########

Given a matrix, return an array with the length of the lines that are formed.
A line is a sequence of 1's. The 1's are connected only horizontally and vertically.

##########
#EXAMPLE
##########
[
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1]
],
Answer should be [4, 8];

##########
#SOLUTION
##########
*/
//here you put your matrix
let arr = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1]
   ],
   result = [],
   count = 0,
   marker = "x";

function getIndexesOfNearElements(j, i) {
  let around = [];
  if(arr[j][i - 1] == 1 && typeof arr[j][i - 1] != "string") {
    around.push([j, i - 1]);
  }
  
  if(arr[j][i + 1] == 1 && typeof arr[j][i + 1]  != "string") {
    around.push([j, i + 1]);
  }

  if(arr[j - 1]) {
    if(arr[j - 1][i] == 1 && typeof arr[j - 1][i] != "string") {
      around.push([j - 1, i]);
    }   
  }

  if(arr[j + 1]) {
    if(arr[j + 1][i] == 1 && typeof arr[j + 1][i] != "string") {
      around.push([j + 1, i]);
    }
  }
  return around;
}

for(let i = 0; i < arr[0].length; i++) {
  for(let j = 0; j < arr.length; j++) {
    if (arr[j][i] === 1) {
      arr[j][i] = marker;
      count++;
      let near = getIndexesOfNearElements(j, i);
      while (near.length > 0) {
        near.forEach(arrIdx => {
            arr[arrIdx[0]][arrIdx[1]] = marker;
            count++;
        });
        let temp = [];
          near.forEach(elemArr => {
              getIndexesOfNearElements(elemArr[0], elemArr[1])
                .forEach(arr => temp.push(arr));
          });
        near = temp.filter(arr => arr.length > 1);
      }
      result.push(count);
      count = 0;
    }
  }
}
console.log("=================");
console.log(result);
console.log("=================");