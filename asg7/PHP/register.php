<!DOCTYPE html>
<html>
  <head>
    <title>  Assignment 7 Site </title>
    <link rel="stylesheet" type="text/css" href="../asg7.css">
      <!-- Prevent smartphones from scaling pages down -->
      <meta name="viewport" content="initial-scale=1">

  </head>
  <body>
      
      <header>
          <h1 id="head">Register</h1>
      
          <h4 id="subhead">Click below on the navigation bar to see all the parts of this assignment! Thanks!</h4>
      </header>
          
      <nav>
          <ul>
              <li><a class="active" href="../index.html">Enrollment Page</a></li>
              <li><a href="../cart.html">Shopping Cart</a></li>
          </ul>
      </nav>
      
      <article>
          
          <?php
          
                $username = $_POST['username'];
                $password = $_POST['password'];


                $filea = fopen("users.txt","a") or die("Can't open file");

                $line= $username.":".$password."\n";

                fwrite($filea, $line);

                fclose($filea);
          
                print("Thank you for registering, $username !");
          ?>
          
      
      </article>
      

      <footer class = "footer">
          <p> © 2019 Karan Gaikwad</p>
      </footer>
      
      
      
      <script src="../jquery.min.js"> </script>
      <script src="../asg7.js"> </script>
      
  </body>
</html>