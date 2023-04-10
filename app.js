//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
var datum = new Date();
var CurrentDate = datum.getDay();
var day ="";



switch (CurrentDate) {
  case 0:
    day="sunday"
    break;

    case 1:
      day="monday"
      break;

      case 2:
      day="Thuesday"
        break;

        case 3:
          day="Wedsday"
          break;

          case 4:
            day="Thursday"
            break;

            case 5:
            break;
              day="Friday"

              case 6:
                day="saturday"
                break;

                default:
                console.log("Error: current day is equal to:"+ CurrentDate);
}

  res.render("list",{kindOfDay: day});
})

app.listen(3000, () =>{
console.log("Server started on Port 3000");
})
