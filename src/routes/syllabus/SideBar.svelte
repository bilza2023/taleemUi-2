
<script>
    //@ts-nocheck
    // import Dd2 from "./Dd2.svelte";
//   import Exercises from "./Exercises.svelte";
  export let chapter_map_array;
  export let setChapter;
  export let selectedChapter;
//   export let exercise_bucket;
  export let selectedEx;
  export let setEx;
  
</script>


<div class="p-4 m-1 border-2 border-white rounded-lg">


    <div class="flex justify-center">
        <div class=" text-white w-8/12 text-center rounded-md mb-2">
            Chapters
        </div>
    </div>
    
    <div class="flex flex-col justify-center w-full flex-wrap ">
    {#each  chapter_map_array as chapterObj }
    <button on:click={()=>setChapter(chapterObj.chapter)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== chapterObj.chapter ? 'bg-stone-600':'bg-gray-600' }`}>Chapter: {chapterObj.chapter}</button>
        
        {#each  chapterObj.exercises as exercise } 
        
        <button on:click={()=>setEx(exercise) }  class={`p-1 m-1 rounded-lg  px-2 ${selectedEx== exercise? 'bg-gray-400':'bg-gray-600' }`}>{exercise}</button>
        
        {/each}
    
    {/each}
    </div>
    
    
</div>
    