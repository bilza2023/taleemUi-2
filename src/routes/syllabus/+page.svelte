<script>  
  //@ts-nocheck
  import { PageWrapper,HdgWithIcon } from '$lib/cmp';
  import { API_URL,onMount,toast,Icons,goto,checkToken,checkAdminToken,ajaxPost } from '$lib/util';
  // import Nav from '$lib/appComp/Nav.svelte';
  import MainNav from '$lib/appComp/MainNav.svelte';
  
  import SideBar from './SideBar.svelte';
  import ExerciseQs from "./ExerciseQs.svelte";
  import Questions from "./Questions.svelte";
  import Summary from '$lib/appComp/Summary.svelte';
  import chapter_map from "./fn/chapter_map";
  // import getSyllabus from '$lib/appComp/getSyllabus';
  let tcode; 
  /////////////////////////////////
  let questions;
  let selectedEx ="1.1";
  let selectedChapter = 1;
  let chapterTotalQuestions = 0;
  let chapter_map_array=[];
  let exercise_bucket=[];
  
  $:  {
    if (questions){
      chapterTotalQuestions = questions.filter(question => question.chapter == selectedChapter).length;
    }
  }
  function setEx(ex){
    selectedEx = ex;
  }
  
  let isLogin = false;
  let isAdmin = false;
  
  function setChapter(newChapter){
  selectedChapter = newChapter;
  setExBucket(selectedChapter);
  }
  
  function setExBucket(selectedChapter){
    for (let i = 0; i < chapter_map_array.length; i++) {
      const chapterObj = chapter_map_array[i];
          if(chapterObj.chapter == selectedChapter){
              exercise_bucket = chapterObj.exercises;
              setEx(exercise_bucket[0]);
              continue; 
          }
    } 
  }
  
onMount(async () => {
try{
    
    tcode = new URLSearchParams(location.search).get("tcode");
    ///---it came to this

    const resp = await ajaxPost( `${API_URL}/command` , { command : "getSyllabus" ,tcode } );

/////////////////////    
    if (resp){
      const data = await resp.json();
      // console.log("data",data);
      questions = data.data.syllabus; //data.data.syllabus
      chapter_map_array = await chapter_map(questions);
      // console.log("map",chapter_map_array);
      setChapter(chapter_map_array[0].chapter);
      isLogin = checkToken();
      isAdmin = checkAdminToken();
    }else {
     const data = await resp.json();
     chapter_map_array = await chapter_map(questions);
      toast.push(data.message);
    }

  } catch (e) {
       toast.push('System error');
  }      
});

  ////////////////////////////////////////////////////////
  </script>
  <MainNav {isAdmin} {isLogin}/>
  <PageWrapper>
  
  <div class='flex justify-center   p-2 '>
   <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>{tcode}</HdgWithIcon>
  </div>
  
  <!-- <Summary {questions} /> -->
  <div class="flex">
    <div class="w-2/12">
      {#if questions}

  <SideBar 
  
  {chapter_map_array}
  {setChapter}
  {selectedChapter}
  {exercise_bucket}
  {selectedEx}
  {setEx}
  />


  <div class='flex justify-start text-xs p-1 m-1 '>
    {`Total Chapter Questions: ${chapterTotalQuestions}`}
    </div>
    
    {/if}  
    </div>
    <div class="w-10/12">
      {#if questions}
  
        
        <Questions {questions} {selectedEx} {isAdmin} {tcode}/>
        
      {/if}
    </div>
  </div>
  
  <!-- <HdgWithIcon>{`Chapter Total: ${chapterTotalQuestions}`}</HdgWithIcon> -->
  
  <br/>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  
  </PageWrapper>
  