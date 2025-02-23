import { useState } from "react";
import Logo from "./components/logo";
import Map from "./components/map";
import { lat, lng } from "./data";
import { combineLatLng } from "./helpers";
import Slider from "./components/slider";

function App() {
  const realData = combineLatLng(lat, lng);
  const [pathData, setPathData] = useState(realData);
  const markers = [
    {
      position: { lat: lat[0], lng: lng[0] },
      iconUrl: "gear.png",
      size: 50,
      title: "Welcome to Shulich!",
      content:
        "You’ve just stepped into Shulich, the heart of engineering at the University of Calgary. The doors swing open, and the aroma of freshly printed textbooks fills the air. It’s a brand-new chapter, and you’re ready to dive in. You glance at your watch, and someone nearby yells, “What time is it?” Without missing a beat, you respond, “Schulich time!” Get ready for a wild ride filled with late nights, caffeine-fueled study sessions, and, if you're lucky, a little bit of sleep. Welcome to your new life as an engineering student—buckle up!",
      image: "/gear.jpg",
    },
    ,
    {
      position: { lat: lat[45], lng: lng[45] },
      iconUrl: "books.png",
      size: 70,
      title: "Study Time",
      content:
        "It’s time to hit the books. Or, more accurately, time to hit D2L and binge-watch those online lecture videos at 2x speed. ENGG 204 is staring you down, and you’re trying to absorb all that info while your brain starts to feel like it’s on overload. You’d rather be doing literally anything else, but somehow, the fast-forwarded professor keeps making sense. The only thing more exhausting than trying to understand the material is actually trying to keep up with it at double speed. But you power through, because that’s the engineering student life.",
      image: "/books.jpg",
    },
    {
      position: { lat: lat[90], lng: lng[90] },
      iconUrl: "flask.png",
      size: 70,
      title: "Group Project",
      content:
        "Group projects are always an adventure. This time, you’ve been tasked with designing an automated garden, which means learning 3D printing and programming a Raspberry Pi Pico—on top of everything else! You’re knee-deep in 3D modeling software, and your teammates seem to think Raspberry Pi is a type of dessert. It’s chaos, but somehow, you’re all making it work. Between printing and coding, you’re just hoping that the garden doesn’t end up more “manual” than “automated.” At least you’ll get a cool project for the portfolio (if it actually works).",
      image: "/flask.jpg",
    },
    {
      position: { lat: lat[137], lng: lng[137] },
      iconUrl: "nap-pod.png",
      size: 65,
      title: "Nap Pod",
      content:
        "By now, you’ve been running on caffeine and adrenaline for far too long. You find the Nap Pod, that sacred place where dreams (and sleep) can finally happen… only to discover it’s already taken. Of course. You sigh and keep walking, knowing you’ll never find a free pod. But hey, the search itself is almost like a workout, right? You’ve been running on low battery for days now, and at this point, the only rest you’re getting is in your dreams of a free Nap Pod.",
      image: "/nap-pods.jpg",
    },
    {
      position: { lat: lat[lat.length - 1], lng: lng[lng.length - 1] },
      iconUrl: "finish.png",
      size: 70,
      title: "Finish",
      content:
        "The semester is over, and you’ve survived. You’ve navigated sleepless nights, group project chaos, and too much caffeine. Now it’s time to make a big decision: choosing your engineering major. Do you go Mechanical, Electrical, Software, Civil, Biomed, Geomatics, or maybe Oil and Gas? The possibilities are endless, but the pressure is real. You've learned a lot over the past months, but now you need to pick your path. Whichever route you choose, just remember: you’re an engineer now, and the real journey is just beginning!",
      image: "/finish.jpg",
    },
  ];

  return (
    <>
      <Logo />
      <Slider pathData={realData} setPathData={setPathData} />
      <Map
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        center={{ lat: 51.07915506190224, lng: -114.13123577400691 }} // Taylor Institute for Teaching and Learning
        zoom={19}
        mapId={import.meta.env.VITE_MAP_ID}
        path={pathData}
        markers={markers}
      ></Map>
    </>
  );
}

export default App;
