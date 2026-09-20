# Frankendrone and burned electronics

As a person who started with programming websites in HTML and CSS, malware in batch and snake games in python the switch to building electronics is a mindbreaker. I'd say software development is very ADHD friendly as you can just bruteforce thing by trying again and again. A mistake means just a rerun, while in electronics it means $$$ burning away. Today, I've burned a few bucks more than I wanted, aka more than 0. A while ago I've found an HDSP2503 display

![HDSP 2502](https://mm.digikey.com/Volume0/opasdata/d220001/derivates/6/001/133/435/HDSP-2502%2CHDSP-2503_web%28640x640%29.jpg)

at an electronics scrapyard. Just looking at this photo makes me angry again. So, I wanted to build a cool project with an ESP32-S3 and this display as a "running line". I burned through 2(!), yes TWO voltage regulators and this display (being currently priced at ~100$) trying to build this due to my own stupidity and the the manufacturers greed. It takes one Schottky (cost: 2 cents) diode to prevent GND/VCC switchup (basically switching up + and - on a battery) and they didn't include it. So, two smoke puffs later I decided to take a break from the circuitry and fly a few rounds with an FPV drone (Shoutout to [Aleksandr Vinokurov](https://github.com/aleksandr-vin) for gitfing me this amazing hobby. Take a look at his github! He has some cool projects like [this one](https://github.com/aleksandr-vin/pi-backpack)). And guess fucking what - it broke after a few rounds! A motor started "twitching" which indicates that a tiny little wire broke inside the motor due to impact. So, I looked through the things that Aleksandr gave me and I found a motor with the same ratings as the one that broke. So, I sat down absolutely ragebaited and tinkered it together. As I already started working on this tiny drone, I also replaced the old props as they had some inbalance. The final result turned out to be pretty funny! I called it Frankendrone as the new motor looks a bit like a replaced "limb"

![Frankendrone w/o props](https://raw.githubusercontent.com/mrk-fox/mrk-fox.github.io/refs/heads/main/blog/entries/assets/1000129128.jpg)

Also I taped the camera connector as it kept to disconnect when an impact happened with copper tape. Why copper tape? If you look at the "cut" edge of the star-formed PCB in the image above, you can see this decent white rectangle. And when you look at the top right part of that rectangle you can see that it's melted. Yes, a melted contact. Tsk tsk tsk. Lets put the heat radiation from the camera module into its place where it belongs - the surroundindgs.

![](https://raw.githubusercontent.com/mrk-fox/mrk-fox.github.io/refs/heads/main/blog/entries/assets/1000129133.jpg)

Now it should be fine. All together with the new props, the funny thing looks like this:
![](https://raw.githubusercontent.com/mrk-fox/mrk-fox.github.io/refs/heads/main/blog/entries/assets/1000129134.jpg)

The funny thing can now fly and I will soon post a video of me flying it.

## Future projects

Okay, enough of today. Let it all be memories. What really matters is the future. We all know that the future of the German trains system (aka the DB) wont be brighter than now. In other words very dim and never on time. To track this wonderful constant in our lives precisely, I do plan on programming a website/system tracking the delays on certain routes and reliably calculating the rate of delay and more mathematical ~~madness~~ nerdness visualizing it in a dashboard. Aside from designing and LED matrix for train departure information @ home.

Also, I will soon design and produce an (HF) devboard in a square format. So, more electronics inbound. Aside from that I also have some Atmel ATtiny85's lying around... but that's a story for another blogpost.

P.S.: I think about adding an E-Mail subscription system to this blog website running on my server. I want YOU to read my future blogs MUAHAHAHAHA