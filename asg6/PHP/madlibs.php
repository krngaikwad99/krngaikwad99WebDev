<!DOCTYPE html>
<html>
  <head>
    <title>  Assignment 6 Site </title>
    <link rel="stylesheet" type="text/css" href="asg6.css">
      <!-- Prevent smartphones from scaling pages down -->
      <meta name="viewport" content="initial-scale=1">

  </head>
  <body>
      
      <header>
          <h1 id="head">Assignment 6</h1>
      
          <h4 id="subhead">Click below on the navigation bar to see all the parts of this assignment! Thanks!</h4>
      </header>
          
      <nav>
          <ul>
              <li><a class="active" href="../index.html">Home</a></li>
              <li><a href="../index.html">Madlibs</a></li>
              <li><a href="../add.html">Calculator</a></li>
              <li><a href="../quiz.html">Quiz</a></li>
              <li><a href="../store.html">Store</a></li>
          </ul>
      </nav>
      
      <article>
          

          
          <br>A <b> <?php echo $_GET["adjective1"]; ?> <?php echo $_GET["noun1"]; ?></b> wanted to <b><?php echo $_GET["verb1"]; ?></b><br>
          But how could they do it alone? There is no fun in doing it alone. They needed some help.<br>
          To help them, the <b><?php echo $_GET["adjective1"]; ?> <?php echo $_GET["noun1"]; ?></b> asked the <b><?php echo $_GET["adjective2"]; ?> <?php echo $_GET["noun2"]; ?></b> to <b><?php echo $_GET["verb1"]; ?></b>!<br>
          "I don't know if I can do this with you. I need to <b><?php echo $_GET["verb2"]; ?></b>," said the <b><?php echo $_GET["adjective2"]; ?> <?php echo $_GET["noun2"]; ?></b> "I think it would be better to go ask the <b><?php echo $_GET["noun3"]; ?></b>."<br>
          So the <b><?php echo $_GET["adjective1"]; ?> <?php echo $_GET["noun1"]; ?></b> went out and asked the <b><?php echo $_GET["noun3"]; ?></b><br>
          and the <b><?php echo $_GET["noun3"]; ?></b> said:<br>
          "oh why of course I would! But in order to <b><?php echo $_GET["verb1"]; ?></b> we need to do it many times! Let us <b><?php echo $_GET["verb1"]; ?></b> <b><?php echo $_GET["number"]; ?></b> times, only then will I join you."<br>
          And so they did. They went off to <b><?php echo $_GET["verb1"]; ?></b>, and they had such a wonderful splendid time together!<br><br>
          THE END
          <br>
          
      </article>
      

      <footer class = "footer">
          <p> © 2019 Karan Gaikwad</p>
      </footer>
      
      

      
  </body>
</html>