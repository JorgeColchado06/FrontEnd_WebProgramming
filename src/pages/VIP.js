import { React, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export function VIP (){

  const navigate = useNavigate();
   
    const checkCookie = (session) => {
      if(!session){
        navigate("/");
      }
  }

  useEffect(() => {
    const session = Cookies.get("Session_Event");
    
    /* Here we call the function to check the cookie */
    checkCookie(session);
    });



   return(
    <>
    <Navbar/>
          <div className="flex flex-wrap place-items-center">
        <div
          className="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-8"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://st1.uvnimg.com/87/a9/7dd770b74920ab6bf510eee19eb6/Slack%2520for%2520iOS%2520Upload%2520(6).jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Meet Vicente Fernandez
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
            You have the great opportunity to meet Vicente Fernandez thanks to the alcoholic congestion he will give you :D
            </p>
          </div>
        </div>
        <div
          class="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://media.gq.com.mx/photos/630f9cf5bdfc76974d4fcca1/4:3/w_2664,h_1998,c_limit/COVERS-TRAGOS-APERTURA%20(1).jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
             Chose the bottle of tequila you want
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
            Choose the bottle of alcohol you want!!!!!!
            </p>
          </div>
        </div>

        <div
          class="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-8"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://m.media-amazon.com/images/I/51MbXRnWc4S._AC_SX466_.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Peppa pig
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
            Album with the best Peppa Pig songs, the best for your parties uwu
            </p>
          </div>
        </div>
        <div
          class=" m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2022/07/12/2786966.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Karely
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
            Photo with Karely Ruiz omg! :O
            </p>
          </div>
        </div>
      </div>
    </>
    ); 

}
