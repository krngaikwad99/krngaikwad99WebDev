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
              <li><a href="../add.html">Calculator</a></li>
              <li><a href="../quiz.html">Quiz</a></li>
              <li><a class="active" href="../store.html">Store</a></li>
          </ul>
      </nav>
      
      <article>
          


        <h2> Receipt </h2>
          <h3> Name: <?php echo $_POST["name"];?> </h3>
          <h3> Email: <?php echo $_POST["email"];?> </h3>
          <h3>Invoice:</h3>
          <h5> - Ordered: <?php echo $_POST["food"];?></h5>
          <h5> - Quantity: <?php echo $_POST["quantity"];?></h5>


        <h3>Total</h3>
          $<?php $op = $_POST["food"];

        if ($op == "cheese"){
          echo ($_POST["quantity"] * 5);
        }
        else if ($op == "bread"){
          echo ($_POST["quantity"] * 2);
        }

        ?>
          
      </article>
      

      <footer class = "footer">
          <p> © 2019 Karan Gaikwad</p>
      </footer>
      
      
      
      
      <script src="jquery-3.4.1.min.js"> </script>
      <script src="jquery-validation-1/dist/jquery.validate.min.js"> </script>
      <script src="asg6.js"> </script>
      
  </body>
</html>