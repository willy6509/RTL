<script>
    import Header from "../../components/Header.svelte";
    import SectionWrapper from "../../components/SectionWrapper.svelte";
    import { goto } from '$app/navigation'; // Mengimpor fungsi goto untuk navigasi halaman
  
    let email = ''; 
    let password = '';
    let errorMessage = '';
  
    // Fungsi login yang akan dipanggil saat form disubmit
    const login = async () => {
      try {
        errorMessage = ''; // Reset pesan error sebelum mencoba login
        const response = await fetch('https://your-backend-url/api/login', { // Mengirimkan permintaan POST ke backend
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Mengatur header untuk konten JSON
          },
          body: JSON.stringify({ email, password }) // Mengirimkan data email dan password dalam format JSON
        });
  
        const result = await response.json(); // Mengonversi respons dari backend menjadi format JSON
  
        if (response.ok) {
          goto('/');
        } else {
          errorMessage = result.message || 'Login gagal. Periksa kembali email dan password.';
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
        <h1 class="text-2xl font-semibold mb-4 text-gray-800">Login</h1>
  
        <!-- Tampilkan alert jika ada error -->
        {#if errorMessage}
          <div class="bg-red-100 text-red-700 border border-red-400 p-4 rounded mb-4">
            {errorMessage} <!-- Menampilkan pesan error -->
          </div>
        {/if}
  
        <!-- Form login -->
        <form action="" on:submit|preventDefault={login} class="space-y-4">
          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input type="email" id="email" bind:value={email} placeholder="Masukkan email anda...." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200" required/>
          </div>
  
          <div>
            <label for="password" class="block text-gray-700">Password</label>
            <input type="password" id="password" bind:value={password} placeholder="Masukkan password anda...." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200" required/>
          </div>
  
          <button type="submit" class="w-full bg-sky-400 hover:bg-sky-600 text-white py-2 rounded">
            Login
          </button>
        </form>
  
        <div class="mt-4 flex flex-col space-y-2">
          <a href="/register" class="text-sky-400 hover:text-sky-600">Belum punya akun? Register</a>
          <a href="/" class="text-sky-400 hover:text-sky-600">Kembali ke Beranda</a>
        </div>
      </div>
    </div>
  </SectionWrapper>
  