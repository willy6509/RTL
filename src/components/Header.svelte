<script>
    import {openModal} from "../stores"
</script>

<header class="flex flex-col relative z-20">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <a href="/">
            <img src="/assets/logo.png" alt="" class="max-w-28">
        </a>
        <button on:click={() => $openModal = true} class="bg-slate-100 md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="#Features" class=" duration-200 hover:text-sky-400 cursor-pointer">Features</a>
            <a href="#AboutUs" class=" duration-200 hover:text-sky-400 cursor-pointer">About Us</a>
        </nav>
    </div>
</header>