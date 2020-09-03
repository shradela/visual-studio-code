import {Location} from './location';
import {Media} from './media';
import {VenueDates} from './venue-dates';

export interface Venue {
    trcid: string,
    title: string,
    location: Location,
    media: Media[],
    ulrs: URL[],
    dates: VenueDates
}
