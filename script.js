const baseUrl="https://image.tmdb.org/t/p/original"; 
        $(window).scroll(function(evt){
            if(window.scrollY>120)
                {
                  $("nav").addClass("black");
                }
            if(window.scrollY<120)
                {
                    $("nav").removeClass("black");
                }
        });
    $(document).ready(function(){
        $.getJSON(
        "https://api.themoviedb.org/3/trending/all/day?api_key=2bbd0f1611f595bc4a06e39bc7e03a00",
        function(data)
            {
                key=data.results.length;
                var random=Math.ceil(Math.random()*key); $(".backdrop").attr("src",`${baseUrl+data.results[random].backdrop_path}`);
                $(".title").html(`${data.results[random].original_title}`);
                str=data.results[random].overview;
                newstr=str.slice(0,70);
                if(newstr.length==str.length)
                    {
                        
                     $(".overview").html(newstr);   
                    }
                else
                    {
                        
                $(".overview").html(newstr+"...");
                    }
            }
        );
        
        /*Top rated*/
        $.getJSON(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2bbd0f1611f595bc4a06e39bc7e03a00&language=en-US&page=1",
        function(data){
            $.each(data.results,function(key,value){
                $(".poster").append(
                `<div class="poster-column" data-id=${value.id}>
                    <img src="${baseUrl+value.poster_path}"/>
                 </div>`
                );
            });
        }
        );
        
        $(document).on("click",".poster-column",function(){
            var movie_id=$(this).attr("data-id");
            $.getJSON(
    "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?api_key=2bbd0f1611f595bc4a06e39bc7e03a00&language=en-US",
        function(data)
            {
             console.log(data.results);
            $.each(data.results,function(key,value)
            {
                   if(value.type=="Trailer")
                {
                    $(".video").html(`<iframe width="420" height="345" class="close" src="https://www.youtube.com/embed/${value.key}?autoplay=1" frameborder="0" allowfullscreen></iframe>
                    <i class="fas fa-times" id="close-button"></i>
`);
                }
                   });
            }
            );
        });
        
        $(document).on("click","#close-button",function(){
           $(".video").empty();
        });
        
         $(document).on("click",".small-poster-column",function(){
            var movie_id=$(this).attr("data-id");
            $.getJSON(
    "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?api_key=2bbd0f1611f595bc4a06e39bc7e03a00&language=en-US",
        function(data)
            {
             console.log(data.results);
            $.each(data.results,function(key,value)
            {
                   if(value.type=="Trailer")
                {
                    $(".video").html(`<iframe width="420" height="345" class="close" src="http://www.youtube.com/embed/${value.key}?autoplay=1" frameborder="0" allowfullscreen></iframe>
                    <i class="fas fa-times" id="close-button"></i>
`);
                }
                   });
            }
            );
        });
        
        /*Action*/
        $.getJSON(
        "https://api.themoviedb.org/3/discover/movie?api_key=2bbd0f1611f595bc4a06e39bc7e03a00&language=en-US&sort_by=popularity.desc&include_video=true&page=2&with_genres=28",
        function(data){
            $.each(data.results,function(key,value){
                $("#action").append(
                `<div class="small-poster-column" data-id=${value.id}>
                    <img src="${baseUrl+value.poster_path}"/>
                 </div>`
                );
            });
        }
        );
        
        /*Comedy*/
        $.getJSON(
        "https://api.themoviedb.org/3/discover/movie?api_key=2bbd0f1611f595bc4a06e39bc7e03a00&language=en-US&sort_by=popularity.desc&include_video=true&page=2&with_genres=35",
        function(data){
            $.each(data.results,function(key,value){
                $("#comedy").append(
                `<div class="small-poster-column" data-id=${value.id}>
                    <img src="${baseUrl+value.poster_path}"/>
                 </div>`
                );
            });
        }
        );

        /*Horror*/
        $.getJSON(
        "https://api.themoviedb.org/3/discover/movie?api_key=2bbd0f1611f595bc4a06e39bc7e03a00&language=en-US&sort_by=popularity.desc&include_video=true&page=2&with_genres=27",
        function(data){
            console.log(data);
            $.each(data.results,function(key,value){
                $("#horror").append(
                `<div class="small-poster-column" data-id=${value.id}>
                    <img src="${baseUrl+value.poster_path}"/>
                 </div>`
                );
            });
        }
        );
        
        $.getJSON(
        "https://api.themoviedb.org/3/discover/movie?api_key=2bbd0f1611f595bc4a06e39bc7e03a00&language=en-US&sort_by=popularity.desc&include_video=true&page=2&with_genres=10749",
        function(data){
            console.log(data);
            $.each(data.results,function(key,value){
                $("#romance").append(
                `<div class="small-poster-column" data-id=${value.id}>
                    <img src="${baseUrl+value.poster_path}"/>
                 </div>`
                );
            });
        }
        );
        
    
    });