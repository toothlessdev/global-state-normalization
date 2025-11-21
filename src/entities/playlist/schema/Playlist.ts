import type { Track } from "../../track/schema/Track";

export interface Playlist {
    id: number;
    name: string;
    tracks: Track[];
}
