const student = {
    name: 'Md Tobibur Rohman',
    id: 202,
    fName: 'Md Shahidul Islam',
    address: 'Dhaka'
}
/* First wey we get object value */
for(const stu in student){
    console.log(stu, ': ',student[stu])
}

/* Second wey we get object value & Keys */

const keys = Object.keys(student)
console.log('Keys of Object: ', keys)
for (const prop of keys){
    console.log(prop, ':', student[prop])
}