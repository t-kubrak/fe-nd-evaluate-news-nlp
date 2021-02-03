import { checkText } from "../src/client/js/textChecker"

describe("Testing the text checking functionality", () => {
    test("Testing the checkText() function", () => {
        expect(() => checkText(2)).toThrowError();
        expect(() => checkText('test')).not.toThrowError();
    })
});