 <nav class="navbar navbar-expand-lg navbar-light bg-light">

   <a class="navbar-brand" href="#">Matematik online</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto">
       <li class="nav-item active">

         <a class="nav-link" href="<?php echo VIEWS_DIR ?>points.php" title="poäng">
           <i class="material-icons" style="color:yellow;">star</i>:
           <?php if (
              isset($_SESSION["current_user"]) && $_SESSION["current_user"] != null
              && $_SESSION["current_user"]->getId() != 17
            )
              echo ($_SESSION["current_user"]->getPoints());
            ?>
           <span class="sr-only">(current)</span></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="<?php echo VIEWS_DIR ?>welcome.php" title="hem">
           <i class="material-icons" style="color:blue;">home</i>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="<?php echo VIEWS_DIR ?>user-profile.php">
           <i class="material-icons">person</i><?php
                                                if (isset($_SESSION["inlogged_user"]) && $_SESSION["inlogged_user"] != null)
                                                  echo ($_SESSION["inlogged_user"]->getName());
                                                else echo ("guest")
                                                ?>
         </a>
       </li>
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Meny
         </a>

         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
       
           <div class="dropdown-divider"></div>
           <a class="dropdown-item" href="about-dvvj.php">Om appen</a>
           <a class="dropdown-item" href="contact.php">Kontakta oss</a>
         </div>




       </li>

     </ul>
     <!-- https://getbootstrap.com/docs/4.0/components/navbar/ -->

     <form class="form-inline my-2 my-lg-0" action="" method="get" accept-charset="UTF-8">

       <input name="search[terms]" placefolder="sökningsord1,sökningsord2,..." class="form-control mr-sm-2 " id="search_terms" aria-label="Search" type="search" value="" autocomplete="off">
       <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> <i class="fa fa-search"></i></button>

     </form>


   </div>
 </nav>