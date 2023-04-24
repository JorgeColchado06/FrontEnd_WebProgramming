import React, { useState, useEffect} from 'react'
import {
  ClockIcon,
  MusicalNoteIcon,
  GiftIcon
} from "@heroicons/react/20/solid";

import { db } from '../components/API'
import { Navbar } from '../components/Navbar'
import Cookies from 'js-cookie'
import axios from 'axios'



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const features = [
  {
    name: "We have music!!!!!!",
    description:
      "We have the best tamborazo in the town. We have the best music for your event.",
    icon: MusicalNoteIcon,
  },
  {
    name: "Bottle raffle and other gifts OMG!!!",
    description:
      "We have Jose Cuervo, Cabrito, Bacardi, any bottle you can imagine, and the possibility to met Vicente Fernandez.",
    icon: GiftIcon,
  },
  {
    name: "Deadlines",
    description:
      "We have the compromisse to deliver the best service and the best entertainment for your event.",
    icon: ClockIcon,
  },
];

export function Landing() {
    const [data, setData] = useState([]);
    const [session, setSession] = useState(false);
    const [comment, setComment] = useState("");
    /*const [description, setDescription] = useState("")*/

    const getData = async() => {
        const res  = await fetch(`${db}/comments`)
        const data = await res.json()
        console.log(data)
        setData(data)
    }

    const checkCookie = (session) => {
      if(session){
        setSession(true);
      }
    }

    const postComment = async(e) => {
      const data = {
        comment: comment,
        id: parseInt(Cookies.get('Session_Event'))
      }
      try {
        await axios.post(`${db}/scomment`, data)
        console.log("NICE")
      }
      catch(e){
        console.log("ERROR")
      }
      getData()
    }

    useEffect(() => {
      const session = Cookies.get("Session_Event");
      checkCookie(session);
      getData();
    }, []);
    return(
        <div>
      <Navbar />
      {/* What we do */}
      <div className="overflow-hidden bg-orange-300 py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-800">
                  The Walking peda
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  The best peda of your life
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We organize the best events in town with the best music,
                  services and more. <br />
                  We specialize in corporate events, graduations and weekends.

                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute top-1 left-1 h-5 w-5 text-yellow-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://i.ytimg.com/vi/3Ekji_MKTiA/hqdefault.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-20"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
  <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-orange-300">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {
              data ? (
                data.map((item) => (
                  <blockquote className="rounded-lg bg-gray-100 p-8" key={item.ID}>
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="/icon.png"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <p className="mt-1 text-lg font-medium text-gray-700 text-center">
                    {item.NAME}
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 text-center">
                {item.COMMENT}
              </p>
            </blockquote>
              )) ) : null
            }
          </div>
        </div>   
            {
        session ? (
          <div className="isolate bg-orange-300 py-24 px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Let your comment
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Create a comment to let people know your experience with us
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <input
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={postComment}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Comment
            </button>
          </div>
        </div>
      </div>
        ): null
      }
    </section>
</div>
    )
}