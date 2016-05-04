/**
 * Created by kumak7 on 21-04-2016.
 */
function sayHello(to) {
    return _.template("Hello, <%= name %>!")({name: to});
}