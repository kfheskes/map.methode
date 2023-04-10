const students = ['Henk', 'Piet', 'Klaas', 'Fred'];

// for (let i = 0; i < students.length; i++) {
//     students[i] = students[i] + 'je';
// }

// console.log(students);

// de map methode
// iteert automatisch over de gehele lengte van de array
// voor iedere entry wordt de anonieme functie uitgevoerd
// maakt een nieuwe array op basis van wat in je return statement zet.
// de parameter die je callback meegeeft bevat altijd de volledige entry van die loop
// let op: de originele array wordt niet aangepast

const outcome = students.map ( (student) =>{
   return student + 'je';

});

console.log(outcome);

// const emailadresses = studentDetails.map ( ()=>{
//    return studentDetail.email;
// });
//
// console.log(emailadresses);