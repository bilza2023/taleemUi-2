<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons,onMount } from '$lib/util';
export let questions;
export let tcode;
export let selectedEx;
let sortedArray=[];
 

$:{
  selectedEx;  
  if(questions){
  let filteredQuestions = questions.filter(question => question.exercise === selectedEx);
  sortedArray =  filteredQuestions.sort((a, b) =>  a.sortOrder - b.sortOrder );
  }  
//   console.log("sortedArray",sortedArray);
}

    let showQs=true;
    // let sortedArray;
    
    
function getTitle(question){
    
    if (question.name && question.name !== ''){
        return `${question.name} `;
    }else {
        let r = `Ex ${question.exercise} Q-${question.questionNo}`;
        if(question.part || question.part != 0){
            r+= ` pt ${question.part}`
        }
        return r;
    }
}


$: totalExQuestion = questions.filter(question => question.exercise === selectedEx).length

</script>

<div class="bg-gray-700 p-2 m-2 rounded-md">
    <div class="text-center w-full">
    <button class="p-1 m-1 bg-gray-800 rounded-md "
    on:click={()=>showQs = !showQs}
    >
    Total Exercise Questions ({`${totalExQuestion}`})
    </button>
    </div>
{#if sortedArray}
<div class='flex  w-full justify-center  flex-wrap  '>
{#each sortedArray as question,index}    
    {#if question.exercise == selectedEx && question.status == 'final' }
        
            <div class='w-3/12'>

            <Card
            title = {getTitle(question)}
            icon={Icons.TEST}
            url = {`/player?tcode=${tcode}&id=${question._id}`}
            >

            </Card>
            </div>
        {/if}
{/each}
    </div>
{/if}    
</div>    