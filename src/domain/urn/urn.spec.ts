import { UrnIsEmptyError } from "./errors/urn-is-empty-error";
import { Urn } from "./urn"

describe("Urn behaviour", () => {

    it("should be able to create an urn", () => {
        const urn = new Urn();
        expect(urn).toBeTruthy();
    });

    it("should not be able to get subscription if none was introduced", () => {
        const urn = new Urn();

        expect(() => {
            const subscription = urn.getRandomSubscription();
        }).toThrow(UrnIsEmptyError)
    });

    it("should not be able to introduce same subscription twice", () => {
        const urn = new Urn();

        expect(() => {
            const subscription = urn.getRandomSubscription();
        }).toThrow(UrnIsEmptyError)
    });
})
