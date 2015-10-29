<html>
<head>
<title>Curator</title>
<link rel="stylesheet" type="text/css" href="index.css">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>  
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js" ></script>
<script type="text/javascript" src="js/extract.js"></script>
<script type="text/javascript" src="js/jquery.ui.touch-punch.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<body>
    <div class="container">
        <p id="label">create your own list now</p>
        <ul class="tools">
            <li id="atitle">title</li>
            <li id="atext">text</li>
            <li id="aurl">url preview</li>
            <li id="aimage">image</li>
        </ul>           
    
        <div id="gtitle">
            <input type="text" id="ctitle" class="input" placeholder="Enter list title" />
            <a id="addtitle" class="adder" href="">+</a>
        </div>
     
    
        <div id="gtext">
            <textarea placeholder="Enter text content. Use shift+enter for newline. " id="ctext" class="input"></textarea>
            <a id="addtext" class="adder" href="">+</a>
        </div>
        
        <div id="gurl" class="">
            <input type="url" id="get_url" class="input" placeholder="Enter url to preview" spellcheck="false" >
            <img id="loading_indicator" src="images/ajax-loader.gif">
            <div id="results">
            </div>
            <p class="hint confirmpreview">You can edit the title and text by clicking on them. You can also change the image displayed.</p>
            <a id="addadd" class="adder confirmpreview" href="">click here add url preview</a>
        </div>

        <div id="gimage">
            <input type="url" id="cimage" class="input" placeholder="Enter url of image (including http://)">
            <a id="addimage" class="adder" href="">+</a>
        </div>
 

        <div style"width:80%; font-size:10px" id="curate_article">
        <h1 id="articletitle"></h1>
        </div>
    <div>
</body>
</html>
