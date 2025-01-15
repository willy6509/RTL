<script>
  import "../app.css";    
  import CtAs from "../components/CTAs.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  import {openModal} from "../stores";

  let y
  $: outerHeight = 0;

  function reroute(href) {
    $openModal = false;
    window.location.href = href;
  }
</script>
  
  {#if $openModal}
    <div class="fixed top-0 left-0 w-screen h-screen border-b bg-slate-100 z-50 flex flex-col gap-8 p-5 px-8 md:hidden">
      <div class="flex items-center justify-between gap-4 border-b pb-2">
        <a href="/">
            <img src="/assets/logo.png" alt="" class="max-w-28">
        </a>
        <button on:click={() => $openModal = false} class="bg-slate-100 outliine-none border-non">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
      <div class="flex flex-col gap-4 flex-1">
        <button on:click={() => reroute('#Features')} class="bg-slate-100 border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2">Features <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('#AboutUs')} class="bg-slate-100 border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2">About Us <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
      </div>
      <div class="flex flex-col items-center justify-center">
        <CtAs/>
      </div>
    </div>
  {/if}

  {#if y> outerHeight}
    <div class="bg-slate-100 fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">
      <Header/>
    </div>
  {/if}
  <slot />
 <Footer/>
 <svelte:window bind:scrollY={y} bind:outerHeight/>

