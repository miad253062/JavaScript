function matchWinner(teamAGoals, teamBGoals) {
  if(teamAGoals === NaN || teamBGoals === NaN){
    return "Invalid";
  }
  
  if(typeof teamAGoals === "number" && typeof teamBGoals === "number"){
    if(teamAGoals === teamBGoals){
        return "Draw";
    }else if(teamAGoals > teamBGoals){
        return "Team A Won";
    }else{
        return "Team B Won";
    }
  }
  return "Invalid";
}
