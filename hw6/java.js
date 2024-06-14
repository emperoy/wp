<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Expanding Sidebar with JavaScript</title>
<style>
  
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  .sidebar {
    position: fixed;
    left: -250px;
    top: 0;
    width: 250px;
    height: 100%;
    background-color: #333;
    padding: 20px;
    transition: left 0.3s ease;
  }

  .sidebar-content {
    color: #fff;
  }

  .sidebar-content a {
    color: #fff;
    text-decoration: none;
  }

  .close-btn {
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
</head>
<body>

<div class="sidebar" id="sidebar">
  <div class="close-btn" onclick="toggleSidebar()">X</div>
  <div class="sidebar-content">
    <h2>我的個人介紹</h2>
    <p>我是大一資工系羅翊宸</p>
    <a href="https://github.com/emperoy">Github</a><br>
    <a href="s111110513@stu.nqu.edu.tw">email</a>
  </div>
</div>

<script>
 
  function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
      sidebar.style.left = '0';
    } else {
      sidebar.style.left = '-250px';
    }
  }
</script>

</body>
</html>

