<script>
    import SectionWrapper from "../../components/SectionWrapper.svelte";
    import Header from "./userComponents/Header.svelte";
    import { onMount } from 'svelte';
    onMount(() => {
        const footer = document.querySelector('footer');
        if (footer) {
        footer.classList.add('hidden');
        }
    });
  </script>
  
  <SectionWrapper>
    <Header/>
  
    <div class="text-center py-10 bg-slate-100">
      <h1 class="text-3xl font-bold text-blue-600">Selamat Datang di Room To Learn</h1>
      <p class="mt-4 text-lg text-gray-700">Mari mulai belajar dengan fitur-fitur berikut:</p>
      
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <a href="/user/kuis" class="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300">
            <img src="/assets/Kuis.jpg" alt="">
          <h2 class="text-xl font-semibold text-blue-600">Kuis Pembelajaran</h2>
          <p class="mt-2 text-gray-700">Uji pengetahuan Anda melalui kuis interaktif.</p>
        </a>
  
        <a href="user/belajar" class="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300">
            <img src="/assets/Belajar.jpg" alt="">
          <h2 class="text-xl font-semibold text-blue-600">Video Pembelajaran</h2>
          <p class="mt-2 text-gray-700">Tonton video untuk memahami materi lebih dalam.</p>
        </a>
  
        <a href="#" class="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300">
            <img src="/assets/Tutor.jpg" alt="">
          <h2 class="text-xl font-semibold text-blue-600">AI Tutor</h2>
          <p class="mt-2 text-gray-700">Interaksi langsung dengan AI untuk membantu belajar Anda.</p>
        </a>
      </div>
    </div>
  </SectionWrapper>
  