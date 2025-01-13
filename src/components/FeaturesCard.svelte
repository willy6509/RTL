<script>
    export let index;
    export let AllFeatures
</script>


<div class="flex max-w-md bg-slate-700 drop-shadow-md hover:drop-shadow-lg p-8 rounded-lg">
    <div class="flex flex-col gap-8 md:gap-8">
        <h4 class="text-center text-2xl sm:text-3xl md:text-4xl max-w-fit w-full font-medium relative after:absolute after:top-full after:left-0 after-w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900">
            <slot/>
        </h4>
        <p>{AllFeatures.description}</p>
        <div class="flex flex-col gap-3">
            {#each AllFeatures.list as listItem}
                <div class="flex gap-2 items-center justify-center">
                    <p>{listItem}</p>
                </div>
            {/each}
        </div>
        <div class="flex items-center"></div>
    </div>
</div>