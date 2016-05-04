/**
 * Created by kumak7 on 22-04-2016.
 */
describe("Hello", function() {
    it("says hello to receiver", function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
});