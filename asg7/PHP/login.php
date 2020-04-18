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
              <li><a class="active" href="../index.html">Enrollment Page</a></li>
              <li><a href="../cart.html">Shopping Cart</a></li>
              <li><a href="../search.html">Search Products</a></li>
          </ul>
      </nav>
      
      <article>

          <?php
        
            $user = $_POST['username'];
            $password =$_POST['password'];

            $file = fopen("users.txt", "r");

            $flag = FALSE;

            while(!(feof($file))) {

                $line= fgets($file);
                $line = rtrim($line);
                $info = explode(":", $line);

                if (($user == $info[0] ) && ( $password == $info[1] )) {
                    $flag = TRUE;
                    break;
                }

            }

            if ($flag) {
                print("Thank you for signing in, $user !"); 
            } else {
                print("Can't enter site because of wrong username and password");
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