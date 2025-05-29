<?php
$file = '/home/teckezxd/globalsalah.com/app.js';
if (touch($file)) {
  echo "Node.js app.js timestamp updated, server will auto-restart via cPanel system.";
} else {
  echo "Failed to touch app.js. Check permissions.";
}
?>
