/*You have an object like this:
const obj = {
  firstName: "Bill",
  lastName: "Brown"
}
You need to write:
1) getter "fullName" which returns fullname of a purson like "Bill Brown"
2) function "hiEveryone" which logs "Hello everyone, my name is *fullName*" to the screen,
where *fullName* is a string which returns getter "fullName"
3) setter "setFullName" which sets firstName and lastName to the object
4) add a prototype function "sayHello" to "obj" which logs "hello"
5) create a class that extends "obj"
6) overwrite the prototype function "sayHello" to log "hello, my name is *fullName*"
where *fullName* is a string which returns getter "fullName"*/
const obj = {
  firstName: "Bill",
  lastName: "Brown"
}

get fullName() {
  return (obj.firstName + obj.lastName);
}

console.log(obj.fullName());
