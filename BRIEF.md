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

## Who it's for

Pip is for workplaces that run on operations and have nobody technical: corner stores, clinics, salons, food banks. The people there are too busy to learn vibe coding and too busy to stop and describe an app. Pip is a traveling builder. It visits a workplace for about a week, listens to customer complaints, staff requests and everyday conversation, works out how the place runs, then builds what is missing and moves on.

**Opening stat:** clinics and shops took up AI fast last year. In the AMA's survey of 1,183 physicians, 66% used AI in their practice in 2024, up from 38% in 2023. A Thryv survey of 540 small businesses (a vendor survey, labeled as such) found AI use rose from 39% in 2024 to 55% in 2025. Nearly all of that is software someone else designed. The pivot: what if Pip could help them build their own?

**The example is Pip's route, not one owner.** Pip goes from workplace to workplace, about a week at each: a corner market, a family clinic, a salon, a food bank. At every stop it listens to complaints from customers, needs from staff and everyday conversation, so it understands how the place runs.

- **The corner market (demo stop):** pan dulce sells out by 10 and customers keep asking. Staff write reservations on receipts and some go missing. Pip builds a reservation page with a daily limit and a list for the bakery.
- **The family clinic (next stop):** patients ask how long the wait is, and staff call back about refills. Pip builds a text-me waitlist and a refill status board. In clinics, Pip excludes health details from what it learns.
- **Sector constraints:** thin margins, no IT person, phones as the main computer, bilingual customers and patients.
- **Why they want it:** they keep working while Pip figures out what to build, and they only answer plain questions about their own workplace.
- **Why they need it:** without it, requests said out loud are lost, and the software they get was designed for someone else.

The market and clinic are illustrative. Before pitching, swap in quotes from two or three real owners or staff (`src/content/config.ts`).

## What is broken about building software today

Today's AI builders assume you have time to stop working and the words to describe what you want: a blank prompt box, then a wall of code or a generated screen you can't reason about. The decisions that matter to a busy workplace (how many to set aside, how people pay, whether customers read Spanish) are buried under technical ones. Meanwhile the real requirements are said out loud in the workplace every day and lost.

## Who Pip allows to build

Whole workplaces that will never learn to code and never hire a developer. If people at your workplace talk about a problem, Pip can hear it and build for it.

## What Pip makes easier

- **Listen:** Pip spends a week at the counter on its fog screen. It hears customers, staff and passing conversation, then shows the owner "What I noticed" as patterns and counts (demo data on the slide).
- **Ask:** Pip asks the owner one plain question at a time, each starting from something it heard. "People asked after it sold out 14 times. How many can you set aside each day?" is a business question that quietly builds inventory logic. Every change flies from Pip's hand into the app.
- **Try:** Pip pretends to be a customer and finds the gap ("I'm allergic to nuts and there was nowhere to tell you").
- **Launch:** one word gives a working page and a QR code. Reservations arrive live and add up into tomorrow's order for the bakery.
- **Move on:** Pip travels to the next workplace (the clinic) and checks back in a month.

## Trust

A listening agent needs visible rules: Pip glows whenever it listens, everyone is told first and anyone can say "Pip, pause", it keeps patterns not recordings, nothing is built without the owner's yes, health details stay out in clinics, and the listening leaves with Pip. These are prototype design rules, not legal certifications; a real clinic deployment would need a privacy and HIPAA review.

## Why now

Models can turn a week of overlapping conversation into a few clear patterns and make small reliable changes in real time. Browser speech makes listening and talking free and instant. Fog screens give a listening agent a visible body.

## What we learned (starting points, replace with the team's own)

- Owners describe problems, never features. Listening first skips the hardest part.
- Showing what Pip noticed before building did more for trust than any explanation.
- The pretend customer catching a missing notes box was the most useful AI moment.
- People relaxed once they could see when Pip was listening.

## Who benefits beyond the first workplace

Staff (one list instead of scraps of paper), customers and patients (shorter waits, answers in their own language), the neighborhood (local shops get tools without paying a developer), and every next stop on Pip's route: a family clinic, a salon, a food-bank shift coordinator.

## Hardware

Pip runs on a laptop and is projected onto a small fog screen at the counter, so everyone can see when it is listening.
