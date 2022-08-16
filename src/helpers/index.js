import afootbal from "../assets/afootball.png";
import hockey from "../assets/hockey.png";
import soccer from "../assets/soccer.png";
import tennis from "../assets/tennis.png";
import ttennis from "../assets/ttennis.png";
import volleyball from "../assets/volleyball.png";
import basketball from "../assets/basketball.jpeg";

export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function sportType(sport) {
  switch (sport) {
    case "volleyball":
      return <img src={volleyball} alt="img" width={"30px"} height="30px" />;
    case "basketball":
      return (
        <img
          src={basketball}
          alt="img"
          width={"24px"}
          height="24px"
          style={{ marginRight: "7px" }}
        />
      );
    case "hockey":
      return <img src={hockey} alt="img" width={"20px"} height="20px" />;
    case "regby":
      return <img src={afootbal} alt="img" width={"30px"} height="30px" />;
    case "tabbleTennis":
      return <img src={ttennis} alt="img" width={"30px"} height="30px" />;
    case "tennis":
      return <img src={tennis} alt="img" width={"30px"} height="30px" />;
    default:
      return <img src={soccer} alt="img" width={"30px"} height="30px" />;
  }
}
