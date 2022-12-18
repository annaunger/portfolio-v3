var contents=new Array()
contents[0]='<a class="gallery-item" href="http://www.tedvalentin.com/"><img src="ted.png" alt="Ted Valentin"><span class="text-wrapper"><span class="name">"Anna is one of the most driven Hyper Island-students I have met. She is curious to learn new things both on a philosophical and on a practical level.<br>Working with Anna has been great!"</span><span class="title"><br><strong>Ted Valentin</strong></span></span></a>'
contents[1]='<a class="gallery-item" href="https://se.linkedin.com/in/saga-forsmark-318a3129"><img src="saga.png" alt="Saga Forsmark"><span class="text-wrapper"><span class="name">"Anna was very professional, advising and honest throughout the work process and contributed to both the job itself and with insights for how to restructure the work moving forward.<br>I would gladly work with her again."</span><span class="title"><br><strong>Saga Forsmark</strong></span></span></a>'
contents[2]='<a class="gallery-item" href="http://torrauden.com/"><img src="tor.png" alt="Tor Rauden Källstigen"><span class="text-wrapper"><span class="name">"Anna is a true rising star, who takes on every assignment with total dedication!"</span><span class="title"><br><strong>Tor Rauden Källstigen</strong></span></span></a>'
contents[3]='<a class="gallery-item" href="https://se.linkedin.com/in/håkan-waara-4b318214"><img src="hakan.png" alt="Håkan Waara"><span class="text-wrapper"><span class="name">"Anna is an analytical and dedicated person, and helped find many new ways to analyze our data!"</span><span class="title"><br><strong>Håkan Waara</strong></span></span></a>'
contents[4]='<a class="gallery-item" href="https://se.linkedin.com/in/jenny-westin-verona"><img src="jenny.png" alt="Jenny Westin Verona"><span class="text-wrapper"><span class="name">"Anna is a a very ambitious person taking projects to the next level. She has a wide skill set that goes from doing those tricky phone calls, via Italian to mastering the art of analyzing data at a high level.<br>She is a true pleasure to work with!"</span><span class="title"><br><strong>Jenny Westin</strong></span></span></a>'
var i=0
                var random
                while (i<contents.length){
                    random=Math.floor(Math.random()*contents.length)
                    if (contents[random]!="selected"){
                        document.querySelector(".gallery").innerHTML += contents[random];
                        contents[random]="selected"
                        i++
                    }
                }