$(document).ready(function(){
   
    var key = 'AIzaSyBQVOD-SEd1ApjQTgwR7uxtv_Rsfx2ZJv4';
    var playlistId ='PLSSFkq3i52zaCS0WoyM-47FKoQfZklzMp' ;
    var URL= 'https://www.googleapis.com/youtube/v3/playlistItems'
    var id = $(this).attr('data-key');

    var options= {
        part: "snippet",
        key : key,
        maxResults: 10,
        playlistId : playlistId,

    }
    loadVids();
    function loadVids(){
        $.getJSON(URL,options, function(data){
          console.log(data);
          var id = data.items[0].snippet.resourceId.videoId;
          mainVid(id);
          resultsLoop(data);
        }) //getJason
    } //function loadVids

    function mainVid(id){
        $('#video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
        );
    }  //function mainVid
    
    function resultsLoop(data){

        $.each(data.items, function(i,item){
            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0,100);
            var vid = item.snippet.resourceId.videoId;

            
            $('main').append(`
                       <article class="item" data-key="${vid}">
                       <img src="${thumb}" alt="" class="thumb">
                       <div class="details">
                       <h4>${title}</h4>
                       <p>${desc}</p>
                       </div>
                       </article>`
                       );

                 
        });
        

        
        
    }  //function resultLoop
    
    $('main').on('click','article' ,function(){
        var id = $(this).attr('data-key');
        mainVid(id);
    });  //on click event



}); //document.ready


