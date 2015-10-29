<html>
<head>
<title>Curator</title>
<link rel="stylesheet" type="text/css" href="index.css">

<script type="text/javascript" src="js/jquery-1.9.0.min.js"></script>
<script type="text/javascript" src="js/extract.js"></script>
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
            <input type="url" id="get_url" class="input" placeholder="Enter url to preview (including http://)" spellcheck="false" >
            <img id="loading_indicator" src="images/ajax-loader.gif">
            <div id="results">
            </div>
            <a id="addadd" class="adder confirmpreview" href="">click to confirm text and image</a>
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
