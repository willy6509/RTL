<script>
  // Import onMount untuk menjalankan kode saat komponen dipasang ke DOM
  import { onMount } from 'svelte';
  import SectionWrapper from '../../../components/SectionWrapper.svelte';
  import Header from '../userComponents/Header.svelte';
    onMount(() => {
        const footer = document.querySelector('footer');
        if (footer) {
        footer.classList.add('hidden');
        }
    });

  // Variabel untuk mengelola status kuis
  let currentQuestionIndex = 0; // Menyimpan indeks pertanyaan saat ini
  let selectedOption = null; // Menyimpan opsi yang dipilih oleh pengguna
  let score = 0; // Menyimpan skor pengguna
  let showResult = false; // Menentukan apakah hasil kuis ditampilkan
  let quizStarted = false; // Menentukan apakah kuis telah dimulai
  let questions = []; // Menyimpan daftar pertanyaan yang akan diambil dari backend

  // Fungsi untuk mengambil data pertanyaan dari API Laravel yang terhubung ke Supabase
  onMount(async () => {
    // Fetch data dari backend API yang menghubungkan ke Supabase
    const response = await fetch('http://localhost/api/questions'); // Ganti dengan URL backend Anda
    if (response.ok) {
      questions = await response.json(); // Menyimpan data pertanyaan yang diterima
    } else {
      console.error('Failed to load questions'); // Menangani kesalahan jika gagal mengambil data
    }
  });

  // Fungsi untuk memilih opsi
  function selectOption(index) {
    selectedOption = index; // Menyimpan opsi yang dipilih
  }

  // Fungsi untuk melanjutkan ke pertanyaan berikutnya
  function nextQuestion() {
    if (selectedOption === questions[currentQuestionIndex].correctIndex) {
      score++; // Menambah skor jika jawaban benar
    }
    selectedOption = null; // Reset opsi yang dipilih
    currentQuestionIndex++; // Pindah ke pertanyaan berikutnya
    if (currentQuestionIndex === questions.length) {
      showResult = true; // Menampilkan hasil jika sudah mencapai akhir kuis
    }
  }

  // Fungsi untuk merestart kuis
  function restartQuiz() {
    currentQuestionIndex = 0; // Kembali ke pertanyaan pertama
    selectedOption = null; // Reset opsi yang dipilih
    score = 0; // Reset skor
    showResult = false; // Reset status hasil kuis
    quizStarted = false; // Reset status kuis dimulai
  }

  // Fungsi untuk memulai kuis
  function startQuiz() {
    quizStarted = true; // Menandakan bahwa kuis telah dimulai
  }

  // Fungsi untuk kembali ke halaman sebelumnya
  function goBack() {
    window.history.back(); // Menggunakan browser history untuk kembali
  }
</script>

<SectionWrapper>
  <Header/>
<div class="container mx-auto p-6 flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <!-- Cek apakah kuis sudah dimulai atau belum -->
    {#if !quizStarted}
      <h2 class="text-3xl font-bold mb-4">Selamat Datang di Kuis!</h2>
      <p class="text-lg mb-6">Apakah Anda siap untuk memulai?</p>
      <div class="space-y-4">
        <!-- Tombol untuk memulai kuis -->
        <button
          on:click={startQuiz}
          class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Mulai Kuis
        </button>
        <!-- Tombol untuk kembali ke halaman sebelumnya -->
        <button
          on:click={goBack}
          class="w-full px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
        >
          Kembali
        </button>
      </div>
    {:else if !showResult}
      <!-- Jika kuis sudah dimulai dan belum selesai, tampilkan pertanyaan -->
      <h2 class="text-2xl font-bold mb-4">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <p class="text-lg mb-6">{questions[currentQuestionIndex]?.question}</p>

      <div class="space-y-4">
        <!-- Tampilkan opsi jawaban berdasarkan data pertanyaan yang diambil -->
        {#each questions[currentQuestionIndex]?.options as option, index}
          <button
            on:click={() => selectOption(index)}
            class="w-full px-4 py-2 text-left border rounded-lg hover:bg-blue-100
              {selectedOption === index ? 'bg-blue-200' : 'bg-white'}"
          >
            {option} <!-- Tampilkan teks untuk setiap opsi -->
          </button>
        {/each}
      </div>

      <button
        on:click={nextQuestion}
        class="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        disabled={selectedOption === null}>
        Next
      </button>
    {:else}
      <!-- Jika kuis selesai, tampilkan hasil -->
      <h2 class="text-3xl font-bold mb-4">Quiz Completed!</h2>
      <p class="text-lg mb-6">Your score is {score} out of {questions.length}.</p>
      <!-- Tombol untuk merestart kuis -->
      <button
        on:click={restartQuiz}
        class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Restart Quiz
      </button>
    {/if}
  </div>
</div>
</SectionWrapper>

<style>
  /* Custom styles untuk responsivitas pada perangkat mobile */
  @media (max-width: 640px) {
    section {
      padding: 4px;
    }
  }
</style>
