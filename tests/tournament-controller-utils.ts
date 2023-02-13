import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  Registered,
  TeamCreated,
  TournamentCreated
} from "../generated/TournamentController/TournamentController"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRegisteredEvent(
  teamId: BigInt,
  tournamentId: BigInt
): Registered {
  let registeredEvent = changetype<Registered>(newMockEvent())

  registeredEvent.parameters = new Array()

  registeredEvent.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromUnsignedBigInt(teamId))
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam(
      "tournamentId",
      ethereum.Value.fromUnsignedBigInt(tournamentId)
    )
  )

  return registeredEvent
}

export function createTeamCreatedEvent(
  teamId: BigInt,
  leader: Address,
  members: Array<Address>
): TeamCreated {
  let teamCreatedEvent = changetype<TeamCreated>(newMockEvent())

  teamCreatedEvent.parameters = new Array()

  teamCreatedEvent.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromUnsignedBigInt(teamId))
  )
  teamCreatedEvent.parameters.push(
    new ethereum.EventParam("leader", ethereum.Value.fromAddress(leader))
  )
  teamCreatedEvent.parameters.push(
    new ethereum.EventParam("members", ethereum.Value.fromAddressArray(members))
  )

  return teamCreatedEvent
}

export function createTournamentCreatedEvent(
  tournmenId: BigInt,
  prizepool: BigInt,
  organizer: string
): TournamentCreated {
  let tournamentCreatedEvent = changetype<TournamentCreated>(newMockEvent())

  tournamentCreatedEvent.parameters = new Array()

  tournamentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tournmenId",
      ethereum.Value.fromUnsignedBigInt(tournmenId)
    )
  )
  tournamentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "prizepool",
      ethereum.Value.fromUnsignedBigInt(prizepool)
    )
  )
  tournamentCreatedEvent.parameters.push(
    new ethereum.EventParam("organizer", ethereum.Value.fromString(organizer))
  )

  return tournamentCreatedEvent
}
