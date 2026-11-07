# Brief: Pip, Innovator's Forum Fall 2026, Prompt 3a

## The prompt

Source: https://piquant-salsa-e30.notion.site/3a-What-Does-the-Future-of-Vibe-Coding-Look-Like-3a464001cdcd80458fb8c20ef548d38b

**3a: What Does the Future of Vibe Coding Look Like?**

Today, someone can describe an idea and use AI to help build it. But this is only the beginning. Your challenge is to imagine what comes next.

Build a working Replit app that shows, not tells, how a non-engineer might turn an idea into a real product in the future. Reimagine the building experience itself. What new interface, workflow, or tool would make it easier for anyone to create software by describing what they want?

Your project might explore:

- A new way to communicate an idea to AI
- A tool that turns rough thoughts into a working product
- A workflow that helps users make decisions while building
- A system that brings business, design, and technical thinking together
- A new way to test, improve, or launch an idea
- Something entirely different that changes who gets to build

## Required sections (from the team's point of view doc)

Every one of these must be visible in the deck, and each slide's footer names the one it covers.

1. Who it's for
2. What is broken about building software today
3. Who Pip allows to build
4. What it makes easier, faster or newly possible
5. Why this could only exist now
6. What we learned building it
7. Who benefits beyond the primary user
8. How the prompt's standards show up in the product

## Standards (the rubric tags)

Original, Useful, Believable, Accessible to non-engineers, Understandable through the product itself, Built for a specific person in a specific context.

## The point of Pip

**The future of AI is human.** Pip acts like a real person: you can talk with it, and it picks things up like a coworker would. We can already tell AI what to do, but people connect best with people, especially people who aren't comfortable with technology. This is the deck's opening idea, right after the title.

Pip is a friendly, human-facing way to build software. Today's AI builders feel made for engineers: a blank box, technical words and code you can't check. Non-technical people find them intimidating and give up. Pip is a character on a fog screen that says hello, talks in your words, says back what it heard, asks one question at a time and never shows code. The friendliness is the product: it makes people feel open to building.

## Who it's for

**Gloria, 56. Clinic director of a two-doctor family clinic in East Los Angeles.** (Sector: community healthcare.) She is not a doctor and not technical.

- **Her day:** the phones start before the doors open. Patients call all day to ask how long the wait is and whether a refill went through. A voicemail gets missed. She is still returning calls after closing.
- **What she can't do today:** build anything. She tried an AI app builder once, and closed it when it showed her code. There is no budget for a developer.
- **Sector constraints:** thin margins, no IT person, a scheduling system she didn't choose, mostly walk-in patients, many older and more at home in Spanish. Health information needs care.
- **Why she wants it:** patients join the walk-in list from their phones and hear back when it's their turn, so they stop waiting on hold.
- **Why she needs it:** without it, the phones stay the system, and the software she has was designed for someone else.

**Opening stat (people want easier tools but can't stop to learn them):** in Goldman Sachs' 2026 survey of 1,256 small business owners in its 10,000 Small Businesses program, 84% of those using AI said the main benefit was saving time and working more efficiently, yet 73% said more training and help setting it up would help them, and only 14% said AI was fully part of daily operations. In NHS England's 2022 survey of 791 general-practice staff (UK), 74% said high workload kept them from finishing training, with lack of protected time second. The pivot: what if building an app felt like talking to a friend?

Gloria is a persona. Before pitching, swap in quotes from two or three real clinic staff or owners (`src/content/config.ts`).

## What is broken about building software today

Today's AI builders feel made for engineers: a blank prompt box, then a wall of code or a generated screen you can't reason about. The decisions that matter to Gloria (how many walk-ins her doctors can see, where patients wait, whether patients read Spanish) are buried under technical ones. People like her close the tab.

## Who Pip allows to build

People who have never built anything and never will learn to: clinic directors, shop owners, salon owners, food-bank coordinators. If you can describe your problem to a friend, you can build with Pip.

## What Pip makes easier

- **Feels like a person:** Pip starts with "Hi! What's been hard this week?", speaks English or Spanish, shows what it heard instead of code, asks one question at a time and says "Let me try that another way" instead of an error.
- **Say it:** Gloria talks; Pip reflects back what it heard (Who, Clinic, Problem, Goal).
- **Shape it:** four friendly questions, one at a time. "How many walk-ins can your doctors see in a day? I'll close the list before they get swamped" quietly builds capacity logic. Every change flies from Pip's hand into the app.
- **Try it:** Pip plays a patient and finds the gap ("My daughter translates for me, and there was nowhere to say so").
- **Launch it:** one word gives a working walk-in page and a QR code. Check-ins arrive live and the front desk gets one list by visit type, with interpreter requests flagged.

## Pip acts like a real person: what makes it special

Pip isn't an app you open and close. It is more like a new coworker. You can talk with it any time, and like a real person it picks things up in passing. It doesn't record everything; it pays attention to what seems interesting or useful, the way a new hire would after a week on the job. In its first week at Gloria's clinic, without being asked, it noticed:

1. **How patients move:** walk-ins peak from 9 to 11 a.m. and the waiting room spills outside.
2. **How staff work:** one person answers the phone and checks patients in at the same time.
3. **How operations run:** refill requests go on sticky notes and get called back after closing.
4. **What patients complain about:** "How much longer?" is the question asked most at the desk.

Then it brings it up, like a coworker would: "Hey Gloria, I keep hearing people ask how much longer. Want me to make a list that texts them when it's their turn?" It offers to build a walk-in list that texts patients, one front desk list and a refill board. The slide shows the clinic as a floor plan with the four findings pinned where they happen; the findings are demo data.

Visible rules: Pip glows when listening, everyone is told first and anyone can say "Pip, pause", it keeps patterns not recordings, nothing is built without a yes, health details stay out in clinics, and the listening leaves with Pip. These are prototype design rules, not legal certifications; a real clinic deployment would need a privacy and HIPAA review.

## Why now

Models can hold a conversation, turn a messy description into structure and make small reliable changes in real time. Browser speech makes voice free and instant. Fog screens give a character a body in the room.

## What we learned (starting points, replace with the team's own)

- People describe their problem in more detail to a character than to a text box.
- Free-form "build anything" overwhelmed even us. One question at a time felt calm.
- Showing what Pip heard before building did more for trust than any explanation.
- The pretend patient catching a missing notes box was the most useful AI moment.

## Who benefits beyond Gloria

Her front desk (less time on hold and callbacks), her patients (join the list from home, in Spanish or English, with bigger text), the neighborhood (a clinic that is easier to reach), and anyone else who can describe a problem: a corner store, a salon, a food-bank shift coordinator.

## Hardware

Pip runs on a laptop and is projected onto a small fog screen at the counter, so everyone can see when it is listening.
