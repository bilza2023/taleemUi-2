<script>
    //@ts-nocheck
    export let setChapter;
    export let selectedChapter;
    export let chapter_map_array;
    </script>
    
    <div class="flex justify-center">
        <div class="bg-gray-600 text-white w-8/12 text-center rounded-md">
            Select Chapter
        </div>
    </div>
    
    <div class="flex flex-col justify-center w-full flex-wrap ">
    {#each  chapter_map_array as chapterObj }
    <button on:click={()=>setChapter(chapterObj.chapter)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== chapterObj.chapter ? 'bg-gray-400':'bg-gray-600' }`}>{chapterObj.chapter}</button>
        
        {#each  chapterObj.exercises as exercise } 
        
        <button on:click={()=>setEx(exercise) }  class={`p-1 m-1 rounded-lg  px-2 ${selectedEx== exercise? 'bg-gray-400':'bg-gray-600' }`}>{e}</button>
        
        {/each}
    
    {/each}
    </div>
    