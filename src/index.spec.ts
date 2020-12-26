import { init } from "./index";

describe('Initial test', () => {
    it('should return a number three', () => {
        expect(init()).toEqual(3);
    })
})