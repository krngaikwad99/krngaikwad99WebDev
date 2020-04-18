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
          <h1 id="head">Assignment 7</h1>
      
          <h4 id="subhead">Click below on the navigation bar to see all the parts of this assignment! Thanks!</h4>
      </header>
          
      <nav>
          <ul>
              <li><a href="../index.html">Login Page</a></li>
              <li><a class="active" href="../cart.html">Shopping Cart</a></li>
              <li><a href="../search.html">Search Products</a></li>

          </ul>
      </nav>
      
      <article>

          <img src= "lamp.jpg" alt= "Fancy Lamp" height="200px">
          <img src= "mirror.jpg" alt= "Fancy Mirror" height="200px">
          
          
          <?php 
            
            $l = $_POST("l");
            $m = $_POST("m");
            $s = $_POST("shipping");
            $shippingcost = (int) $s;
            $lampcost = ((int) $l) * 300;
            $mirrorcost = ((int) $m) * 500;
            $tax = ($lampcost + $mirrorcost) * 0.0875;
            $total = $lampcost + $mirrorcost + $tax + $shippingcost;
          
            echo "Total lamp cost: ".$l;
            echo "Total mirror cost: ".$m;
            echo "Total shipping cost: ".$shippingcost;
            echo "Total tax cost: ".$tax;
            <br><br>
            echo "Total: ".$total;
            echo "Thank you for shopping with us!";
          
          
          ?>

          
          
      </article>
      

      <footer class = "footer">
          <p> © 2019 Karan Gaikwad</p>
      </footer>
      
      <script src="../jquery.min.js"> </script>
      <script src="../asg7.js"> </script>
      
  </body>
</html>