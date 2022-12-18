var contents = new Array()
contents[0] = '<div class="container"><img class="plc" src="ted.png" alt="Avatar" class="image"><div class="overlay"><div class="text"><h3>Ted Valentin</h3>"Anna is one of the most driven Hyper Island-students I have met. She is curious to learn new things both on a philosophical and on a practical level. Working with Anna has been great!"</div></div></div>'
contents[1] = '<div class="container"><img class="plc" src="jenny.png" alt="Avatar" class="image"><div class="overlay"><div class="text"><h3>Jenny Westin Verona</h3>"Anna is a a very ambitious person taking projects to the next level. She has a wide skill set that goes from doing those tricky phone calls, via Italian to mastering the art of analyzing data at a high level. She is a true pleasure to work with!"</div></div></div>'
contents[2] = '<div class="container"><img class="plc" src="tor.png" alt="Avatar" class="image"><div class="overlay"><div class="text"><h3>Tor Rauden Källsigen</h3>"Anna is a true rising star, who takes on every assignment with total dedication!"</div></div></div>'
contents[3] = '<div class="container"><img class="plc" src="hakan.png" alt="Avatar" class="image"><div class="overlay"><div class="text"><h3>Håkan Waara</h3>"Anna is an analytical and dedicated person, and helped find many new ways to analyze our data!"</div></div></div>'
contents[4] = '<div class="container"><img class="plc" src="saga.png" alt="Avatar" class="image"><div class="overlay"><div class="text"><h3>Saga Forsmark</h3>"Anna was very professional, advising and honest throughout the work process and contributed to both the job itself and with insights for how to restructure the work moving forward. I would gladly work with her again."</div></div></div>'
var i = 0
var random
while (i < contents.length) {
    random = Math.floor(Math.random() * contents.length)
    if (contents[random] != "selected") {
        document.querySelector(".container1").innerHTML += contents[random];
        contents[random] = "selected"
        i++
    }
}