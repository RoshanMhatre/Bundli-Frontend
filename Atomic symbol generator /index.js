
function putValues(age, weight, symbol, config, fullname)
{
    document.querySelector(".symbolbox .age").innerHTML=age;
    document.querySelector(".symbolbox .weight").innerHTML=weight;
    document.querySelector(".symbolbox .fullname").innerHTML=fullname;
    document.querySelector(".symbolbox .config").innerHTML=config;
    document.querySelector(".symbolbox .elementname").innerHTML=symbol;
}

function create()
{
    var firstName = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    age=Number(age);
    var weight = document.getElementById("weight").value;
    
    document.getElementById("result").classList.remove("hidden");
    
    let fullname=firstName.toLowerCase();
    let symbol=fullname.toUpperCase().substr(0,1)+fullname.substr(1,1);
    
    var config;
    switch(age)
    {
        case 1: config="1s"+"1".sup();;
                break;
        case 2: config="1s"+"2".sup();
                break;
        case 3: "[He]"+"2s"+"1".sup();
                break;
        case 4: config="[He]"+"2s"+"2".sup();
                break;
        case 5: config="[He]"+"2s"+"2".sup()+"2p"+"1".sup();
                break;
        case 6: config="[He]"+"2s"+"2".sup()+"2p"+"2".sup();
                break;
        case 7: config="[He]"+"2s"+"2".sup()+"2p"+"3".sup();
                break;
        case 8: config="[He]"+"2s"+"2".sup()+"2p"+"4".sup();
                break;
        case 9: config="[He]"+"2s"+"2".sup()+"2p"+"5".sup();
                break;
        case 10: config="[He]"+"2s"+"2".sup()+"2p"+"6".sup();
                break;
        case 11: config="[Ne]"+"3s"+"1".sup();
                break;
        case 12: config="[Ne]"+"3s"+"2".sup();
                break;
        case 13: config="[Ne]"+"3s"+"2".sup()+"3p"+"1".sup();
                break;
        case 14: config="[Ne]"+"3s"+"2".sup()+"3p"+"2".sup();
                break;
        case 15: config="[Ne]"+"3s"+"2".sup()+"3p"+"3".sup();
                break;
        case 16: config="[Ne]"+"3s"+"2".sup()+"3p"+"4".sup();
                break;
        case 17: config="[Ne]"+"3s"+"2".sup()+"3p"+"5".sup();
                break;
        case 18: config="[Ne]"+"3s"+"2".sup()+"3p"+"6".sup();
                break;
        case 19: config="[Ar]"+"4s"+"1".sup();
                break;
        case 20: config="[Ar]"+"4s"+"2".sup();
                break;
        case 21: config="[Ar]"+"4s"+"2".sup()+"3d"+"1".sup();
                break;
        case 22: config="[Ar]"+"4s"+"2".sup()+"3d"+"2".sup();
                break;
        case 23: config="[Ar]"+"4s"+"2".sup()+"3d"+"3".sup();
                break;
        case 24: config="[Ar]"+"4s"+"1".sup()+"3d"+"5".sup();
                break;
        case 25: config="[Ar]"+"4s"+"2".sup()+"3d"+"5".sup();
                break;
        case 26: config="[Ar]"+"4s"+"2".sup()+"3d"+"6".sup();
                break;
        case 27: config="[Ar]"+"4s"+"2".sup()+"3d"+"7".sup();
                break;
        case 28: config="[Ar]"+"4s"+"2".sup()+"3d"+"8".sup();
                break;
        case 29: config="[Ar]"+"4s"+"1".sup()+"3d"+"10".sup();
                break;
        case 30: config="[Ar]"+"4s"+"2".sup()+"3d"+"10".sup();
                break;
        case 31: config="[Ar]"+"4s"+"2".sup()+"3d"+"10".sup()+"4p"+"1".sup();
                break;
        case 32: config="[Ar]"+"4s"+"2".sup()+"3d"+"10".sup()+"4p"+"2".sup();
                break;
        case 33: config="[Ar]"+"4s"+"2".sup()+"3d"+"10".sup()+"4p"+"3".sup();
                break;
        case 34: config="[Ar]"+"4s"+"2".sup()+"3d"+"10".sup()+"4p"+"4".sup();
                break;
        case 35: config="[Ar]"+"4s"+"2".sup()+"3d"+"10".sup()+"4p"+"5".sup();
                break;
        case 36: config="[Ar]"+"4s"+"2".sup()+"3d"+"10".sup()+"4p"+"6".sup();
                break;
        case 37: config="[Kr]"+"5s"+"1".sup();
                break;
        case 38: config="[Kr]"+"5s"+"2".sup();
                break;
        case 39: config="[Kr]"+"5s"+"2".sup()+"4d"+"1".sup();
                break;
        case 40: config="[Kr]"+"5s"+"2".sup()+"4d"+"2".sup();
                break;
        case 41: config="[Kr]"+"5s"+"2".sup()+"4d"+"3".sup();
                break;
        case 42: config="[Kr]"+"5s"+"1".sup()+"4d"+"5".sup();
                break;
        case 43: config="[Kr]"+"5s"+"2".sup()+"4d"+"5".sup();
                break;
        case 44: config="[Kr]"+"5s"+"2".sup()+"4d"+"6".sup();
                break;
        case 45: config="[Kr]"+"5s"+"2".sup()+"4d"+"7".sup();
                break;
        case 46: config="[Kr]"+"5s"+"2".sup()+"4d"+"8".sup();
                break;
        case 47: config="[Kr]"+"5s"+"1".sup()+"4d"+"10".sup();
                break;
        case 48: config="[Kr]"+"5s"+"2".sup()+"4d"+"10".sup();
                break;
        case 49: config="[Kr]"+"5s"+"2".sup()+"4d"+"10".sup()+"5p"+"1".sup();
                break;
        case 50: config="[Kr]"+"5s"+"2".sup()+"4d"+"10".sup()+"5p"+"2".sup();
                break;
        case 51: config="[Kr]"+"5s"+"2".sup()+"4d"+"10".sup()+"5p"+"3".sup();
                break;
        case 52: config="[Kr]"+"5s"+"2".sup()+"4d"+"10".sup()+"5p"+"4".sup();
                break;
        case 53: config="[Kr]"+"5s"+"2".sup()+"4d"+"10".sup()+"5p"+"5".sup();
                break;
        case 54: config="[Kr]"+"5s"+"2".sup()+"4d"+"10".sup()+"5p"+"6".sup();
                break;
        case 55: config="[Xe]"+"6s"+"1".sup();
                break;
        case 56: config="[Xe]"+"6s"+"2".sup();
                break;
        case 57: config="[Xe]"+"6s"+"2".sup()+"5d"+"1".sup();
                break;
        case 58: config="[Xe]"+"6s"+"2".sup()+"5d"+"1".sup()+"4f"+"1".sup();
                break;
        case 59: config="[Xe]"+"6s"+"2".sup()+"4f"+"3".sup();
                break;
        case 60: config="[Xe]"+"6s"+"2".sup()+"4f"+"4".sup();
                break;
        case 61: config="[Xe]"+"6s"+"2".sup()+"4f"+"5".sup();
                break;
        case 62: config="[Xe]"+"6s"+"2".sup()+"4f"+"6".sup();
                break;
        case 63: config="[Xe]"+"6s"+"2".sup()+"4f"+"7".sup();
                break;
        case 64: config="[Xe]"+"6s"+"2".sup()+"5d"+"1".sup()+"4f"+"7".sup();
                break;
        case 65: config="[Xe]"+"6s"+"2".sup()+"4f"+"9".sup();
                break;
        case 66: config="[Xe]"+"6s"+"2".sup()+"4f"+"10".sup();
                break;
        case 67: config="[Xe]"+"6s"+"2".sup()+"4f"+"11".sup();
                break;
        case 68: config="[Xe]"+"6s"+"2".sup()+"4f"+"12".sup();
                break;
        case 69: config="[Xe]"+"6s"+"2".sup()+"4f"+"13".sup();
                break;
        case 70: config="[Xe]"+"6s"+"2".sup()+"4f"+"14".sup();
                break;
        case 71: config="[Xe]"+"6s"+"2".sup()+"5d"+"1".sup()+"4f"+"14".sup();
                break;
        case 72: config="[Xe]"+"6s"+"2".sup()+"5d"+"2".sup()+"4f"+"14".sup();
                break;
        case 73: config="[Xe]"+"6s"+"2".sup()+"5d"+"3".sup()+"4f"+"14".sup();
                break;
        case 74: config="[Xe]"+"6s"+"2".sup()+"5d"+"4".sup()+"4f"+"14".sup();
                break;
        case 75: config="[Xe]"+"6s"+"2".sup()+"5d"+"5".sup()+"4f"+"14".sup();
                break;
        case 76: config="[Xe]"+"6s"+"2".sup()+"5d"+"6".sup()+"4f"+"14".sup();
                break;
        case 77: config="[Xe]"+"6s"+"2".sup()+"5d"+"7".sup()+"4f"+"14".sup();
                break;
        case 78: config="[Xe]"+"6s"+"1".sup()+"5d"+"9".sup()+"4f"+"14".sup();
                break;
        case 79: config="[Xe]"+"6s"+"1".sup()+"5d"+"10".sup()+"4f"+"14".sup();
                break;
        case 80: config="[Xe]"+"6s"+"2".sup()+"5d"+"10".sup()+"4f"+"14".sup();
                break;
        case 81: config="[Xe]"+"6s"+"2".sup()+"5d"+"10".sup()+"4f"+"14".sup()+"6p"+"1".sup();
                break;
        case 82: config="[Xe]"+"6s"+"2".sup()+"5d"+"10".sup()+"4f"+"14".sup()+"6p"+"2".sup();
                break;
        case 83: config="[Xe]"+"6s"+"2".sup()+"5d"+"10".sup()+"4f"+"14".sup()+"6p"+"3".sup();
                break;
        case 84: config="[Xe]"+"6s"+"2".sup()+"5d"+"10".sup()+"4f"+"14".sup()+"6p"+"4".sup();
                break;
        case 85: config="[Xe]"+"6s"+"2".sup()+"5d"+"10".sup()+"4f"+"14".sup()+"6p"+"5".sup();
                break;
        case 86: config="[Xe]"+"6s"+"2".sup()+"5d"+"10".sup()+"4f"+"14".sup()+"6p"+"6".sup();
                break;
        case 87: config="[Rn]"+"7s"+"1".sup();
                break;
        case 88: config="[Rn]"+"7s"+"2".sup();
                break;
        case 89: config="[Rn]"+"7s"+"2".sup()+"6d"+"1".sup();
                break;
        case 90: config="[Rn]"+"7s"+"2".sup()+"6d"+"2".sup();
                break;
        case 91: config="[Rn]"+"7s"+"2".sup()+"6d"+"1".sup()+"5f"+"2".sup();
                break;
        case 92: config="[Rn]"+"7s"+"2".sup()+"6d"+"1".sup()+"5f"+"3".sup();
                break;
        case 93: config="[Rn]"+"7s"+"2".sup()+"6d"+"1".sup()+"5f"+"4".sup();
                break;
        case 94: config="[Rn]"+"7s"+"2".sup()+"5f"+"6".sup();
                break;
        case 95: config="[Rn]"+"7s"+"2".sup()+"5f"+"7".sup();
                break;
        case 96: config="[Rn]"+"7s"+"2".sup()+"6d"+"1".sup()+"5f"+"7".sup();
                break;
        case 97: config="[Rn]"+"7s"+"2".sup()+"5f"+"9".sup();
                break;
        case 98: config="[Rn]"+"7s"+"2".sup()+"5f"+"10".sup();
                break;
        case 99: config="[Rn]"+"7s"+"2".sup()+"5f"+"11".sup();
                break;
        case 100: config="[Rn]"+"7s"+"2".sup()+"5f"+"12".sup();
                break;
        case 101: config="[Rn]"+"7s"+"2".sup()+"5f"+"13".sup();
                break;
        case 102: config="[Rn]"+"7s"+"2".sup()+"5f"+"14".sup();
                break;
        default: config="null";
    }


    putValues(age, weight, height, symbol, config, fullname);

    
}
