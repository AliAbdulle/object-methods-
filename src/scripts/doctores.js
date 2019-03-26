//Lightning Exercise 2: Copy the code below and paste it above your object.
const doctorOffice = 
    {
        officeName: "Physician",
        streetAddress: "1009 Clenburg",
        doctorName: "Ali Abdulle",
        patientName: "Honda",
        visitDate: "01/21/2018",
        amountBilled: 120,
        dueDate: "02/12/2018"
    }
 //Use square bracket notation to output the value of those three properties to the console in Chrome.
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

//Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
console.log("date visited", doctorOffice[dateVisited])
console.log("amount awed", doctorOffice[owed])
console.log("patient name", doctorOffice[patient])


console.log("All values in doctorBill object:")
for (const value of Object.values (doctorOffice))
console.log(value)

