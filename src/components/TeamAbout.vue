<template>
    <div class="md:w-4/5 md:mx-auto lg:w-1/2 lg:mx-0 lg:px-1">
    <div class="bg-white w-full pt-8 px-1 my-2 flex flex-col items-center justify-start rounded-xl ">    
        <div class="overflow-hidden h-32 rounded-xl">
            <figure class="tint relative shadow-md overflow-hidden">
                <img id="img" src="../assets/images/other-imgs/93-Queen.jpg" class="w-full object-cover md:-mt-8" />
            </figure>
        </div>
        <div class="custom-margin absolute text-white text-right">
            <div class="">
                <h1 class="font-roboto text-2xl font-semibold">About Our EMT's</h1>
            </div>
        </div>
        <div class="mt-8 xl:px-8">
            <div class="flex"><span class="mr-1" style='color:red;'> &#x2713;</span> <p>Our EMTs are highly trained and Licensed by New York State</p></div><br><br>
            <div class="flex"><span class="mr-1" style='color:red;'> &#x2713;</span> <p>Many of our members are also trained in complementing fields, such as Paramedics, Registered Nurses, doulas, labor coaches, camp and school nurses</p></div><br><br>
            <div class="flex"><span class="mr-1" style='color:red;'> &#x2713;</span> <p>To acquire hands-on experience in assisting women in labor, we have privileges for shadowing at Northshore University Medical Center Labor & Delivery Room. This means we shadow the doctors and nurses during delivery and observe all scenarios ranging from natural labor to C-sections.</p></div><br><br>
            <div class="flex"><span class="mr-1" style='color:red;'> &#x2713;</span> <p>In addition to NYS EMT training, our members are required to attend NRP class and obtain certification for neonatal resuscitation.</p></div><br><br>
        </div>
    </div>
    </div>
</template>

<style scoped>
    .tint:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(114,41,163, 0.7);
    }

    .custom-margin{
        margin-top: 3rem;
    }
    .custom-width{
        width: 22rem;
    }
</style>