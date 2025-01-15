<footer class="bg-slate-800 text-white py-10 sm:py-14 px-4 md:px-8 footer">
    <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base">
        <div class="flex flex-col gap-4 md:col-span-2">
            <form class="flex flex-col gap-4" id="feedback-form">
                <p class="font-bold text-base sm:text-lg">Feedback</p>
                <input type="text" placeholder="Masukkan nama Anda" class="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" required/>
                <input type="email" placeholder="Masukkan email Anda" class="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" required/>
                <textarea placeholder="Tulis feedback Anda di sini..." rows="4" class="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent" required></textarea>
                <button type="submit" class="bg-sky-400 hover:bg-sky-500 text-white py-2 px-4 rounded-md transition duration-200">
                    Kirim Feedback
                </button>
            </form>
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold text-base sm:text-lg">Site Maps</p>
            <a href="/"  class="cursor-pointer hover:text-sky-400 duration-200">
                Home
            </a>
            <a href="#AboutUs"  class="cursor-pointer hover:text-sky-400 duration-200">
                About US
            </a>
            <a href="#Features"  class="cursor-pointer hover:text-sky-400 duration-200">
                Features
            </a>
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold text-base sm:text-lg">Support Us</p>
            <a href=""  class="cursor-pointer hover:text-sky-400 duration-200">
                Contact Us
            </a>
        </div>
        <div class="flex flex-col gap-4">
            <img src="/assets/logo.png" alt="" class="max-w-28">
            <a href=""  class="cursor-pointer hover:text-sky-400 duration-200">
                <i class="fa-brands fa-instagram pr-2"></i>
                Instagram
            </a>
            <a href=""  class="cursor-pointer hover:text-sky-400 duration-200">
                <i class="fa-brands fa-twitter pr-2"></i>
                Twitter
            </a>
        </div>
    </div>
</footer>