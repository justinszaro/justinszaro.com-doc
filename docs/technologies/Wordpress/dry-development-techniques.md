---
id: Wordpress DRY Development Techniques
tags:
  - php
  - wordpress
---

## Some cool thing I didn’t know:

`get_header(), get_footer(), get_sidebar()` - Will get the respective template files. For example: `get_header()` will get `header.php`. 

`get_header('custom')` - Will get `header-custom.php` file.

`get_template_part()` - Will also allow you to get any custom template file. Just pass the file names into the functions split by dashes.

Ex: `get_template_part('inc/partner', 'box')` - inc/partner-box.php

`get_post_format()` - Will get the format of the post.

`get_post_type()` - Will get the type of the current post. 

It is common practice to post custom functions in a file located at `inc/tempate-tags.php`.