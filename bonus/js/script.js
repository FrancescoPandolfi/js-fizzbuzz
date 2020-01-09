// Scrivi un programma che stampi i numeri da 1 a 100



for (var i = 1; i < 101; i++) {

  // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
  if (i % 3 == 0 && i % 5 == 0) {
    document.getElementById('lista_numeri').innerHTML += "<li>" + "FizzBuzz" + "</li>";
    i++;
  }

  // ma per i multipli di 3 stampi “Fizz” al posto del numero
  if (i % 3 == 0) {
    console.log("Fizz");
    document.getElementById('lista_numeri').innerHTML += "<li>" + "Fizz" + "</li>";
    i++;
  }

  // e per i multipli di 5 stampi Buzz.
  if (i % 5 == 0) {
    document.getElementById('lista_numeri').innerHTML += "<li>" + "Buzz" + "</li>";
    i++;
  }

  if (i < 100) {
    document.getElementById('lista_numeri').innerHTML += "<li>" + i + "</li>";
  }


}
