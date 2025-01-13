<script>
    let email = '';
    let password = '';
    const login = () => {
        console.log({email, password});
    };
</script>

<section class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-semibold mb-4 text-gray-800">Login</h1>
        <form action="" on:submit|preventDefault={login} class="space-y-4">
            <div>
                <label for="email" class="block text-gray-700">Email</label>
                <input type="email" name="" id="email" bind:value={email} placeholder="Masukkan email anda...." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200" required>
            </div>
            <div>
                <label for="password" class="block text-gray-700">Password</label>
                <input type="password" name="" id="password" bind:value={password} placeholder="Masukkan password anda...." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200" required>
            </div>
            <button type="submit" class="w-full bg-blue-500 hover:bg-green-600 text-white py-2 rounded">Login</button>
        </form>
        <div class="mt-4 flex flex-col space-y-2">
            <a href="/register" class="text-blue-500">Belum punya akun? register</a>
            <a href="/" class="text-blue-500">Kembali Home</a>
        </div>
    </div>
</section>