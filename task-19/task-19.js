var guestList = ["Babar Azam", "Shadab Khan", "Zayn Malik", "Saddie Sink"];
guestList.unshift("Khabib Nurmagomedov");
guestList.splice(3, 0, "Conor McGregor");
guestList.push("Imran Khan");
console.log('Total Numbers of Guests invited are: ', guestList.length);
