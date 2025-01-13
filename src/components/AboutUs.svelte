<script>
    import SectionWrapper from "./SectionWrapper.svelte";
  </script>
  
    <SectionWrapper id="AboutUs">
        <div class="flex flex-col gap-15 sm:gap-14 md:gap-10 flex-1 items-center justify-center pb-14 py-10">
            <div class="flex flex-col gap-2">
                <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                About <span class="text-sky-400">Us</span>
                </h3>
            </div>

            <div class="max-w-4xl mx-auto text-center text-lg sm:text-xl leading-relaxed">
                <p>
                AI Tutor adalah platform pembelajaran berbasis web yang dirancang untuk memberikan pengalaman belajar 
                interaktif dan menyenangkan. Kami percaya bahwa teknologi dapat menjadi alat yang efektif dalam meningkatkan 
                kualitas pendidikan, dan AI Tutor hadir untuk membantu setiap orang belajar dengan cara yang mudah dan 
                menyenangkan.
                </p>
            </div>
        
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div class="flex flex-col gap-4 p-6 bg-slate-100 rounded-lg shadow-md hover:shadow-xl">
                <h4 class="text-2xl font-semibold text-sky-400">Visi Kami</h4>
                <p>
                    Menjadi platform pendidikan terdepan yang menggunakan teknologi AI untuk menciptakan 
                    pengalaman belajar yang menyenangkan, interaktif, dan efektif.
                </p>
                </div>

                <div class="flex flex-col gap-4 p-6 bg-slate-100 rounded-lg shadow-md hover:shadow-xl">
                <h4 class="text-2xl font-semibold text-sky-400">Misi Kami</h4>
                <ul class="list-disc list-inside">
                    <li>Menyediakan konten pembelajaran berkualitas tinggi.</li>
                    <li>Mengintegrasikan teknologi AI untuk mendukung proses belajar.</li>
                    <li>Membangun komunitas belajar yang inklusif dan suportif.</li>
                </ul>
                </div>
                
            </div>
        </div>
    </SectionWrapper>
  