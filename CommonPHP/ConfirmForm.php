<?php
header("Access-Control-Allow-Origin: *");
if (isset($_POST['confirm'])) {
    if ($_POST['confirm'] == 'Yes') {
        action();
    } else if ($_POST['confirm'] == 'No') {
        header("location:   ") . $location;
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Basic -->
    <meta charset="utf-8" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1 " />
    <!-- Site Metas -->
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link rel="shortcut icon" href="<?php echo SITE_DIR; ?>/images/favicon.png" type="image/x-icon" />


    <!-- bootstrap core css -->
    <link rel="stylesheet" type="text/css" href="<?php echo SITE_DIR; ?>/css/bootstrap.css" />

    <!-- responsive style -->
    <link href="<?php echo SITE_DIR; ?>/css/responsive.css" rel="stylesheet" />

    <title>Confirm</title>
</head>

<body>
    <main id="form1">
        <div class="modal" style="display: flex;" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirm</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="alert alert-danger" role="alert"><?php echo $popupMessage ?></p>
                    </div>
                    <div class="modal-footer">
                        <form method="post" onsubmit='disableWindow()'>
                            <button type="submit" name="confirm" value="Yes" class="btn btn-primary">Yes</button>
                            <button type=" submit" name="confirm" value="No" class="btn btn-secondary"
                                data-dismiss="modal">No</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>

        <script src="<?php echo SITE_DIR; ?>/js/jquery-3.4.1.min.js"></script>
        <script src="<?php echo SITE_DIR; ?>/js/bootstrap.js"></script>
        <script src="<?php echo SITE_DIR; ?>/js/my.js"></script>

    </main>
</body>

</html>