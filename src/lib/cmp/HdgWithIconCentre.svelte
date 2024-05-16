<script>
  // @ts-nocheck
  export let icon = '📜';
  export let bgColor = 'bg-blue-800';
  export let size = 2; //1-4
</script>

<div class="flex justify-center w-full mt-12">

  <div class={`inline-block ${bgColor} text-white rounded-md p-2 m-2 text-center`}>
    <span class={`text-${size}xl`}>{icon}</span>&nbsp;
    <span class={`text-${size}xl`}><slot></slot></span>
  </div>
</div>
