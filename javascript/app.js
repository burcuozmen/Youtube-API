$(function() {
    $("form").on("submit", function(e){
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
          part : "snippet",
          type: "video",
          q : encodeURIComponent ($("#search").val()).replace(/%20/g, "+" ),
          maxResults :3 ,
          order: "viewCount",

       });
       //execute the request
       request.execute(function(response) {
        console.log(response);
       });

    });

});

function init(){
    gapi.client.setApiKey("AIzaSyCm7EiGmQGVz0sYR-87sip8UPN_FSjF9ik");
    gapi.client.load("youtube" ,"v3" , function(){
        //youtube api is ready
    });
}
