import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BroadcasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChampionshipMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionBroadcasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChampionshipEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Broadcaster {
  readonly id: string;
  readonly name?: string;
  readonly country?: string;
  readonly logo?: string;
  readonly sessions?: (SessionBroadcaster | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Broadcaster, BroadcasterMetaData>);
  static copyOf(source: Broadcaster, mutator: (draft: MutableModel<Broadcaster, BroadcasterMetaData>) => MutableModel<Broadcaster, BroadcasterMetaData> | void): Broadcaster;
}

export declare class Session {
  readonly id: string;
  readonly name?: string;
  readonly location?: string;
  readonly datetime?: string;
  readonly championshipID?: string;
  readonly Broadcasters?: (SessionBroadcaster | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Session, SessionMetaData>);
  static copyOf(source: Session, mutator: (draft: MutableModel<Session, SessionMetaData>) => MutableModel<Session, SessionMetaData> | void): Session;
}

export declare class Championship {
  readonly id: string;
  readonly name?: string;
  readonly Events?: (ChampionshipEvent | null)[];
  readonly Sessions?: (Session | null)[];
  readonly logo?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Championship, ChampionshipMetaData>);
  static copyOf(source: Championship, mutator: (draft: MutableModel<Championship, ChampionshipMetaData>) => MutableModel<Championship, ChampionshipMetaData> | void): Championship;
}

export declare class Event {
  readonly id: string;
  readonly name?: string;
  readonly location?: string;
  readonly championships?: (ChampionshipEvent | null)[];
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class SessionBroadcaster {
  readonly id: string;
  readonly broadcaster: Broadcaster;
  readonly session: Session;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SessionBroadcaster, SessionBroadcasterMetaData>);
  static copyOf(source: SessionBroadcaster, mutator: (draft: MutableModel<SessionBroadcaster, SessionBroadcasterMetaData>) => MutableModel<SessionBroadcaster, SessionBroadcasterMetaData> | void): SessionBroadcaster;
}

export declare class ChampionshipEvent {
  readonly id: string;
  readonly championship: Championship;
  readonly event: Event;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChampionshipEvent, ChampionshipEventMetaData>);
  static copyOf(source: ChampionshipEvent, mutator: (draft: MutableModel<ChampionshipEvent, ChampionshipEventMetaData>) => MutableModel<ChampionshipEvent, ChampionshipEventMetaData> | void): ChampionshipEvent;
}