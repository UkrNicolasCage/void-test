export interface IGetMatchRes {
  info: {
    participants: Array<IMatchParticipant>;
    gameDuration: number;
  }
}

export interface IMatchParticipant {
  kills: number;
  assists: number;
  deaths: number;
  puuid: string;
  summonerId: string;
  timePlayed: number;
  totalMinionsKilled: number;
  wardsPlaced: number;
}

export type IPlayerMatchesData = Array<{
    csPerMinute: number;
    wards: number;
    kills: number;
    deaths: number;
    assists: number;
}>