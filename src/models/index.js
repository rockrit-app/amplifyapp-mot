// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Broadcaster, Session, Championship, Event, SessionBroadcaster, ChampionshipEvent } = initSchema(schema);

export {
  Broadcaster,
  Session,
  Championship,
  Event,
  SessionBroadcaster,
  ChampionshipEvent
};