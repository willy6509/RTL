<script>
    let quizzes = [
      { id: 1, title: 'Kuis 1', description: 'Kuis dasar tentang matematika' },
      { id: 2, title: 'Kuis 2', description: 'Kuis lanjutan tentang fisika' },
    ];
  </script>
  
  <section class="py-10">
    <h1 class="text-2xl font-bold text-gray-800 text-center">Daftar Kuis</h1>
    <ul class="mt-6 space-y-4 max-w-md mx-auto">
      {#each quizzes as quiz}
        <li class="p-4 bg-white shadow rounded">
          <h2 class="text-lg font-semibold text-blue-600">{quiz.title}</h2>
          <p class="text-gray-700">{quiz.description}</p>
        </li>
      {/each}
    </ul>
  </section>