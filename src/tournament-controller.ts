import { BigInt } from "@graphprotocol/graph-ts"
import {
  TeamCreated
} from "../generated/TournamentController/TournamentController"

import {Player,Team,playerTeam} from "../generated/schema";
import { sendEPNSNotification } from "./EPNSNotification";
export const subgraphID="kalyan-singh/gtourneyv2";

export function handleTeamCreated(e: TeamCreated): void{
  let teamId=e.params.teamId.toHexString();
  let members=e.params.members;
  let nTeam= new Team(e.params.teamId.toString());
  nTeam.teamID=e.params.teamId;
  for(let i=0;i<members.length;i++){
    let p1= Player.load(members[i].toHexString());
    if(!p1){
      p1= new Player(e.params.members[i].toHexString());
      p1.save();
    }
    let ptid=members[i].toHexString().concat(teamId);
    let pt = new playerTeam(ptid);
    pt.team=nTeam.id;
    pt.player=p1.id;
    pt.save();
    let recipient = members[i].toHexString(),
	  type = "3",
	  title = "Added",
	  body = `You are added to team ${e.params.teamId} by leader ${e.params.leader.toHexString()}`,
	  subject = "Addition to Team",
	  message = `You are added to team ${e.params.teamId}`,
	  image = "null",
	  secret = "null",
	  cta = "http://127.0.0.1:5173/"
    let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`
    sendEPNSNotification (recipient, notification);
  }
  nTeam.save();
}