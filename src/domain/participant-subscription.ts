import { ContactInformation } from "./contact/contact-info";
import { ContactType } from "./contact/contact-type";
import { Participant } from "./participant";

export class ParticipantSubscription {
    private readonly participant: Participant;

    constructor(participant: Participant) {
        this.participant = participant;
    }
}