import { EventImage } from "./events/event_image.model";

export interface event {
    id: number,
    name: string,
    description: string,
    statue: string,
    maxPlace: string,
    location: number,
    start: string,
    end: string,
    images:EventImage[]
  }