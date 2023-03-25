async function catAPI() {
    let url = 'https://s4d-apis.fakefurry.repl.co/api/animals/catfacts';
    try {
        let res = await fetch(url);
        return await res.text();
    } catch (error) {
        console.log(error);
    }
}
$(document).ready(function(){
    $("#loading").hide()               // Hide loading animation
    $(".main").hide();                 // Hide all exept BG
    $(".main").fadeIn(1000);           // Fade all in

    $("#catfact").click(function(){    // Cat fact button

        $("#fact").text(`Loading...`);   // Tell the user that the fact is loading
        $("#loading").show();            // Show loading animation 
        (async function() {              // Get fact
            let rawfact = await catAPI() //Request fact
            rawfact = rawfact.replaceAll('<head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">', '')
            // Delete html tags
            
            rawfact = JSON.parse(rawfact)["data"][0]
            // Parse JSON fact
            // console.log(rawfact)

            $("#fact").text(rawfact);    // Replace  "Loading..." text with the fact
            $("#loading").hide()         // Hide loading animation
         })()
        
      });

    $(".drag").draggable()               // Make the cat.exe window draggable
    $( "#pannel" ).draggable("disable"); // Doesn't work
  });