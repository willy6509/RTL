<script>
  function reroute(href) {
    window.location.href = href;
  }
</script>

<div class="flex items-center gap-4">
    <button on:click={() => reroute('#Features')} class="specialBtn">
        <p class="text-base sm:text-lg md:text-xl">Mulai Menjelajah</p>
    </button>
    <button on:click={() => reroute('/login')} class="specialBtnDark">
        <p class="text-base sm:text-lg md:text-xl">Login</p>
    </button>
</div>