<script>
    let videos = [
      { id: 1, title: 'Video 1', url: 'https://example.com/video1' },
      { id: 2, title: 'Video 2', url: 'https://example.com/video2' },
    ];
  </script>
  
  <section class="py-10">
    <h1 class="text-2xl font-bold text-gray-800 text-center">Video Pembelajaran</h1>
    <ul class="mt-6 space-y-4 max-w-md mx-auto">
      {#each videos as video}
        <li class="p-4 bg-white shadow rounded">
          <h2 class="text-lg font-semibold text-blue-600">{video.title}</h2>
          <a href={video.url} target="_blank" class="text-blue-500 hover:underline">Tonton Video</a>
        </li>
      {/each}
    </ul>
  </section>