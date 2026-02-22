# Experimenting with Codex (GPT-5)

Experimenting with Codex felt really good.

For the last few weeks, I had been seeing a lot of Twitter posts praising Codex GPT-5 coding capabilities. I thought I should give it a try and understand how easy it is now to develop an app from scratch.

Before diving into project details, I want to give quick background. I have been using AI chatbots/agents for a long time. The first AI agent I used was AmazonQ (a.k.a KIRO), and then Claude Code became my coding partner. Last week, one of my colleagues introduced me to Codex, and it felt surprisingly good.

In this experiment, I built an Influencer and Brand collaboration platform, which my friend Anupam and I had been discussing for a long time.

I started by summarizing the overall requirements so the prompt and scope were clear.

```text
Let's dive into what the idea is and what exactly I want to build:

- An application for connecting influencers and brands
- Feature details
    - Find influencer
        - We will list down all influencers connecting their Instagram and Twitter accounts
            - In future, we will focus on building account verification automatically. Need a guardrail to stop spammers.
            - Advanced filtering logic, like search by name, categories, reach, and audience geography
    - Brand
        - Initially, our plan was to keep brands as browsers and let them contact influencers
        - But I think we should also add request options, which can be bid on by eligible influencers for brand deals
- App UI details
    - Like any other app, it should have user login and user view
        - First: user logged in as influencer
            - I should be able to see home screen, where first tab shows brand deal recommendations
            - Second tab is status of brand deal bids posted, and whether they are accepted or not
        - Second: user logged in as brand
            - On home screen, brand can see search and recommended influencers
            - Second tab is to check active brand deal requests, where influencers might post requests to do brand deals with a certain amount
```

Then I used smaller prompts so the agent could focus on one task at a time.

```text
Let's start simple

- Create an md file while creating this project where we can store design principles, core values for users, and app theme.
- Theme: I want dark theme for this app. I will share sample images as reference theme for the app while designing any component.
```

```text
Phase 1

- Decisions we need to take
- What frontend framework should we use?
- What backend should we use?
- What database should we use?
- Create project with frontend server + backend server + database.
- Create markdown file mentioned above.
```

```text
Phase 2

- Decide on the theme and create a markdown file around it so we can read it in each new coding session.
```

```text
Phase 3

- Start with sign-up page, with two options: I'm a Brand, I'm an Influencer.
- Sign-in page: user enters username/email and password; based on type of user we show UI.
- Sign-in options: for now keep only email-password login.
- Include backend endpoint for the same, and decide database structure for this basic flow.
```

```text
Phase 4

- Simple influencer onboarding journey:
  when influencer signs up, move influencer to add details.
  For now keep it manual (Instagram ID, Twitter ID, followers), then move user to home page.
- User should have profile button on top right.
  On click, show current details and allow editing.
```

```text
Let's do some UI refactoring in the middle of the project.

- Before driving next phases, take a pause and do UI refactoring.
- I am very dissatisfied by the UI you made. It's not even close to the UI references shared in chat.
- Feedback:
  - It doesn't look like any modern app in the market.
  - UI is not filling the whole screen.
  - Tables are not looking like normal web app tables.
  - You also did not create theme.md file to keep track of reference style for future sessions.
```

```text
Follow-up prompts

- Home page looks great, but onboarding still looks AI-generated and generic.
- Onboarding text is oversized and style is not aligned with home page.
- Make it more appealing; think deeply before updating.
- Review input fields and Save/Continue button; they still look generic.
- Home page feedback:
  - Why is access token shown to user?
  - Why are account details on home page? They should be shown from profile settings.
  - Logout should also be inside profile settings.
```

```text
Phase 5

- Now, let's start with brand side.
- I see basic components are already present in brand page.
  - Created campaigns for brands.
- Now that campaign creation exists, show those campaigns to influencers.
```

After that, I gave very small tasks like adding edit/delete buttons, and one thing to say: it is extremely good at executing those small tasks.

I am pasting down my learnings:

## What worked really well

- Once a clear outline is built, it becomes much more intuitive to add functions.
- It is really good at fulfilling small requirements (for example, edit/delete button changes).
- Once the basic project layout is ready, it is very good at making design decisions in context and suggesting practical ideas.
- Sharing my full thought process helped the agent produce better outputs.

## Where it struggled

- Creative UI originality still needs strong direction and inspiration from me.
- In the beginning, the backend structure was not modular. It created login/logout/auth/sign-up endpoints in a single file.
- I found missing product details up to phase 4 (for example, user had to re-login after closing the website).
- Early UI quality was the weakest part; I also could have guided this better by breaking UI work into smaller review loops.

## Why this happened (my view)

- It may try to optimize for shorter, faster output first, so initial structure can be simplistic.
- Large vague prompts hurt quality, especially for UI and architecture.

## What I would do next time

- Build component by component, then expand scope.
- Start with UI components first, review them, then move to full fledged integration.
- Keep feedback loops short and specific after each phase.

## Final take

- I am optimistic on the agent will get better we eventually don't need to code. But the idea creation and motivation parts will driven by humans, but who knows the future. 
- Codex GPT-5.6 worked better for my workflow than the original GPT-5. Earlier I had to tweak a lot; here it worked with fewer iterations.

## Video walkthrough

If you want to watch the full walkthrough, here is the video:

https://youtu.be/4q71n35AexU
