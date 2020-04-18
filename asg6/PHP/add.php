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
              <li><a href="../index.html">Home</a></li>
              <li><a href="../madlibs.html">Madlibs</a></li>
              <li><a class="active" href="../add.html">Calculator</a></li>
              <li><a href="../quiz.html">Quiz</a></li>
              <li><a href="../store.html">Store</a></li>
          </ul>
      </nav>
      
      <article>
        
          <p>
              <?php echo $_POST["number1"]; ?> <?php echo $_POST["op"]; ?> <?php echo $_POST["number2"]; ?>  =<?php
              $first = $_POST['number1'];
              $second= $_POST['number2'];
              $opperation = $_POST["op"];

              if ($opperation == "plus"){
                  echo $first + $second;
              }
              elseif ($opperation == "minus"){
                  echo $first - $second;
              }
              elseif ($opperation == "div"){
                  echo $first / $second;
              }
              elseif ($opperation == "mult"){
                  echo $first * $second;
              }
              ?>
          </p>
          
      </article>
      

      <footer class = "footer">
          <p> © 2019 Karan Gaikwad</p>
      </footer>
      
      
      

      
  </body>
</html>