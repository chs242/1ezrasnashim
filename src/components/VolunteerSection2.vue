<template>
    <div class="custom-bg pb-12">
        <h1 class="font-roboto text-3xl text-white font-bold text-center py-4">Register Online</h1>
        <form form="volunteer-form">
            <div class="lg:flex lg:px-20 xl:justify-center"> 

            <div id="checkbox-form" class="text-white w-full p-4 md:w-4/5 md:flex md:mx-auto md:mb-8 lg:mx-0 lg:mb-2 lg:px-8 lg:w-1/2 lg:flex-col lg:items-start xl:w-1/3 xl:px-0">
            <h1 class="hidden lg:block font-roboto text-3xl text-white font-bold text-center py-4">FAQS</h1>
                <div class="md:w-1/2 lg:w-full lg:mb-8">
                    <div>
                        <h3 class="font-source font-semibold  text-lg mb-4 mt-4 lg:mt-0 lg:mb-2">How Would you like to volunteer?</h3>
                    </div>
                    <div class="lg:flex">
                        <div class="lg:w-3/4">
                            <div class="">
                                <input type="checkbox" id="volunteer1" name="volunteer1" value="emt">
                                <label for="volunteer1"> Become an EMT</label>
                            </div>
                            <div class="">
                                <input type="checkbox" id="volunteer2" name="volunteer2" value="dispatcher">
                                <label for="volunteer2"> Become a Dispatcher</label>
                            </div>
                        </div>
                        <div class="lg:w-full">
                            <div class="">
                                <input type="checkbox" id="volunteer3" name="volunteer3" value="driver">
                                <label for="volunteer3"> Volunteer Driver</label>
                            </div>
                            <div class="">
                                <input type="checkbox" id="volunteer4" name="volunteer4" value="administrative">
                                <label for="volunteer4"> Fundraising/Administrative</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 lg:w-3/4 lg:mb-8">
                    <div>
                        <h3 class="font-source font-semibold text-lg mb-4 mt-4 lg:mt-0 lg:mb-2">Your EMT Certification</h3>
                    </div>
                    <div class="lg:flex">
                        <div class="lg:w-3/4">
                            <div class="">
                                <input type="checkbox" id="certification2" name="certification2" value="expired">
                                <label for="volunteer2"> Expired</label>
                            </div>
                            <div class="">
                                <input type="checkbox" id="certification1" name="certification1" value="current">
                                <label for="volunteer1"> Current</label>
                            </div>
                        </div>
                        <div class="lg:w-full">
                            <div class="">
                                <input type="checkbox" id="certification3" name="certification3" value="course">
                                <label for="volunteer3"> Interested in Course</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:w-1/2 lg:w-3/4 lg:mb-8">
                    <div>
                        <h3 class="font-source font-semibold text-lg mb-4 mt-4 lg:mt-0 lg:mb-2">Do You Drive</h3>
                    </div>
                    <div class="lg:flex">
                        <div class="lg:w-3/4">
                            <div class="">
                                <input type="checkbox" id="drive1" name="drive1" value="no">
                                <label for="drive1"> No</label>
                            </div>
                            <div class="">
                                <input type="checkbox" id="drive2" name="drive2" value="car">
                                <label for="drive2"> Yes, with Car</label>
                            </div>
                        </div>
                        <div class="lg:w-full">
                            <div class="">
                                <input type="checkbox" id="drive3" name="drive3" value="nocar">
                                <label for="drive3"> Yes, Without Car</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="text-form" class="bg-gray-200 py-8 px-3 mx-1 shadow-md text-center rounded-xl md:w-2/3 md:px-16 md:mx-auto lg:w-1/2 lg:px-8 lg:flex lg:flex-wrap lg:content-center xl:w-2/5 xl:mx-0">
                
                <div class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1">
                    <input type="text" id="name" name="name" placeholder="Name" class="w-full custom-width py-1 text-center custom-border">
                </div>
                <div class="star-address relative w-full my-4 mx-auto lg:text-right font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1">
                    <input type="text" id="address" name="address" placeholder="Address" class="w-full custom-width py-1 text-center custom-border">
                </div>

                <div class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1">
                    <input type="text" id="email" name="email" placeholder="Email" class="w-full custom-width py-1 text-center custom-border">
                </div>

                <div class="relative w-full my-4 mx-auto lg:text-right font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1">
                    <input type="text" id="phone" name="phone" placeholder="Phone" class="w-full custom-width py-1 text-center custom-border">
                </div>

                <div class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1">
                    <input type="text" id="cellphone" name="cellphone" placeholder="Cellphone" class="w-full custom-width py-1 text-center custom-border">
                </div>

                <div class="relative w-full my-4 mx-auto lg:text-right font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1">
                    <input type="text" id="certification" name="certification" placeholder="Certification" class="w-full custom-width py-1 text-center custom-border">
                </div>

                <div class="relative w-full mx-auto my-4 font-source text-lg shadow-md lg:shadow-none">
                    <textarea  rows="4" cols="30" name="comment" form="volunteer-form" placeholder="Comment..." class="w-full py-1 text-left custom-border"></textarea>
                </div>

                <div class="w-full lg:text-right">
                    <input type="submit" value="Submit" class="px-16 py-2 font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md">
                </div>
            </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .custom-bg{
        background-color: #72298f;    
    }
    .custom-border{
        border-radius: 5px
    }

    .star:before{
        content: "*";
        color: red;
        position: absolute;
        top: 0px;
        left: 2px;
    }
    .star-address:before{
        content: "*";
        color: red;
        position: absolute;
        top: 0px;
        left: 6px;
    }
@media (min-width: 1024px)  {
    .custom-width{
        width: 98%;
    }
}
</style>