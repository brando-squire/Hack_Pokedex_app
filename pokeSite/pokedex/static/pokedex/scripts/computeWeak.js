function compute(){
    var i;
    var typeList = new Array();
    for (i=0;i<6;i++){
        var selectName = "select" + i;
        var t1 = document.getElementById(selectName);
        var t1Val = t1[t1.selectedIndex].value;
        console.log(t1Val);
        if(t1 == "fairy"){
            t1 = "normal";
        }
        var t2 = document.getElementById(selectName).pokeType2;
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
        
        class pokeType{
            constructor(name,value){
                this.name = name;
                this.value = value;
            }
            getName(){return this.name;}
            getValue(){return this.value;}
            setValue(number){this.value = number;}
        }

        var fire = new pokeType("fire",0);
        var water = new pokeType("water",0);
        var electric = new pokeType("electric",0);
        var grass = new pokeType("grass",0);
        var ice = new pokeType("ice",0);
        var fighting = new pokeType("fighting",0);
        var poison = new pokeType("poison",0);
        var ground = new pokeType("ground",0);
        var flying = new pokeType("flying",0);
        var psychic = new pokeType("psychic",0);
        var bug = new pokeType("bug",0);
        var rock = new pokeType("rock",0);
        var ghost = new pokeType("ghost",0);
        var dragon = new pokeType("dragon",0);


        // //add weakness to the dictionary

        for(i=0;i<weakList.length;i++){
            switch (weakList[i]){
            
                case "normal":
                normal.setValue(normal.getValue() + 1);
                break;
    
                case "fire":
                fire.setValue(fire.getValue() + 1);
                break;
    
                case "water":
                water.setValue(water.getValue() + 1);
                break;
    
                case "electric":
                electric.setValue(electric.getValue() + 1);
                break;
    
                case "grass":
                grass.setValue(grass.getValue() + 1);
                break;
    
                case "ice":
                ice.setValue(ice.getValue() + 1);
                break;
    
                case "fighting":
                fighting.setValue(fighting.getValue() + 1);
                break;
    
                case "poison":
                poison.setValue(poison.getValue() + 1);
                break;
    
                case "ground":
                ground.setValue(ground.getValue() + 1);
                break;
    
                case "flying":
                flying.setValue(flying.getValue() + 1);
                break;
    
                case "psychic":
                psychic.setValue(psychic.getValue() + 1);
                break;
    
                case "bug":
                bug.setValue(bug.getValue() + 1);
                break;
                
                case "rock":
                rock.setValue(rock.getValue() + 1);
                break;
    
                case "ghost":                       
                ghost.setValue(ghost.getValue() + 1);
                break;
    
                case "dragon":
                dragon.setValue(dragon.getValue() + 1);
                break;
            }
        }

        //add strenghts to dictionary 

        for(i=0;i<strongList.length;i++){
            switch (strongList[i]){
            
                case "normal":
                normal.setValue(normal.getValue() - 1);
                break;
    
                case "fire":
                fire.setValue(fire.getValue() - 1);
                break;
    
                case "water":
                water.setValue(water.getValue() - 1);
                break;
    
                case "electric":
                electric.setValue(electric.getValue() - 1);
                break;
    
                case "grass":
                grass.setValue(grass.getValue() - 1);
                break;
    
                case "ice":
                ice.setValue(ice.getValue() - 1);
                break;
    
                case "fighting":
                fighting.setValue(fighting.getValue() - 1);
                break;
    
                case "poison":
                poison.setValue(poison.getValue() - 1);
                break;
    
                case "ground":
                ground.setValue(ground.getValue() - 1);
                break;
    
                case "flying":
                flying.setValue(flying.getValue() - 1);
                break;
    
                case "psychic":
                psychic.setValue(psychic.getValue() - 1);
                break;
    
                case "bug":
                bug.setValue(bug.getValue() - 1);
                break;
                
                case "rock":
                rock.setValue(rock.getValue() - 1);
                break;
    
                case "ghost":                       
                ghost.setValue(ghost.getValue() - 1);
                break;
    
                case "dragon":
                dragon.setValue(dragon.getValue() - 1);
                break;
            }
        }

        var rankedArray = [];
        rankedArray.push(fire);
        rankedArray.push(water);
        rankedArray.push(electric);
        rankedArray.push(grass);
        rankedArray.push(ice);
        rankedArray.push(poison);
        rankedArray.push(fighting);
        rankedArray.push(ground);
        rankedArray.push(flying);
        rankedArray.push(psychic);
        rankedArray.push(bug);
        rankedArray.push(rock);
        rankedArray.push(ghost);
        rankedArray.push(dragon);

        rankedArray.sort(function(a,b){return b.getValue() - a.getValue()});

        var resultTitle = document.createElement("h3");
            resultTitle.textContent = "Team weak against:";
            document.getElementById("result").appendChild(resultTitle);

        var i = 0;
        for(i=0; i<rankedArray.length; i++){
            var result = document.createElement("p");
            result.textContent = rankedArray[i].getName();
            document.getElementById("result").appendChild(result);
        }
    }
}