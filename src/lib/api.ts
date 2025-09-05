import api from "@/lib/axios";

export type Game = {
  id: string;
  gameName: string;
  imagePath: string;
};

export type Organizer = {
  id: string;
  name: string;
  profileImagePath: string;
};


export type Tournament = {
  id: number;
  name: string;
  thumbnailPath: string;
  entryFees: number;
  prizeCoins: string; 
  tournamentStartTime: number; 
  registrationEndTime: number; 
  organizerDetails: Organizer;
  status: "ongoing" | "completed" | "upcoming";
  gameName: string;
  teamSize: "solo" | "duo" | "squad" | string;
  registeredCount: number;
  totalCount: number;
};

export async function getGames(): Promise<Game[]> {
  return api.get("/games");
}

export async function getTournaments(): Promise<Tournament[]> {
  return api.get("/tournaments");
}

export async function getTournamentById(id: string): Promise<Tournament> {
  return api.get(`/tournaments/${id}`);
}
