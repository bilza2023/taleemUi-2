<script>
// @ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import Logo from './Logo.svelte';
import {onMount,Icons,chqLogin,goto} from '$lib/util';

function logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  goto('/login');
}

let isLogin = false;
onMount( async ()=>{
    // debugger;
    isLogin = chqLogin();
});

</script>
            <!-- ******************************** -->
<!-- decided not to use NavBar comp -->
<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    
    
    <Logo />
    </div>
            <!-- ******************************** -->
    <div class='flex'>

    <NavBtn title='Blog' icon ={Icons.BOOK} url='/blog'/>
    <NavBtn title='Payment' icon ={Icons.ROCKET} url='/payment'/>

    </div>

</div><!--outer most div-->

