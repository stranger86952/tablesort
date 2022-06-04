var json = {
  "test": {
    "id": 1,
    "name": "test",
    "price": 500,
    "bikou": "nasi"
  },
  "hoge": {
    "id": 2,
    "name": "abcd",
    "price": 57,
    "bikou": "lol"
  },
  "huga": {
    "id": 3,
    "name": "zyanken",
    "price": 1,
    "bikou": "yasuiyo~"
  }
}

window.onload=function(){
  var th = [];
  for(var i=0;i<json.length;i++){
    $("tbody").append("<tr>");
    for(var j=0;j<json[Object.keys(s)[i]].length;j++){
      if(th.indexOf(Object.keys(json[Object.keys(s)[i]])[j]) == -1){
        th.push(Object.keys(json[Object.keys(s)[i]])[j]);
      }
      console.log(true);
      $("tbody").append("<td>" + json[Object.keys(s)[i]][Object.keys(json[Object.keys(s)[i]])[j]] + "</td>")
    }
    $("tbody").append("</tr>");
  }
  $("thead").append("<tr>");
  for(var i=0;i<th.length;i++){
    $("thead").append("<th>" + th[i] + "</th>")
  }
  $("thead").append("</tr>");
};
