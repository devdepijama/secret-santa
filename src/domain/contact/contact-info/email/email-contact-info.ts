import { ContactInformation } from "../../contact-info";
import { ContactType } from "../../contact-type";

export class EmailContactInformation implements ContactInformation<String> {

    private readonly email: string;

    constructor(email : string) {
        this.email = email;
    }

    getContactType(): ContactType {
        return ContactType.EMAIL;
    }

    getContactCoordinates(): String {
        return this.email;
    }

}