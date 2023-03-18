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
    $("#loading").hide()
    $(".main").hide();
    $(".main").fadeIn(1000);
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
    $("#catfact").click(function(){
        $("#fact").text(`Loading...`);
        $("#loading").show();
        (async function() {
            let rawfact = await catAPI()
            rawfact = rawfact.replaceAll('<head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">', '')
            rawfact = JSON.parse(rawfact)["data"][0]
            console.log(rawfact)
            $("#fact").text(rawfact);
            $("#loading").hide()
         })()
        
      });
  });