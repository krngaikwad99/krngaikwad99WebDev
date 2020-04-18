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
              <li><a href="../madlibs.html">Madlibs</a></li>
              <li><a href="../add.html">Calculator</a></li>
              <li><a ref="../quiz.html">Quiz</a></li>
              <li><a href="../store.html">Store</a></li>
          </ul>
      </nav>
      
      <article>
          
          <h1> KENDRICK LAMAR QUIZ (Results)</h1>

          <pre>
          <?php echo $_POST["fname"];?> <?php echo $_POST["lname"];?> Grade:
          <?php $correct = 0;
            if ($_POST["q1"] == "duckworth"){
                $correct++;
            }
            if ($_POST["q2"] == "80"){
                $correct++;
            }
            if ($_POST["q3"] == "False"){
                $correct++;
            }
            echo ($correct / 3)*100;
            ?>%

            <b>Answer Key</b>
                Question 1: <?php echo $_POST["q1"];?>
                CORRECT ANSWER: Duckworth (you can hear about it on the album "Damn")
                Question 2: <?php echo $_POST["q2"];?>
                Question 2: Section 80 (Released 2011)
                Question 3: <?php echo $_POST["q3"];?>
                CORRECT ANSWER: False (They somewhat sang together on the collab "Black Friday", but officially sang together on the songs "American Dream" and "Forbidden Fruit")
                
        </pre>

          
      
      </article>
      

      <footer class = "footer">
          <p> © 2019 Karan Gaikwad</p>
      </footer>
      

      
  </body>
</html>