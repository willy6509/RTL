<script>
//   import { space } from "postcss/lib/list";
  import FeaturesCard from "./FeaturesCard.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  let AllFeatures = [
    {
        listItem: [
            "Pembelajaran",
        ],
        description: " isinya descripsi dan lain-lain yang penting ada isinya gua mah bodo amat puqi",
        imgUrl: "assets/Belajar.jpg",
    },
    {
        listItem: [
            "Kuiss",
        ],
        description: " isinya descripsi dan lain-lain yang penting ada isinya gua mah bodo amat puqi",
        imgUrl: "assets/Kuis.jpg",
    },
    {
        listItem: [
            "AI Tutor",
        ],
        description: " isinya descripsi dan lain-lain yang penting ada isinya gua mah bodo amat puqi",
        imgUrl: "assets/Tutor.jpg",
    },
  ]
</script>

<section id="Features" class="bg-slate-800 text-white">
<SectionWrapper>
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-14 py-10">
        <div class="flex flex-col gap-2"> 
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Nikmati <span class="text-sky-600">Belajar Menyenangakn</span>
                Hari Ini
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">Feature For Everyone</h3>
        </div>
        <div class="flex flex-col  sm:flex-row justify-center items-center gap-4">
            {#each AllFeatures as AllFeature, index}
            <FeaturesCard AllFeatures={AllFeature} index={index}>
                {#if index === 0}
                Belajar <span class="text-sky-400 font-medium">Pintar</span> lu puqi
                {:else if index === 1}
                Ada <span class="text-sky-400 font-medium">Kuis</span> Menarik puqi
                {:else}
                pikir sendiri <span class="text-sky-400 font-medium">puqi</span>
                {/if}
            </FeaturesCard>
            {/each}
        </div>
    </div>
</SectionWrapper>
</section>