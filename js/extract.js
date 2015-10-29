function adddrag(){
        $('#curate_article').sortable({
            placeholder: "ui-state-highlight",
            cursor: "move",
  //              revert: true,
                drag: function(event, ui){
                    this.style.backgroundColor = "rgba(255,0,0,0.1)";
                },
                stop: function(event, ui){ 
                    this.style.backgroundColor = "";
                },
        });
}


$(document).ready(function() {
    var getUrl  = $('#get_url'); //url to extract from text field
    getUrl.keyup(function() { //user types url in text field        
        //url to match in the text field
        var match_url = /\b([\-A-Z0-9.]+)(\/[\-A-Z0-9+&@#\/%=~_|!:,.;]*)?(\?[A-Z0-9+&@#\/%=~_|!:,.;]*)?/i;
        //returns true and continue if matched url is found in text field
        if (match_url.test(getUrl.val())) {
                $("#results").hide();
                $("#loading_indicator").show(); //show loading indicator image
                
                var extracted_url = getUrl.val().match(match_url)[0]; //extracted first url from text filed
                var pattern = /^((http|https|ftp):\/\/)/;
                if(!pattern.test(extracted_url)) {
                extracted_url = "http://" + extracted_url;
} 
                //ajax request to be sent to extract-process.php
                $.post('extract-process.php',{'url': extracted_url}, function(data){         
                    
                    extracted_images = data.images;
                    total_images = parseInt(data.images.length-1);
                    img_arr_pos = total_images;
                    
                    if(total_images>0){
                        inc_image = '<div class="extracted_thumb" id="extracted_thumb"><img src="'+data.images[img_arr_pos]+'" width="100" height="100"></div>';
                    }else{
                        inc_image ='';
                    }
                    //content to be loaded in #results element
                    var content = '<div class="extracted_url">'+ inc_image +'<div class="extracted_content" ><h4 class="editable" contentEditable><a href="'+extracted_url+'" target="_blank">'+data.title+'</a></h4><p class="editable" contentEditable>'+data.content+'</p><div class="thumb_sel"><span class="prev_thumb" id="thumb_prev">&nbsp;</span><span class="next_thumb" id="thumb_next">&nbsp;</span> </div><span class="small_text" id="total_imgs">'+img_arr_pos+' of '+total_images+'</span><span class="small_text">&nbsp;&nbsp;Choose a Thumbnail</span></div></div>';
                    
                    //load results in the element
                    $("#results").html(content); //append received data into the element
                    $("#results").slideDown(); //show results with slide down effect
                    $("#loading_indicator").hide(); //hide loading indicator image
                    $('.confirmpreview').show();
                },'json');
        }
    });


    //user clicks previous thumbail
    $("body").on("click","#thumb_prev", function(e){        
        if(img_arr_pos>0) 
        {
            img_arr_pos--; //thmubnail array position decrement
            
            //replace with new thumbnail
            $("#extracted_thumb").html('<img src="'+extracted_images[img_arr_pos]+'" width="100" height="100">');
            
            //show thmubnail position
            $("#total_imgs").html((img_arr_pos) +' of '+ total_images);
        }
    });
    
    //user clicks next thumbail
    $("body").on("click","#thumb_next", function(e){        
        if(img_arr_pos<total_images)
        {
            img_arr_pos++; //thmubnail array position increment
            
            //replace with new thumbnail
            $("#extracted_thumb").html('<img src="'+extracted_images[img_arr_pos]+'" width="100" height="100">');
            
            //replace thmubnail position text
            $("#total_imgs").html((img_arr_pos) +' of '+ total_images);
        }
    });
   
    // add extracted content from url to draft 
    $("#addadd").click(function(e){
        e.preventDefault();
        var toadd = $('#results').html();
        $('#curate_article').append('<section class="item"><a class="delete">X</a> '+toadd+'</section>'); 
        $('.editable').removeAttr('contentEditable');
        $('#results').empty();
        $('#get_url').val('');
        $('#gurl').css('visibility','hidden').css('height','0px');
        $('.thumb_sel, .small_text').remove();
        $('.confirmpreview').hide();
    });

    $("#addtext").click(function(e){
        e.preventDefault();
        var toadd = $('#ctext').val().replace(/\n/g, '<br />');
        $('#curate_article').append('<section class="item"><a class="delete">X</a><p class="bodytext"><span class="quote">&ldquo;</span>'+toadd+'<span class="quote">&rdquo;</span></p></section>'); 
        $('#ctext').val('');
        $('#gtext').css('visibility','hidden').css('height','0px');
        adddrag();
    });

    $("#addtitle").click(function(e){
        e.preventDefault();
        var toadd = $('#ctitle').val();
        $('#articletitle').text(toadd); 
        $('#ctitle').val('');
        $('#gtitle').css('visibility','hidden').css('height','0px');
    });

    $("#addimage").click(function(e){
        e.preventDefault();
        var toadd = $('#cimage').val();
        $('#curate_article').append('<section class="item"><a class="delete">X</a><img class="bodyimage" src="'+toadd+'"/></section>'); 
        $('#cimage').val('');
        $('#gimage').css('visibility','hidden').css('height','0px');
    });


    // show text add box 
    $('#atitle').click(function(e){
        e.preventDefault();
        if ($('#gtitle').css('visibility') == 'hidden'){
            $('#gtitle').css({'visibility':'visible','height':'auto'});
            $('#ctitle').focus();
        }
        else{
            $('#gtitle').css({'visibility':'hidden','height':'0px'});
        }
    });
    // show text add box 
    $('#atext').click(function(e){
        e.preventDefault();
        if ($('#gtext').css('visibility') == 'hidden'){
            $('#gtext').css({'visibility':'visible','height':'auto'});
            $('#ctext').focus();
        }
        else{
            $('#gtext').css({'visibility':'hidden','height':'0px'});
        }
    });

    // show url add box 
    $('#aurl').click(function(e){
        e.preventDefault();
        if ($('#gurl').css('visibility') == 'hidden'){
            $('#gurl').css({'visibility':'visible','height':'auto'});
            $('#get_url').focus();
        }
        else{
            $('#gurl').css({'visibility':'hidden','height':'0px'});
        }
    });

    // show image add box 
    $('#aimage').click(function(e){
        e.preventDefault();
        if ($('#gimage').css('visibility') == 'hidden'){
            $('#gimage').css({'visibility':'visible','height':'auto'});
            $('#cimage').focus();
        }
        else{
            $('#gimage').css({'visibility':'hidden','height':'0px'});
        }
    });

    $('#ctext').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13' & event.shiftKey !== true) {
            $('#addtext').click();
        }        
    });
    $('#ctitle').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13' & event.shiftKey !== true) {
            $('#addtitle').click();
        }        
    });
    $('#cimage').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13' & event.shiftKey !== true) {
            $('#addimage').click();
        }        
    });

    $('body').on('click', 'a.delete',function(){
        $(this).parent().remove();
    });
  
});
