function theBeatlesPlay(musicians,instruments) {
  var newArray = [];
  for(i=0;i<musicians.length;i++) {
    string = musicians[0]+" plays "+instruments[i];
    newArray.push(string);
    return newArray;
  }
}
