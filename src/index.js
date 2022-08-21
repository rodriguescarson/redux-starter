// import { produce } from "immer"
// // import { compose, pipe } from 'lodash/fp';
// // let input = "  JavaScript  ";
// // //let output = "<div>" + input.trim() + "</div>";
// // const trim = str => str.trim();
// // const wrap = str => span => `<${span}>${str}</${span}>`;
// // const toLowerCase = str => str.toLowerCase();
// // //const result = wrapInDiv(toLowerCase(trim(input)));

// // const transform = pipe(trim, toLowerCase, wrap("div"))
// // console.log(transform(input))

// // let book = { title: "Harry Potter" };
// // function publish(book) {
// //     book.isPublished = true;
// // }
// // publish(book);
// // console.log(book);

// let book = { title: "Harry Potter" };
// function publish(book) {
//     return produce(book, draftBook => {
//         draftBook.isPublished = true;
//     }
//     )
// }
// let updated = publish(book);
// console.log(book);
import { bugAdded, bugResolved } from "./actions";
import store from "./store";
// const subscribe = store.subscribe(() => {
//     console.log("Stored changed!", store.getState());
// })
console.log(store.getState());
store.dispatch(bugAdded("Bug1"));
console.log(store.getState());
store.dispatch(bugResolved(0));
console.log(store.getState());
// unsubscribe();

// store.dispatch()
