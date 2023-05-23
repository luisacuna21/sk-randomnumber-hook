<script>
  import "../app.css";
</script>

<nav class="flex w-full h-12 items-center text-white font-semibold bg-black/80">
  <ul class="flex w-full mx-10">
    <li><a class="hover:bg-white/50 p-10" href="/">Home</a></li>
    <li><a class="hover:bg-white/50 p-10" href="/posts">Posts</a></li>
    <li><a class="hover:bg-white/50 p-10" href="/random">Random</a></li>
  </ul>
</nav>

<slot />