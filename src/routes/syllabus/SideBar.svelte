
<script>
    //@ts-nocheck
    import Dd2 from "./Dd2.svelte";
  import Exercises from "./Exercises.svelte";
  export let chapter_map_array;
  export let setChapter;
  export let selectedChapter;
  export let exercise_bucket;
  export let selectedEx;
  export let setEx;
  
</script>


<div class="p-4 m-1 border-2 border-white rounded-lg">
    <Dd2 {chapter_map_array} {setChapter} {selectedChapter}/>
      <br/>
    <Exercises  {exercise_bucket}  {selectedEx} {setEx} />
    </div>
    