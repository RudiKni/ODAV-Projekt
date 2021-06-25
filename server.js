const express = require('express')
const server = express()
const port = 3000

let numbers = {


}
   

// ID und Zufallszahl
let get = function (req, res){

    // Abgefragte ID auslesen
    let requestedID = req.query.ID;

    //Test ob für die ID bereits eine Zufallszahl existiert
    let rand;

    //Zufallszahl existiert noch nicht
    if (numbers[requestedID]==undefined){
        rand = Math.floor(Math.random() * 100)
        numbers[requestedID] = rand
    // Zufallszahl existiert
    }else {
        rand = numbers[requestedID]

    }

    // Resource bestehend aus ID und Zufallszahl
    let resource = {
        ID: requestedID,
        randomNumber: rand

    }

    // Anzeige in der Console zum Überprüfen
    console.log(numbers)

    
    res.send(resource)
}




server.get(`/`, function(req, res){
    res.send(`Server is running.`)
})

server.get(`/number`, get)

server.listen(port, function(){
    console.log(`Example server listening at http://localhost:${port}`)
})