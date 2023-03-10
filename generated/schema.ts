// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class playerTeam extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save playerTeam entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type playerTeam must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("playerTeam", id.toString(), this);
    }
  }

  static load(id: string): playerTeam | null {
    return changetype<playerTeam | null>(store.get("playerTeam", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get team(): string {
    let value = this.get("team");
    return value!.toString();
  }

  set team(value: string) {
    this.set("team", Value.fromString(value));
  }

  get player(): string {
    let value = this.get("player");
    return value!.toString();
  }

  set player(value: string) {
    this.set("player", Value.fromString(value));
  }
}

export class Player extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Player entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Player must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Player", id.toString(), this);
    }
  }

  static load(id: string): Player | null {
    return changetype<Player | null>(store.get("Player", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get team(): Array<string> {
    let value = this.get("team");
    return value!.toStringArray();
  }

  set team(value: Array<string>) {
    this.set("team", Value.fromStringArray(value));
  }
}

export class Team extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Team entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Team must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Team", id.toString(), this);
    }
  }

  static load(id: string): Team | null {
    return changetype<Team | null>(store.get("Team", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get teamID(): BigInt {
    let value = this.get("teamID");
    return value!.toBigInt();
  }

  set teamID(value: BigInt) {
    this.set("teamID", Value.fromBigInt(value));
  }

  get members(): Array<string> {
    let value = this.get("members");
    return value!.toStringArray();
  }

  set members(value: Array<string>) {
    this.set("members", Value.fromStringArray(value));
  }
}

export class EpnsNotificationCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save EpnsNotificationCounter entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EpnsNotificationCounter must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EpnsNotificationCounter", id.toString(), this);
    }
  }

  static load(id: string): EpnsNotificationCounter | null {
    return changetype<EpnsNotificationCounter | null>(
      store.get("EpnsNotificationCounter", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalCount(): BigInt {
    let value = this.get("totalCount");
    return value!.toBigInt();
  }

  set totalCount(value: BigInt) {
    this.set("totalCount", Value.fromBigInt(value));
  }
}

export class EpnsPushNotification extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EpnsPushNotification entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EpnsPushNotification must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EpnsPushNotification", id.toString(), this);
    }
  }

  static load(id: string): EpnsPushNotification | null {
    return changetype<EpnsPushNotification | null>(
      store.get("EpnsPushNotification", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get notificationNumber(): BigInt {
    let value = this.get("notificationNumber");
    return value!.toBigInt();
  }

  set notificationNumber(value: BigInt) {
    this.set("notificationNumber", Value.fromBigInt(value));
  }

  get recipient(): string {
    let value = this.get("recipient");
    return value!.toString();
  }

  set recipient(value: string) {
    this.set("recipient", Value.fromString(value));
  }

  get notification(): string {
    let value = this.get("notification");
    return value!.toString();
  }

  set notification(value: string) {
    this.set("notification", Value.fromString(value));
  }
}
