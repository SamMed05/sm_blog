---
title: "Some thoughts about AI"
date: 2022-12-29
feature_image: "/sm_blog/assets/images/thoughts-about-ai-images/feature-image.jpg"
categories: AI School
---

A collection of thoughts, observations and reflections I've recently had on the rapid diffusion of AI and its socioeconomic impact.

#### <span class="material-symbols-outlined">toc</span> Table of contents
{% unless page.notoc %}
<div id="inline_toc" markdown="1">

* TOC
{:toc}

</div>
{% endunless %}

In the last month, I’ve been experimenting quite a lot with ChatGPT (Generative Pre-Trained Transformer), an AI-based chatbot developed by OpenAI optimized for natural language processing, i.e. seemingly human dialogues and conversations with the user. I’m sure you’ve heard of it as well. It can not only churn out extremely plausible answers, but it can also write fully functional code for you based on a text prompt.

I asked it to not only write explanations, essays, poems and song lyrics but also summarize, rewrite, divide and title text, make bullet point lists, come up with ideas for a discussion on a topic and much more. I almost always got flawless answers and it was also perfectly able to write code in different programming languages starting from some generic instructions and explaining those programs to me with comments and external paragraphs.

In my attempts to understand ChatGPT’s capabilities for the first time, I’ve quickly realized that what we now have access to is more than just a plaything. It goes far beyond what we've seen so far in the field of artificial intelligence (at least among the publicly available demos), and it has the potential to be one of the decade's most significant innovations in our lives and society as a whole.
How could it be possible? It’s worth taking a step back first.

### Creativity

Aside from a remarkable speed gap in information processing, we always differentiated computer machines from human beings for their **lack of creativity**.

The inability of computers to be creative arises directly from their nature: they are rigid machines working with 0s and 1s, logic gates implemented with transistors and, in a more abstract higher-level way, with expressions, loops and if-else conditions<span class="tooltip">`*`<span class="tooltiptext">extremely simplifying programming languages’ syntax and functioning</span></span>.

This latter set of conditions, in particular, is what makes computers able to do decision-making. This “skill”, if we can call it that, is powerful, sure, but has two fundamental issues:

1. it’s very basic
2. its conditions are predefined by the programmers, and so the complexity of a program entirely depends on their explicit instructions (at least with the advantage of not having unexpected behaviors).

