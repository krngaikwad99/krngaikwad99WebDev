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
          <h1 id="head">Login</h1>
      
          <h4 id="subhead">Click below on the navigation bar to see all the parts of this assignment! Thanks!</h4>
      </header>
          
      <nav>
          <ul>
              <li><a href="../index.html">Enrollment Page</a></li>
              <li><a href="../cart.html">Shopping Cart</a></li>
              <li><a class="active" href="../search.html">Search Products</a></li>
          </ul>
      </nav>
      
      <article>

          <?php
          
            $input = $_POST("search");
            $file = fopen("products.txt", "r");
            if ($file) {
                while (!feof($file)) {
                    $descriptionarray = explode(":",fgets($file));
                    if ($descriptionarray[0] == $input) {
                        print($descriptionarray[1]);
                    }
                }
            fclose($file);
            } else {
                print("Sorry, product not found. Check spelling");
            }
          
          ?>
          
      </article>
      

      <footer class = "footer">
          <p> © 2019 Karan Gaikwad</p>
      </footer>
      
      
      
      <script src="../jquery.min.js"> </script>
      <script src="../asg7.js"> </script>
      
  </body>
</html>