<div class="d-flex justify-content-center">


    <ul class="pagination bg-light">
        <li class="page-item"><a class="page-link" href="?pageno=1<?php echo isset($referens) ? $referens : ''; ?>">Första</a></li>
        <li class="page-item <?php if ($pageno <= 1) {
                                    echo 'hidden';
                                } ?>">
            <a class=" page-link" href="<?php if ($pageno <= 1) {
                                            echo '#';
                                        } else {
                                            echo "?pageno=" . ($pageno - 1);
                                            echo isset($referens) ? $referens : '';
                                        } ?>">Föregående</a>
        </li>
        <li class="page-item <?php if ($pageno >= $paginator->getTotalPages()) {
                                    echo 'hidden';
                                } ?>">
            <a class="page-link" href="<?php if ($pageno >= $paginator->getTotalPages()) {
                                            echo '#';
                                        } else {
                                            echo "?pageno=" . ($pageno + 1);
                                            echo isset($referens) ? $referens : '';
                                        } ?>">Nästa</a>
        </li>
        <li class="page-item"><a class="page-link" href="?pageno=<?php echo $paginator->getTotalPages();
                                                                    echo isset($referens) ? $referens : ''; ?>">Sista</a></li>
    </ul>
</div>