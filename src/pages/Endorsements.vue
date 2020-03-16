<template>
    <Layout>
        <div class="px-2 md:px-0 xl:px-6">
            <div class="w-full py-6 mt-20 mb-8 text-4xl text-center bg-gray-200 rounded-xl md:p-12 md:mt-24 md:rounded-none lg:mx-auto lg:w-4/5 xl:w-4/5 lg:p-20 lg:mt-20 lg:rounded-xl">
                <h1 class="font-roboto font-bold custom-text-purple">Ezras Nashim operates under the auspices of rabbonim and is endorsed by gedolei hador.</h1>
            </div>
            <div class="md:flex md:flex-wrap">
                <div class="w-full my-2 flex justify-center md:justify-end md:w-1/2 md:pr-2 lg:w-1/4 lg:justify-center lg:pr-0">
                    <iframe class="rounded-xl"
                        width="310" 
                        height="215" 
                        src="https://www.youtube.com/embed/Vlc9wfY8Bis" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <div class="w-full my-2 flex justify-center md:justify-start md:w-1/2 md:pl-2 lg:w-1/4 lg:justify-center lg:pl-0">
                    <iframe class="rounded-xl" 
                        width="310" 
                        height="215" 
                        src="https://www.youtube.com/embed/srjFkqk0cew" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe> 
                </div>
                <div class="w-full my-2 flex justify-center md:justify-end md:w-1/2 md:pr-2 lg:w-1/4 lg:justify-center lg:pr-0">
                    <iframe class="rounded-xl"
                        width="310" 
                        height="215" 
                        src="https://www.youtube.com/embed/JLzG4PdR6NY" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="w-full my-2 flex justify-center md:justify-start md:w-1/2 md:pl-2 lg:w-1/4 lg:justify-center lg:pl-0">
                    <iframe class="rounded-xl" 
                        width="310" 
                        height="215" 
                        src="https://www.youtube.com/embed/0UH3avYWpp0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="bg-gray-200 py-8 my-8 rounded-xl">
                <div class="w-full text-3xl text-center">
                    <h2 class="font-source font-bold custom-text-purple">Letters of Endorsement:</h2>
                </div>
                <div class="w-full flex flex-col md:flex-row md:flex-wrap justify-center">
                    <EndorseLink
                    class="my-4 mx-auto md:mx-4" 
                    aHref="https://www.ezrasnashim.org/wp-content/uploads/2016/03/Silberstein.jpg"
                    :imgSrc="require('../assets/images/endorsement-tab/thumb-silberstein.jpg')"
                    caption="R' Silberstein Shlita"
                    >
                    </EndorseLink>

                    <EndorseLink
                    class="my-4 mx-auto md:mx-4" 
                    aHref="https://www.ezrasnashim.org/wp-content/uploads/2016/03/kanievsky.jpg"
                    :imgSrc="require('../assets/images/endorsement-tab/thumb-kanievsky.jpg')"
                    caption="Rebbetzin Kolodetsky (Kanievsky)"
                    >
                    </EndorseLink>

                    <EndorseLink
                    class="my-4 mx-auto md:mx-4" 
                    aHref="https://www.ezrasnashim.org/wp-content/uploads/2016/03/Wachtfogel-english.pdf"
                    :imgSrc="require('../assets/images/endorsement-tab/thumb-wachtfogel1.jpg')"
                    caption="R' Elya Wachtfogal Shlita"
                    >
                    </EndorseLink>

                    <EndorseLink
                    class="my-4 mx-auto md:mx-4" 
                    aHref="https://www.ezrasnashim.org/wp-content/uploads/2016/03/Wachtfogel-hebrew.pdf"
                    :imgSrc="require('../assets/images/endorsement-tab/thumb-wachtfogel2.jpg')"
                    caption="R' Elya Wachtfogal Shlita"
                    >
                    </EndorseLink>
                </div>
            </div>
       </div>
    </Layout>
</template>

<script>
import EndorseLink from "~/components/EndorseLink"
export default {
    components:{
        EndorseLink
    }
}
</script>

<style scoped>
    .custom-text-purple{
            color: #72298f;
        }
</style>