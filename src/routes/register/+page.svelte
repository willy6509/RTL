<script>
    import Header from "../../components/Header.svelte";
    import SectionWrapper from "../../components/SectionWrapper.svelte"; 
    import { goto } from '$app/navigation';
  
    let username = ''; 
    let email = ''; 
    let password = '';
    let errorMessage = '';
  
    // Fungsi register untuk mengirimkan data ke backend
    const register = async () => {
      try {
        errorMessage = ''; // Reset pesan error sebelum mencoba register
        const response = await fetch('https://your-backend-url/api/register', { // Mengirimkan permintaan POST ke backend
          method: 'POST', // Metode HTTP POST
          headers: {
            'Content-Type': 'application/json' // Mengatur header untuk konten JSON
          },
          body: JSON.stringify({ username, email, password }) // Mengirimkan data username, email, dan password
        });
  
        const result = await response.json(); // Mengonversi respons dari backend menjadi format JSON
  
        if (response.ok) { 
          goto('/login'); 
        } else {
          errorMessage = result.message || 'Register gagal. Periksa kembali data Anda.'; 
        }
      } catch (error) {
        errorMessage = 'Terjadi kesalahan. Silakan coba lagi nanti.';
      }
    };
  </script>
  
  <SectionWrapper>
    <Header />
  
    <div class="bg-slate-100 flex items-center justify-center">
      <div class="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-semibold mb-4 text-gray-800">Register</h1>
  
        <!-- Tampilkan alert jika ada error -->
        {#if errorMessage}
          <div class="bg-red-100 text-red-700 border border-red-400 p-4 rounded mb-4">
            {errorMessage} <!-- Menampilkan pesan error -->
          </div>
        {/if}
  
        <!-- Form register -->
        <form action="" on:submit|preventDefault={register} class="space-y-4">
          <div>
            <label for="username" class="block text-gray-700">Username</label>
            <input type="text" id="username" bind:value={username} placeholder="Masukkan username anda...." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200" required/>
          </div>
  
          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input type="email" id="email" bind:value={email} placeholder="Masukkan email anda...." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200" required/>
          </div>
  
          <div>
            <label for="password" class="block text-gray-700">Password</label>
            <input type="password" id="password" bind:value={password} placeholder="Masukkan password anda...." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200" required/>
          </div>
  
          <button type="submit" class="w-full bg-sky-400 hover:bg-sky-600 text-white py-2 rounded">
            Register
          </button>
        </form>
  
        <div class="mt-4 flex flex-col space-y-2">
          <a href="/login" class="text-sky-400 hover:text-sky-600">Sudah punya akun? Login</a>
          <a href="/" class="text-sky-400 hover:text-sky-600">Kembali ke Beranda</a>
        </div>
      </div>
    </div>
  </SectionWrapper>
  