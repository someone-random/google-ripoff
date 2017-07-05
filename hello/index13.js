var button=document.querySelector("#button");
var file="Documents/text.txt"
var txtFile=new File([""],file);
button.onclick = function(){
    var user=document.getElementById("usern").value;
    txtFile.open("w");
    file.WriteIn(user);
    file.close();
    console.log(user)
};