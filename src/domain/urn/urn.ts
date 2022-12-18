import { ParticipantSubscription } from "../participant-subscription";
import { DuplicatedSubscriptionError } from "./errors/duplicated-substricption-error";
import { UrnIsEmptyError } from "./errors/urn-is-empty-error";

export class Urn {

    private subscriptions: Set<ParticipantSubscription>;

    constructor() {
        this.subscriptions = new Set<ParticipantSubscription>();
    }

    public introduceSubscription(subscription: ParticipantSubscription) : void {
        if (this.subscriptions.has(subscription)) {
            throw new DuplicatedSubscriptionError();
        }

        this.subscriptions.add(subscription);
    }

    public getRandomSubscription() : ParticipantSubscription {
        if (this.subscriptions.size == 0 ) {
            throw new UrnIsEmptyError();
        }

        const shuffledSubscriptions: ParticipantSubscription[] = Array.from(this.subscriptions);
        const length = shuffledSubscriptions.length;
        for(let i = 0; i < length; i++) {
            this.shufflePositions(shuffledSubscriptions, this.getRandom(length - 1), this.getRandom(length - 1));
        }

        const selected : ParticipantSubscription = shuffledSubscriptions.pop();
        this.subscriptions.delete(selected);

        return selected;
    }

    private getRandom(max: number) : number {
        return ((Math.random() * 1000) % max) + 1;
    }

    private shufflePositions(array: Array<any>, posA: number, posB: number) : void {
        const temp = array[posB];
        array[posB] = array[posA];
        array[posA] = temp;
    }
}