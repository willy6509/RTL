<script>
    let users = [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' },
    ];
  </script>
  
  <section class="py-10">
    <h1 class="text-2xl font-bold text-gray-800 text-center">Kelola Akun Pengguna</h1>
    <table class="table-auto w-full max-w-4xl mx-auto mt-6 bg-white shadow rounded">
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2 text-left">Nama</th>
          <th class="px-4 py-2 text-left">Email</th>
          <th class="px-4 py-2 text-left">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {#each users as user}
          <tr class="border-b">
            <td class="px-4 py-2">{user.name}</td>
            <td class="px-4 py-2">{user.email}</td>
            <td class="px-4 py-2">
              <button class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Hapus</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>