A traditional approach to decision-making is enough to solve many problems. For example, it may work on a tic-tac-toe algorithm or in programming the behavior of the (often not-so-smart) NPCs in video games. This is, to be precise, a form of AI called “*narrow* (or *weak*) *AI*” but I still consider it an illusion of intelligence obtained with just the clever use of many loops and if-else statements (take, for example, the minimax algorithm for making [tic-tac-toe AI](https://youtu.be/trKjYdBASyQ)).

However, this is not so suitable when we start talking about more general, human-like processes, such as creatively generating new content, understanding a context more broadly, recognizing complex patterns and more.

Think about the simple things humans do every day: from **language** (reading and understanding a text, talking fluently, explaining something, asking and answering questions…) to **artistic expression** and **vision** (drawing something, recognizing what a drawing is representing, distinguishing objects, shapes and patterns…), we are able to do amazing things without ever acknowledging or being aware of how complex these tasks are.

If computers generally work by hard-coded values, expressions and conditions, how do you, say, make a program to create a drawing of a human face without explicitly telling it how to do it? And, if you succeed, how do you make it draw a variation of that drawing, like making it “younger” or “angrier”?

Machines don’t have thoughts, ideas, or even the consciousness required to do a task of that kind!

That's why, starting in the last century and even more so in the last decade, we began changing the way we approached these kinds of problems, employing new techniques such as neural networks, machine learning and other algorithms of what is known as "*soft computing*" (opposed to the traditional *hard computing*) to make our already incredible machines even more capable.

![Biological neuron versus neural network with artificial neurons](/sm_blog/assets/images/thoughts-about-ai-images/neurons-neural-network.png)
<span class="caption">At the top, a (biological) neuron. At the bottom, a neural network with multiple artificial neurons. Both types of neurons are arranged in intricate and interconnected networks, and by (loosely) taking inspiration from nature (i.e. <em>biomimicry</em>) we can create systems capable of carrying out similar tasks to the ones we, as humans, are capable of.</span>

These new techniques haven't completely solved the problem, since computers still can't be "creative", but AI is providing us with a highly convincing illusion of creative behavior.

<span class="material-icons-outlined">psychology_alt</span> **Can a computer possibly think?** <br>
The answer, as you can read in this [article](https://www.britannica.com/technology/artificial-intelligence/Is-strong-AI-possible) from Britannica, is not straightforward at all. Visit the link or expand the collapsible element below.

<details>
<summary><i>Expand</i></summary>
Noam Chomsky, an American theoretical linguist, suggests that debating this question is pointless, for it is an essentially arbitrary decision whether to extend common usage of the word think to include machines. There is, Chomsky claims, no factual question as to whether any such decision is right or wrong—just as there is no question as to whether our decision to say that airplanes fly is right, or our decision not to say that ships swim is wrong. However, this seems to oversimplify matters. The important question is, Could it ever be appropriate to say that computers think, and, if so, what conditions must a computer satisfy in order to be so described?
<br><br>
Some authors offer the Turing test as a definition of intelligence. However, Turing himself pointed out that a computer that ought to be described as intelligent might nevertheless fail his test if it were incapable of successfully imitating a human being. For example, why should an intelligent robot designed to oversee mining on the Moon necessarily be able to pass itself off in conversation as a human being? If an intelligent entity can fail the test, then the test cannot function as a definition of intelligence. It is even questionable whether passing the test would actually show that a computer is intelligent. […] It is possible, in principle, to design a machine containing a complete set of canned responses to all the questions that an interrogator could possibly ask during the fixed time span of the test. Like Parry, this machine would produce answers to the interviewer’s questions by looking up appropriate responses in a giant table. This objection seems to show that in principle a system with no intelligence at all could pass the Turing test.
<br><br>
In fact, AI has no real definition of intelligence to offer, not even in the subhuman case. Rats are intelligent, but what exactly must an artificial intelligence achieve before researchers can claim this level of success? In the absence of a reasonably precise criterion for when an artificial system counts as intelligent, there is no objective way of telling whether an AI research program has succeeded or failed. One result of AI’s failure to produce a satisfactory criterion of intelligence is that, whenever researchers achieve one of AI’s goals—for example, a program that can summarize newspaper articles or beat the world chess champion—critics are able to say “That’s not intelligence!” Marvin Minsky’s response to the problem of defining intelligence is to maintain—like Turing before him—that intelligence is simply our name for any problem-solving mental process that we do not yet understand. Minsky likens intelligence to the concept “unexplored regions of Africa”: it disappears as soon as we discover it.
</details>

### The current state of AI

This year, we’ve seen a dramatic improvement in AI capabilities, and, for the first time on this scale, everyone (not only the researchers and a few other people) has had the opportunity to try and discover the capabilities of these new models, since they have finally been released to the general public.

Unlike the complex interfaces of previous years—with some AI models being public yet requiring proficiency in programming to be used—the easy, accessible and extremely user-friendly way these new models were presented made more and more people willing to try them out. All you are asked to do is give a prompt and click the "Submit" button or press ENTER on the keyboard.

{: .box-note}
<span class="material-icons-outlined">info</span> **Note:** Artificial intelligence is a relatively new discipline, but it has also developed swiftly, so many people who now start to encounter these advanced types of AI for the first time truly believe there's magic happening under the hood. Writer Arthur Clarke once said that "*any sufficiently advanced technology is indistinguishable from magic*" (the third and most famous of the [Clarke's three laws](https://en.wikipedia.org/wiki/Clarke%27s_three_laws)) and this applies particularly in this case. It's critical to remember that no sort of magic is involved but rather a clever combination of advanced techniques from mathematics and computer science.

This sudden popularity of AI generators, first with **DALL·E 2** (followed by a free unofficial bot formerly called DALL-E Mini, now known as Craiyon), then with **ChatGPT**, has given the world a first glimpse of the possible effects that artificial intelligences with those capabilities could have on modern society. I’ll soon explain exactly what I’m talking about, but first let me tell you about my experience of this year.

### My experience with AI

Since last year already, I’ve been interested a lot in artificial intelligence and how it works, so I know that it isn’t black magic and, in general, I *roughly*<span class="tooltip">`*`<span class="tooltiptext">roughly! No way near the expert level, unfortunately</span></span> understand the techniques behind machine learning and neural networks.

That being said, my first "encounter" with AI was not with DALL·E 2 but with Crayon, or as it was called at the time, DALL-E Mini. It wasn't very good and it created tiny and distorted images, but still I was impressed by the fact that it could generate for me whatever I described in the text prompt box, even providing multiple variations. On Twitter, almost every tweet of my feed was somewhat related to DALL-E Mini in that period, since it was exploding in popularity all over the world along with the original DALL·E 2. Overall, Crayon felt like a "toy" to play with and nothing more, so there was nothing to be concerned about with such a tool.

![Moai statue giving a Ted talk, image generated by DALL-E Mini](/sm_blog/assets/images/thoughts-about-ai-images/Moai-statue-giving-a-Ted-talk.jpg)
<span class="caption">"Moai statue giving a Ted talk", image generated by DALL-E Mini and posted on <a href="https://twitter.com/weirddalle/status/1535310811933155329" target="_blank">Twitter</a>.</span>

The next AI generator I tried was the much more powerful DALL·E 2 by OpenAI, and that gave me a much different impression. The results of this model were so real and detailed that for some of them I almost couldn't tell that they were generated by a bot. I thought for a moment what an artist would feel like when seeing a generator of those capabilities: the anxiety and pressure put on you by a program that is better, faster and more powerful and which many people, from now on, may prefer over your work, without appreciating and valorizing the human effort (and you can't do anything about it).

Being a programmer and not an artist, though, that kind of AI generator is impressive for sure, but  doesn't directly concern me: my interests and future job hopes are oriented elsewhere, in a different field, therefore discovering what DALL·E 2 was capable of wasn't a "nervous" experience.

The same applies for Midjourney and Stability AI’s DreamStudio (powered by Stable Diffusion), which I tried soon after DALL·E 2. You can get awesome results from these models, too, and even create videos by interpolating between many images. I love this example:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Voyage through Time&quot;<br>is my first artpiece using <a href="https://twitter.com/hashtag/stablediffusion?src=hash&amp;ref_src=twsrc%5Etfw">#stablediffusion</a> and I am blown away with the possibilities...<br><br>We&#39;re crossing a threshold where generative AI is no longer just about novel aesthetics, but evolving into an amazing tool to build powerful, human-centered narratives <a href="https://t.co/9suZeDyY8Q">pic.twitter.com/9suZeDyY8Q</a></p>&mdash; Xander Steenbrugge (@xsteenbrugge) <a href="https://twitter.com/xsteenbrugge/status/1558508866463219712?ref_src=twsrc%5Etfw">August 13, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

ChatGPT is different.

When I used it a few weeks ago for the first time, I wasn't expecting anything like that. After each prompt and each response, it quickly became evident to me (as it did to many other people worldwide) that this bot represents a greater advancement in artificial intelligence than all prior attempts to build a LLM (Large Language Model)[^1].

Of course, neither ChatGPT nor any other conversational bot existing today is flawless and fully reliable.
This logic test that I made is just one of the plenty examples that demonstrate the fact that LLMs don't actually understand, but rather vibe-associate words together in a (sometimes only apparently) meaningful way.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">ChatGPT gives a wrong answer with this little logic puzzle. Still not so intelligent (for now) 🧠<br><br>BUT <br><br>after a hint, it can successfully correct itself! Quite impressive 🤖 <a href="https://t.co/P3ucd1ZVTA">pic.twitter.com/P3ucd1ZVTA</a></p>&mdash; Samuel Mediani (@MedianiSamuel) <a href="https://twitter.com/MedianiSamuel/status/1607668953228115968">December 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It's worth remembering, though, that technology is constantly evolving, improving bit by bit every day, so it’s easy to envision how effective these bots will be in a few years (a new improved version of ChatGPT has already been released).

![ChatGPT interface](/sm_blog/assets/images/thoughts-about-ai-images/chatgpt-interface.png)
<span class="caption">ChatGPT interface. You can try it at this <a href="https://chat.openai.com/chat" target="_blank">link</a>.</span>

I consider the recent rise of all these intelligent bots as a unique and impactful moment of technological evolution, and I’m quite sure that the world will change after this invention. It's just a matter of time.

I think it’s a thing worth paying attention to, so let me now express some reflections on these revolutionary technologies.

### AI pros and cons

I found both many benefits and many threats that ChatGPT, DALL·E and similar AI bots could bring both to single people and society in general, but let's see the **positive things** first. I will then explain the downsides and negative consequences, more or less related to the positive aspects, in a section below.

### 👍 The positive things

##### Information retrieval

One of the first things I noticed about **ChatGPT** is that it can be extremely useful for gathering information and learning. While using Google Search (or worse, using books and other physical sources) is more of a slow process (even with the addition of [featured snippets](https://developers.google.com/search/docs/appearance/featured-snippets)) that may also require some skills to be able to find certain information, with ChatGPT a simple question is enough to get a concise, understandable and (most often) pertinent answer. You don't have to click on blue links, scrolling and sight reading from page to page trying to find an answer anymore. You get a straightforward response to what you asked—no more, no less.

This could be a problem for Google economy, but it's still too early to talk about that: the company seems to be already working to [find a solution](https://www.businessinsider.com/google-management-issues-code-red-over-chatgpt-report-2022-12) to further reduce the friction when using its search engine to find information. Moreover, providing enough servers to allow the chatbot to answer everyone is currently too expensive compared to a traditional Google search, so ChatGPT wouldn't be sustainable at Google's scale.

##### Personalized results

Anyway, information retrieval may sound trivial, but having a system doing it efficiently in a world saturated with data is very important today. It is even more crucial to be able to do it on an individual scale, personalizing the result for each single person.

While Google provides some uniqueness to users' searches, only ChatGPT can really give a tailored answer. There's a perfect example of this on a recent [tweet](https://twitter.com/anothercohen/status/1599531037570502656), where a user asked ChatGPT to write a weight loss plan based on his height, weight, age, and gender, and he got an answer for his case in seconds.

Using this tool reveals to be useful also in simplifying information, so that everyone could understand a scientific paper by plugging its abstract into the bot's prompt box and asking to explain it in simpler terms[^2].

##### Education & critical thinking

In more general terms, ChatGPT can become a useful tool for brainstorming ideas and do critical thinking. Bots like this one could be particularly convenient in political debates for their ability to avoid polarization. I'll let this Twitter thread by Nicky Case speak for itself:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">But GPT can go even further, &amp; counter-argue against you in a civil, political debate roleplay!<br><br>Why bot &gt; human for debate-practice: 1) free thought w/o social penalties, 2) ChatGPT is, alas, *kinder* than most human partisans.<br><br>(cc <a href="https://twitter.com/JonHaidt?ref_src=twsrc%5Etfw">@JonHaidt</a> <a href="https://twitter.com/glukianoff?ref_src=twsrc%5Etfw">@glukianoff</a>?)<br><br>🧵13/37 <a href="https://t.co/Sy2w8nT2yW">pic.twitter.com/Sy2w8nT2yW</a></p>&mdash; Nicky Case rarely &amp; begrudgingly uses this site (@ncasenmare) <a href="https://twitter.com/ncasenmare/status/1600595418747965450?ref_src=twsrc%5Etfw">December 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

##### Writing assistance/enhancement

ChatGPT's capacities could also be exploited by helping humans with writing. As an assistant or right-hand man, this bot could reduce the more repetitive parts of writing while letting the human have complete focus on the more creative and meaningful parts of an argumentation, explanation or any text in general. You can get from the bot a list of ideas and write an essay based on that but also do the opposite and get interesting [results](https://twitter.com/ncasenmare/status/1605615517984759812)!

##### Voice assistants improvement

Another application of chatbots that we'll very likely see in the near future is the improvement of voice assistant technologies: new devices will respond more naturally to our inputs and it will feel more and more like talking to a real human.

##### Easier content creation

When it comes to **DALL·E 2**, one advantage could be making it easier for content creators to get tailored content and letting this process become more accessible without the need to hire and pay someone else (this is also a problem, I’ll talk about that later). For example, I didn’t have to create the featured image (post thumbnail) of this blog post by myself or pay someone to do it<span class="tooltip">`*`<span class="tooltiptext">I’m 17 and I have no money, so I wouldn’t have done it anyway :)</span></span>: I just asked Midjourney to generate a bunch of concepts and then chose the one I liked the most (and modified it until I was satisfied). Of course, in my case, the AI-generated look was kept on purpose and was not a problem, but in another context, Midjourney or other generators by themselves would probably not suffice (for now).

##### Generator of ideas for artists

Just like a chatbot can assist in writing, DALL·E 2 can also serve as a “generator of ideas” or initial visual references from which artists could take inspiration and give life to new works in an easier, faster or more enjoyable way.

##### Concept art & storyboarding

Generative AIs could also become useful for concept art and storyboarding, with the advantage of instant generation of landscapes and scenarios (and not only that) in multiple variations, from which to choose the best look and feel without the need to wait for a new artwork to be drawn.

There are, of course, many other benefits, both for chatbots and text-to-image AI systems, and the ones I mentioned above are just a small fraction of the whole set.


### 👎 The negative things

Before talking about the obvious problems that artists and other workers may have to face in the future because of generative AI bots, I first want to mention some problems with ChatGPT that closely relate to me, my situation as a student and my career interests.

As a programmer, what has impressed me the most about ChatGPT is its ability to code by itself.

It shouldn’t surprise me, since this bot was trained not only to be good at conversations but has also seen millions of lines of code during training, specifically to become good at programming. Also, a popular AI bot, called GitHub Copilot, already exists since last year, but it's paid and I've never tried it.

I’m making many experiments to better understand ChatGPT's limits, but the results always surprise me: a handful of instructions in the prompt, with little to no guidance, are enough to generate (sometimes) hundreds of lines of working code, in any language, every single time (or at least, the vast majority of the time).

While reaching this skill level is an important goal for OpenAI and scientific progress, I don't believe this bot will benefit everyone.

To address why chatbots might not be good news, I want to give a real-life example.

##### Programmers

This year I’m attending the fourth year of upper secondary education at a public school in Italy. In my school, we learn how to program and study many things in the field of computer science in general.

The point is that we, as students, learned how to program in about two to three years, and now we are still refining this skill with many lessons and exercises almost every day. This process is necessary due to how the human brain works, since we naturally tend to forget things over time if we don’t “train” our skills. We also don’t gain any useful knowledge if we don’t understand how something works in the first place, of course.

By doing the programming exercises they give us, the teachers' goal is for us to learn the skills that the industry and society will expect us to have when we finish school. This is pretty standard, but also a problem. Follow me.

When ChatGPT was released, I was curious to find out if it could do the kind of exercises that we do in class. I realized in a matter of seconds that this was an easy task for the bot. I also tried the programs generated to check if they were actually working, and they all were.

Maybe this doesn't sound remarkable, but after seeing it, I was concerned: if a free<span class="tooltip">`*`<span class="tooltiptext">currently, but not forever</span></span> bot can easily program in a couple of ***seconds*** what we students have learned in a couple of ***years***, then there is **no competition**.

I’m confident that chatbots like ChatGPT won’t be a problem for people like me and some of my other classmates who plan to go to university. We’ll have much more detailed knowledge in many more fields, plus the experience that comes with doing work (e.g. internships, volunteering, part-time work, etc.), something that bots can’t replace.

However, many of my classmates hope to leave school after getting their high school diploma and find a job right away. The problem is that so many people today leave their studies believing that their skills are sufficient to compete in the modern working world. Perhaps (though I don't believe this is always the case), they were correct until now, but **the arrival of ChatGPT is a disaster for them**.

Think about it. Wouldn't it be more convenient for companies to pay a cheap subscription for an AI chatbot rather than paying the stipend for tens or hundreds of employees, and then just type in the problem to instantly get a solution, everywhere and at any time? I mean, ChatGPT is so powerful that you don’t even need prior knowledge to make simple programs (someone even [made an Angolar app](https://youtu.be/Pi-5_eid7VA) with it).

I know ChatGPT isn't a perfect all-arounder, but I've seen with my own eyes that **it can easily replace beginners**: in some programming exercises, it even outperforms me and my classmates.

We're still learning, but meanwhile this chatbot already knows everything it needs to do its job. It doesn't need a wage, breaks, food, social interactions, etc. It is just ready to work. In our capitalistic world, we are all aware that it's very tempting for companies to take this shortcut instead of hiring new (potentially inexperienced) workers.

If businesses begin to prefer chatbots over human resources, the young people looking for a place to gain experience will all be dissatisfied.

##### Artists

This doesn’t apply only to programmers but to **artists** as well.

I highly suggest you read this [article](https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-copyright-1849388060) by Kotaku on the topic, but here I’ll just cite a part of that. What follows is a selection of two of the many interviews that they've done with professionals in the field and reported in the article:


> "I could easily envision a scenario where using AI a single artist or art director could take the place of 5-10 entry level artists. The tech is fairly basic (but still impressive) right now but it’s advancing so fast. The unfortunate reality of this industry is that speed is favoured over quality so often that a cleaned up, ‘good enough’ AI-generated image could suffice for a lot of needs. <br>
I have seen a lot of self-published authors and such say how great it will be that they don’t have to hire an artist. **Doing that kind of work for small creators is how a lot of us got our start as professional artists**. So as an artist seeing this attitude grow gives me **concern for the next generation of artists being able to find consistent entry level work**.”

And again, another interviewee:

> “**The technology is not quite there yet** in terms of a finalized product. No matter how good it looks initially, it still requires professionals to fix the errors the AI generates. It also seems to be legally murky territory, enough to scare many major companies. <br>
**However**, it does yield results that will be ‘good enough’ for some, especially those less careful companies who offer lower wages for creative work. Because the end result is ‘good enough’, I think **we could see a lot of loss of entry level and less visible jobs**. This would affect not just illustrators, but photographers, graphic designers, models, or pretty much any job that requires visuals [and not only…  🧑‍💻]. That could all potentially be outsourced to AI.”

Logan Preshaw, an artist and art director who worked, among other things, on Valorant, League of Legends and Avatar 2, wrote a thread on this exact problem:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It&#39;s crucial to acknowledge the very real impact of AI. Small-time commission work defines aspiring industry artists and is a vital market for professional artists who don&#39;t want to be tied down to studio work on big franchises.</p>&mdash; Logan Preshaw (@wickedinsignia) <a href="https://twitter.com/wickedinsignia/status/1569185243080556546?ref_src=twsrc%5Etfw">September 12, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I care a lot about this problem, since:
1. it concern also my "profession"<span class="tooltip">`*`<span class="tooltiptext">in quotes, because I don't actually have one (yet) 😂</span></span>
2. I'm inexperienced (workwise)
3. I'm part of the new generation myself

However, generative AIs are also harming people who are already experts in the field.

If you have been following this topic lately and you use Twitter/read news, I'm sure you have found some artists’ complaints about these new bots.

Over the last few weeks, many creators have protested against AI-art generation tools, considering them unethical as they’re frequently trained using datasets that contain artwork scraped from the internet without the creator’s consent.

![No to AI images posted on ArtStation](/sm_blog/assets/images/thoughts-about-ai-images/no-ai-artstation.jpg)
<span class="caption">Members of the ArtStation online community began publicly denouncing AI-generated art by including "No AI Art" images in their portfolios. The protest images (above some creative examples) dominated ArtStation's trending page for days. From <a href="https://twitter.com/joysilvart/status/1603138150028775424" target="_blank">Twitter</a>.</span>

Sometimes the act of copying other artists’ artwork by AI generators is more obvious, e.g., when you type in the text prompt “in the style of [artist name]” you’ll get very similar results to the artistic style of the creator in question. In other circumstances, you can see traces of a watermark or signature in the corner of an AI-generated image, indicating that a kind of “stealing” process is happening behind the scenes, in the model black box.

In this context, though, differentiating what is copyright violation from what is simply taking inspiration is very hard, as there is no law for this yet (kind of like the "Monkey Selfie" copyright case[^3]).
AI changes the nature of the whole content on the Internet (who decides if something published online is "scrapable" or not, and how?) and nothing in the international laws has updated to respond to that.

Also, when an image is generated by an AI bot, who owns the copyright to that new image (which, by the way, was very likely created using copyrighted material)? The ownership of the image is and remains unclear: is it of the creator of the software? The curator of the training data? Or the user who inserted the prompt?

But isn't art inherently human anyway? How could you possibly possess something you didn't created directly<span class="tooltip">`*`<span class="tooltiptext">not to confuse with generative art, which requires the artist to write the code to make the computer create an artwork, and therefore an human input is still required</span></span>?

I’m not a lawyer nor an artist, but it’s important to critically and ethically ponder this situation. I’ll link to some food for thought from both sides of the debate.

##### Against AI (or pro "human" art)

Senior concept artist at Blizzard Entertainment Andrew Menjivar (ArtStation protests):

> "AI generated images have no place on a website dedicated to hosting portfolios of artwork created by HUMANS. Artstation needs to implement clear policies and guidelines AGAINST AI generated works. The technology works on theft, plain and simple. Artists do not need to compete with automated slopes built off the backs of their hard work. Protect the artists who help your site thrive." —Source: [ArtStation](https://www.artstation.com/artwork/d0YlVx)

Loish thread against the non-consensual use of human artwork to train image generators and make AI art:

> "I wholeheartedly support the ongoing protest against AI art. Why? Because my artwork is in the datasets used to train these image generators without my consent. I get zero compensation for this, even though these image generators cost money to use, and are a commercial product.
<br>
Musicians are not being treated the same way. Their words: “Because diffusion models are prone to memorization and overfitting, releasing a model trained on copyrighted data could potentially result in legal issues.” Why is the work of visual artists being treated differently?
<br>
Many have compared image generators to human artists seeking out inspiration. Those two are not the same. My art is literally being fed into these generators through the datasets, and spat back out of a program that has no inherent sense of what is respectful to artists.
<br>
Until there is an ethically sourced database that compensates artists for the use of their images, I am against AI art. I also think platforms should do everything they can to prevent scraping of their content for these databases." —Source: [Twitter](https://twitter.com/loishh/status/1603434379665104896)

I cannot fail to mention the many complaining threads by Logan Preshaw on the ethical problems of AI (number 2 also in the embedded tweet above): <b class="highlight-box">[1](https://twitter.com/wickedinsignia/status/1570219319103225856)</b>, <b class="highlight-box">[2](https://twitter.com/wickedinsignia/status/1603221617156706305)</b>, <b class="highlight-box">[3](https://twitter.com/wickedinsignia/status/1569185240593367040)</b>, <b class="highlight-box">[4](https://twitter.com/wickedinsignia/status/1571705843279867906)</b> and <b class="highlight-box">[5](https://twitter.com/wickedinsignia/status/1602906190119284736)</b>, in order of relevance.

I encourage you to take some time to read them, too. In case you have slow connection or Twitter doesn't work, you can read the main points of the threads here:

<details>
<summary><i>Expand</i></summary>
<blockquote>
<p>
No one uploaded their work to the internet with the expectation that it would be used to train AI.
That's it. It's that simple.
<br>
Unfortunately platform TOS is so lenient and the laws around cutting-edge technology are so loose that this falls into some crazy void of fair usage.
<br>
AI drastically changes the nature and application of content on the internet, and nothing has updated to reflect that.
<br>
This whole culture war that's occurring right now boils down to artists saying "Hey, I didn't share my work freely so you could do that."
<br>
We know how human inspiration works, and we know how limited individuals are. AI capabilities are well out of bounds of those expectations.
<br>
Many people seem to believe uploading anything to the net relinquishes your control over it, ignoring the fact that we have laws and regulations in place to prohibit all sorts of use without permission. There's just very little for AI.
<br>
These AI tools are built as services by companies and institutions, not random free agents. They're at the mercy of established law as much as any other recognized body.
<br>
Unsavory things happen on the net, but that doesn't mean you can do whatever you like and get away with it.
<br>
It's disturbing for anyone to claim that artists need to predict abuse of their work and accept extortion, rather than push to establish ethical guidelines for cutting-edge technology with huge socioeconomic impact.
<br>
Some people are also comparing AI training to human inspiration. In reality they have no parity.
Experts have already expressed at length that ML is fundamentally different to embodied biological agents. Those claiming they're synonymous don't know how ML works.
<br>
An AI also has a capability of scale that no human can possibly reach. We cannot analyze 5 billion images and output a dozen derivatives in seconds.
Humans are not a globally accessible web service owned by a company, and our remuneration is not funneled into a few individuals.
<br>
These tools practically slot into the "artist" position between "art" and "client". They're not so much a medium as they are a robot artist, designed to analyze the work of living illustrators and functionally replace them.
<br>
Also no, an AI algorithm doesn't contain images directly but it's still built via image data. Regardless of whether plagiarism is committed, their capabilities are completely dependent on our work existing on the net and the ability to funnel that into a training set.
<br>
Although there is strong criticism of AI, I don't believe artists are anti-AI. We collectively understand that it's genuinely cool technology and acknowledge what it can do for our process, but also need to stress the issues it causes and the unethical ways in which it's built.
</p>
</blockquote>

<blockquote>
<p>
I studied art so I could spend my days pushing paint around on a digital canvas to create wonderful imagery. Art isn't a mundane human labor to be mitigated, it's incredibly enriching. There's a stark difference between streamlining that process and mechanizing it.
<br>
I don't believe this helps the nature of art. It supercharges the commodification and commercialization of entertainment products by continuing to cut out the human element, transforming emotional communication between two sentient beings into a factory line for the consumer.
</p>
</blockquote>

<blockquote>
<p>
Photography is indeed a thing, as are computers and the printing press. They were a major disruption when they were introduced and their presence today doesn't negate the many, many people displaced by their initial invention.
<br>
Technologies with major socioeconomic ramifications need to be introduced responsibly.
There are many legal and ethical issues around AI that are being conveniently ignored by its benefactors, and none of the aforementioned tech relied on scraping the net to exist.
<br>
There is also so much more to art creation than having an idea. AI may represent a sharp decline in the ability to think creatively, simplify, exaggerate, and invent.
You can't algorithm your way to new styles and painting methods if it relies solely on what came before.
<br>
As a result we're facing the potential of trapping artists in a game of cat-and-mouse with AI, inventing new styles and approaches only to be immediately gobbled up and made a commodity overnight by software companies.
<br>
Proponents for this technology seem intent that it's made for the benefit of artists. In reality it dehumanizes the artist as an obstacle standing between the consumer and artistic expression, something to be removed and replaced with their subscription-based software offerings.
</p>
</blockquote>

<blockquote>
<p>
The only reason these AI tools are so capable is due to the use of billions of copyrighted images in their development without consent. Without that content, their quality is exponentially reduced.
These tools are defined by the direct use of data they don't own.
<br>
[Art] isn't like factory work: Losing the potential to earn a living through a labour of love (art) is not the same as causing financial stress by automating grueling labour. The former is a result of overmechanisation, the latter is lack of a social safety net.
<br>
Art AI is a symptom of a bigger problem I don't have an answer to, and would require broad social change to resolve properly. Maybe if we yell loudly enough though, make clear that this is one step too far, we can save something innately fulfilling from commercial exploitation.
<br>
I'm not saying ban AI: just build it ethically. Take people's concerns, livelihoods and the right to control their work seriously.
Artists feel used right now. Our art is being taken to create a service built to replace the way we love to work, all for a flawed economic system.
</p>
</blockquote>
</details>

Also, the same Kotaku article I cited earlier ends with an interesting reflection on the essence of "art" and the radical difference that exists between human and AI art:

> At the heart of this entire conundrum looms the false equivalency of even calling what an AI generates “art”. Art is inherently human. Its ability to draw upon and inspire our emotions is perhaps the most defining thing that separates us from other animals. (Sorry, opposable thumbs.) It is defined specifically as “a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas”.
<br><br>
A machine is not creating art. A machine, even ones as advanced as the AI we’re talking about here, is crunching data. There is no perspective to AI art, no inspiration, nothing it is trying to communicate. It’s a compilation playlist built by an algorithm, spinning an endless number of remixes and cover songs. The fact so many people are getting bogged down comparing AI art to the creations of human beings, as though the former is doing anything but adhering to an algorithm, is playing right into the hands of those championing this mimicry, because it sets AI creations on a level playing field that they don’t deserve. —Source: [Kotaku](https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-copyright-1849388060#:~:text=At%20the%20heart%20of%20this%20entire,playing%20field%20that%20they%20don%E2%80%99t%20deserve.)

One last additional point worth noting: until now, copyright forced creators to either make new things for themselves or pay to use other people's creations and eventually hire people to make them (e.g. artists). This has favored the creation and demand of new content.

With AI rapidly taking over, I think we'll come very close to a stalemate of human creation (with AI databases inevitably stopping growing, consequentially). If human creation is no longer incentivized, this absence of “novelty” might lead to the stagnation of content variety and originality.

This concept also appears in Logan Preshaw's [tweets](https://twitter.com/wickedinsignia/status/1569580990473072641): "AI may represent a sharp decline in the ability to think creatively, simplify, exaggerate, and invent. You can't algorithm your way to new styles and painting methods if it relies solely on what came before".


##### Pro AI

On the other hand, Prisma, the company behind Lensa AI (a photo-editing app with the ability to transform images into works of art using AI), addressed concerns of AI art replacing *human* art in a Twitter thread, defending their use of AI for image generation:

> "Whilst both humans and AI learn about artistic styles in semi-similar ways, there are some fundamental differences: AI is capable of rapidly analyzing and learning from large sets of data, but it does not have the same level of attention and appreciation for art as a human being.
<br>
The AI learns to recognize the connections between the images and their descriptions, not the artworks. This way the model develops operational principles that can be applied to content generation. Hence the outputs can't be described as exact replicas of any particular artwork.
<br>
[…]
<br>
AI produces unique images based on the principles derived from data, but it can't ideate and imagine things on its own. As cinema didn't kill theater and accounting software hasn't eradicated the profession, AI won't replace artists but can become a great assisting tool.
<br>
We also believe that the growing accessibility of AI-powered tools would only make man-made art in its creative excellence more valued and appreciated, since any industrialization brings more value to handcrafted works." —Source: [Twitter](https://twitter.com/PrismaAI/status/1600136437759807489?s=20&t=Tm6PySJzWIJCDYrOhw9Bvw)

Many people also argue that AI taking inspiration from other artists' work is not that different from what humans do. While artists, neuroscientists and deep learning experts [belie](https://twitter.com/wickedinsignia/status/1570596263720259584) such a similarity, and it is true in many respects, human creativity works by (sometimes heavily) relying on what has been saw before to create a variation or mixture of a set of concepts coming from personal experience of the past.

Also, yes AI "has a capability of scale that no human can possibly reach, as we cannot analyze 5 billion images and output a dozen derivatives in seconds" ([tweet](https://twitter.com/wickedinsignia/status/1570596263720259584)), but we actually don't need that amount of images to create a new artwork and we may underestimate the substantial number of things we see during our lives that the human brain can process, remember and eventually replicate during a creation process.

##### School

As I said before, ChatGPT has the potential to have a significant impact on my life as a student because it is capable of programming almost every coding exercise we normally do. I'm not using it to avoid doing the exercises myself because I like doing them and I need practice to learn how to program properly anyway (typing the prompt and doing copy-paste wouldn't be as educationally effective, right?).

At the moment of writing, here in Italy, generative AI is still not well known by many people. It’s a very recent innovation, and it takes time for it to become popular (even if it is so powerful).

My classmates probably haven’t even heard of ChatGPT, and neither have our teachers, so I still haven't directly experienced its impact on the school system. However, in many other places, several news stories are being spread about students who are cheating with their homework by using the chatbot to write essays and summaries or answer questions and do the exercises for them.

For example, as the New York Post reports on this [news](https://nypost.com/2022/12/26/students-using-chatgpt-to-cheat-professor-warns/) just a few days ago, a college professor in South Carolina caught a student using ChatGPT using this [GPT detector](https://huggingface.co/openai-detector/) tool (also a more recent and advanced detector, called [GPTZero](https://etedward-gptzero-main-zqgfwb.streamlit.app/), has been released) that analyzes AI fingerprints in the output[^5].

Many schools have started to ban the use of AI chatbots and [returned to "pen and paper"](https://www.theguardian.com/australia-news/2023/jan/10/universities-to-return-to-pen-and-paper-exams-after-students-caught-using-ai-to-write-essays), but putting a brake on the technological evolution of the school system is not the ideal solution.

On the other hand, "some educators see the chatbot as an opportunity and a supplemental resource to incorporate in classrooms. The chatbot could be used as a starting point for students when they face a writer’s block, or it can be used to get examples of what an answer should look like. It could also make information available at students’ fingertips, encouraging them to conduct research and double-check their facts[^4]".

I would also add another point: ChatGPT is potentially capable of helping teachers evaluate student's exercises and outcomes, and eventually, completely automate the task. See the image below:

![ChatGPT evaluating a program](/sm_blog/assets/images/thoughts-about-ai-images/chatgpt-evaluation.png)
<span class="caption">After submitting ChatGPT some simple C++ code to sort an array using bubble sort along with the request to evaluate it with a grade from 1 to 10 as if it were a teacher, the bot managed to satisfy my request and even write a comment with possible improvements to make to the code I gave it. And by the way, the code was written by ChatGPT so it essentially evaluated itself!</span>

However, I'm worried that the use of AI will be much more often detrimental than beneficial for learning. In a TechCrunch interview, economist Paul Kedrosky expressed the following opinion on the use of AI in education:

> "The purpose of writing an essay is to prove that you can think, so this short circuits the process and defeats the purpose. Again, in terms of consequences and externalities, if we can’t let people have homework assignments because we no longer know whether they’re cheating or not, that means that everything has to happen in the classroom and must be supervised. There can’t be anything we take home. More stuff must be done orally, and what does that mean? It means school just became much more expensive, much more artisanal, much smaller and at the exact time that we’re trying to do the opposite. The consequences for higher education are devastating in terms of actually delivering a service anymore." —Source: [TechCrunch](https://techcrunch.com/2022/12/09/is-chatgpt-a-virus-that-has-been-released-into-the-wild/#:~:text=The%20purpose%20of,a%20service%20anymore.)

In my expectation, I think we will go through a transition period where AI will be used by students for cheating much more frequently than for actually learning, but then the education system will adapt and intelligent chatbots will find a place to stay and being beneficial for everyone.

Anyway, These AI bots are shedding light on the several problems schools have in teaching students important skills[^6], making us rethink which tasks we want to leave to humans and which we'd rather leave to machines to figure out.

I didn't grow up with AI, unlike future generations, and if they'll start using such powerful facilitators from an early age, I wonder if they'll lose the ability to think critically and properly understand the world.

Additionally, those people who won't strive to improve their intelligence, capability, and skills in the near future or who won't learn multiple jobs to withstand automation, will inevitably be replaced by AIs, undergoing the effects of technological unemployment.

Yes, automation generally creates brand-new jobs while destroying others, but we are dealing with *intelligence* now. We are competing with pseudo-intelligent entities we intentionally created to help humanity, but at the same time, it seems like they're ending up replacing and overtaking many of us. We may not all be able to keep up.

There are already many examples of jobs that, in the worst circumstances, could be replaced by some AI systems out there, not only artists and programmers, but also less "popular" ones like [proofreaders](https://quillbot.com/), [copyrighters](https://www.copy.ai/), [voice](https://valle-demo.github.io/) [actors](https://blog.elevenlabs.io/enter-the-new-year-with-a-bang/), [designers](https://designer.microsoft.com/), taxi and bus drivers (when the law will allow it) and many more.

Again, AI poses problems that don't have any clear answer. Only the approach we take with human-AI interaction will determine the solutions for each of those issues.


### Suggested resources

#### Articles

- [Kotaku - AI Creating 'Art' Is An Ethical And Copyright Nightmare](https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-copyright-1849388060)
- [The Verge - Anyone can use this AI art generator — that’s the risk](https://www.theverge.com/2022/9/15/23340673/ai-image-generation-stable-diffusion-explained-ethics-copyright-data)
- [TechCrunch - Is ChatGPT a ‘virus that has been released into the wild’?](https://techcrunch.com/2022/12/09/is-chatgpt-a-virus-that-has-been-released-into-the-wild/)
- [The Verge - The scary truth about AI copyright is nobody knows what will happen next](https://www.theverge.com/23444685/generative-ai-copyright-infringement-legal-fair-use-training-data)
- [The Verge - ArtStation is hiding images protesting AI art on the platform](https://www.theverge.com/2022/12/23/23523864/artstation-removing-anti-ai-protest-artwork-censorship)
- [AI: Markets for Lemons, and the Great Logging Off](https://www.fortressofdoors.com/ai-markets-for-lemons-and-the-great-logging-off/)
- [NintendoLife - How Do Game Developers And Artists Feel About The Rise Of AI Art?](https://www.nintendolife.com/features/how-do-game-developers-and-artists-feel-about-the-rise-of-ai-art)
- [Vox - AI experts are increasingly afraid of what they’re creating](https://www.vox.com/the-highlight/23447596/artificial-intelligence-agi-openai-gpt3-existential-risk-human-extinction)
- [CNBC - Google vs. ChatGPT: Here’s what happened when I swapped services for a day](https://www.cnbc.com/2022/12/15/google-vs-chatgpt-what-happened-when-i-swapped-services-for-a-day.html)
- [The Atlantic - The End of High-School English](https://www.theatlantic.com/technology/archive/2022/12/openai-chatgpt-writing-high-school-english-essay/672412/) and [Forbes - No, ChatGPT Is Not The End Of High School English. But Here’s The Useful Tool It Offers Teachers.](https://www.forbes.com/sites/petergreene/2022/12/11/no-chatgpt-is-not-the-end-of-high-school-english-but-heres-the-useful-tool-it-offers-teachers/?sh=550d15dd1437)
- [Vox - AI is finally good at stuff, and that’s a problem](https://www.vox.com/recode/2022/12/7/23498694/ai-artificial-intelligence-chat-gpt-openai)
- [Wired - This Copyright Lawsuit Could Shape the Future of Generative AI](https://www.wired.com/story/this-copyright-lawsuit-could-shape-the-future-of-generative-ai/)
- [Wired - When AI Makes Art, Humans Supply the Creative Spark](https://www.wired.com/story/when-ai-makes-art/)

#### Videos

- [Humans Need Not Apply](https://youtu.be/7Pq-S557XQU)
- [How Machines Learn](https://youtu.be/R9OHn5ZF4Uo)
- [OpenAI CEO Sam Altman \| AI for the Next Era](https://youtu.be/WHoWGNQRXb0)
- [It’s Time to Pay Attention to A.I. (ChatGPT and Beyond)](https://youtu.be/0uQqMxXoNVs)
- [The Truth About AI Getting "Creative"](https://youtu.be/0gNauGdOkro)
- [What will AI Programming look like in 5 Years?](https://youtu.be/eaedq1Jl2fc)
- [I tried using AI. It scared me.](https://youtu.be/jPhJbKBuNnA)
- [Ch(e)at GPT? - Computerphile](https://youtu.be/XZJc1p6RE78)
- [Dean's Speaker Series | Jensen Huang Founder, President & CEO, NVIDIA](https://youtu.be/9hzVdV63scU?t=3611)

### <span class="material-icons">speaker_notes</span> Footnotes:

<span class="caption">Image generated by Midjourney with the prompt "artificial intelligence wallpaper, abstract, 4k".</span>

[^1]: [TechCrunch - The emerging types of language models and why they matter](https://techcrunch.com/2022/04/28/the-emerging-types-of-language-models-and-why-they-matter/)
[^2]: Check this [example by Nicky Case](https://twitter.com/ncasenmare/status/1605615504244326400?s=20&t=57o8PMFUPZE-qqKqvFVPeQ)
[^3]: [Wikipedia - Monkey selfie copyright dispute](https://en.wikipedia.org/wiki/Monkey_selfie_copyright_dispute) and [Murgitroyd Blog - Who owns the copyright in AI-generated art?](Who owns the copyright in AI-generated art?)
[^4]: as Forbes writes in this [article](https://www.forbes.com/sites/rashishrivastava/2022/12/12/teachers-fear-chatgpt-will-make-cheating-easier-than-ever)
[^5]: [The Guardian - AI-assisted plagiarism? ChatGPT bot says it has an answer for that](https://www.theguardian.com/technology/2022/dec/31/ai-assisted-plagiarism-chatgpt-bot-says-it-has-an-answer-for-that)
[^6]: John Warner explain the problem of bad writing further in [this](https://twitter.com/biblioracle/status/1599101797557489664) Twitter thread
