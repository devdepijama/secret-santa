import { ContactType } from "./contact-type";

export interface ContactInformation<T> {
    getContactType() : ContactType;
    getContactCoordinates(): T;
}