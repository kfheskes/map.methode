//gedrag
// doorzoekt automatisch de gehele array
// find () geeft een entry terug die hieraan voldoet (altijd eerste)
// filter() geeft alle entries terug die hieraan voldoen.
// let op: de orignele array wordt niet aangepast.

// syntax
// krijgt een anonieme (callback) functie mee waarin we de zoekopdracht kunnen specificeren
// de parameter die je meegeeft bevat altijd de volledige entry van die loop
// de return statement bepaalt of die entry wel of niet wordt teruggegeven (verwacht altijd true of false)


const studentDetails = [
    {
        name: 'Henk Jansen',
        email: 'henk@novi-education.nl',
        course: 'FSD Bootcamp',
    },
    {
      name: 'Pier Pieters',
      email: 'pieters@novi-education.nl',
      course: 'HBO Software devlopment',
    },
    {
        name: 'Marieke Smit',
        email: 'm.smit@novi-education.nl',
        course: 'FSD Bootcamp',
    },
];

// let henksEmail = '';
//
// for (let i = 0; i < studentDetails.length; i++){
//     if (studentDetails[i].name === 'Henk Jansen') {
//         henksEmail = studentDetails[i].email;
//     }
// }

const henksDetails = studentDetails.find ((studentDetail ) =>{
    if (studentDetails.name === 'Henk Jansen'){
        return true;
    }
    return false;
});

// console.log(henksDetails.email);

const bootcampers = studentDetails.filter ((studentDetail)=>{
console.log(studentDetail.course)
});

// console.log(henksEmail);

