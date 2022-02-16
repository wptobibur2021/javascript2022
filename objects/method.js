const student = {
    name: 'Md Tobibur Rohman',
    id: 101,
    fName: 'Demo Father',
    mName: 'Demo Mother',
    money: 5000,
    bestFriend: {
      name: 'Anisur Rahman',
      id: 201,
      mejor: 'English'
    },
    takeExam: function (){
        console.log('Best Friend Information: ', this.bestFriend.name, this.bestFriend.mejor)
        console.log(this.name, 'Please take the exam.')
    },
    collageFee: function (fee) {
        console.log('Total Balance: ', this.money)
        this.money = this.money - fee
        return this.money
    }
}
student.takeExam();
const collageFee = student.collageFee(3000)
console.log('Collage Fee Pay After Balance: ', collageFee)