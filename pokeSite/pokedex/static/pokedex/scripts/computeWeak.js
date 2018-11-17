function compute(){
    var i;
    var typeList = new Array();
    for (i=0;i<6;i++){
        var selectName = "select" + i;
        var t1 = document.getElementById(selectName).getType1;
        if(t1 == "fairy"){
            t1 = "normal";
        }
        var t2 = document.getElementById(selectName).getType2;
        if(t2 == "fairy"){
            t2 = "none";
        }
        typeList.push(t1);
        typeList.push(t2);
    }
    var weakList = new Array();
    var strongList = new Array();
    for(i=0;i<typeList.length;i++){
        switch (typeList[i]){

            case "none":
            break;

            case "normal":
            weakList.push("fighting");
            strongList.push("ghost")
            break;

            case "fire":
            weakList.push("water");
            weakList.push("ground");
            weakList.push("rock");
            strongList.push("fire");
            strongList.push("grass");
            strongList.push("ice");
            strongList.push("bug");
            break;

            case "water":
            weakList.push("electric");
            weakList.push("grass");
            strongList.push("fire");
            strongList.push("water");
            strongList.push("ice");

            case "electric":
            weakList.push("ground");
            strongList.push("electric");
            strongList.push("flying");
            break;

            case "grass":
            weakList.push("fire");
            weakList.push("ice");
            weakList.push("poison");
            weaklist.push("flying");
            weaklist.push("bug");
            strongList.push("water");
            strongList.push("electric");
            strongList.push("grass");
            strongList.push("ground");
            break;

            case "ice":
            weakList.push("fire");
            weakList.push("fighting");
            weakList.push("rock");
            strongList.push("ice");
            break;

            case "fighting":
            weakList.push("flying");
            weakList.push("psychic");
            strongList.push("bug");
            strongList.push("rock");
            break;

            case "poison":
            weakList.push("ground");
            weakList.push("psychic");
            strongList.push("grass");
            strongList.push("fighting");
            strongList.push("poison");
            strongList.push("bug");
            break;

            case "ground":
            weakList.push("water");
            weakList.push("ice");
            weakList.push("grass");
            strongList.push("electric");
            strongList.push("poison");
            strongList.push("rock");
            break;

            case "flying":
            weakList.push("electric");
            weakList.push("ice");
            weakList.push("rock");
            strongList.push("grass");
            strongList.push("fighting");
            strongList.push("ground");
            strongList.push("bug");
            break;

            case "psychic":
            weakList.push("bug");
            weakList.push("ghost");
            strongList.push("psychic");
            strongList.push("fighting");
            break;

            case "bug":
            weakList.push("fire");
            weakList.push("flying");
            weakList.push("rock");
            strongList.push("grass");
            strongList.push("fighting");
            strongList.push("ground");
            break;
            
            case "rock":
            weakList.push("water");
            weakList.push("grass");
            weakList.push("ice");
            weakList.push("ground");
            strongList.push("normal");
            strongList.push("fire");
            strongList.push("poison");
            strongList.push("flying");
            break;

            case "ghost":                       
            weakList.push("ghost");
            strongList.push("normal");
            strongList.push("fighting");
            break;

            case "dragon":
            weakList.push("ice");
            weakList.push("dragon");
            strongList.push("fire");
            strongList.push("water");
            strongList.push("electric");
            strongList.push("grass");
            break;

        }
        //TODO: create a dictionary to add up weaklist and subtract stronglist
    }
}