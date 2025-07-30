---
title: "It was always done this way"
description: "Team bias in software engineering and its consequences"
pubDate: 'Jul 29 2022'
heroImage: '../../assets/blog/rusty.png'
---

## Team bias in software engineering and its consequences

"Why does every API response go through three different transformation layers before we return it to the client?"

The new engineer's question hung in the air during our code review. It was such an innocent question. So obvious. So... annoying?

"It's just how we handle data transformation here," someone muttered. "It was always done this way."

And there it was. The most dangerous phrase in software engineering. Not because it's wrong—sometimes things really have been done a certain way for good reasons. But because it's the moment we stop thinking and start following.

### The comfort of inherited madness

Every codebase is basically archaeology. Layers of decisions made by people who aren't here anymore, for reasons nobody quite remembers. That weird authentication flow? Dave built it in 2019. The convoluted database schema? Sarah designed it when we had different requirements.

The problem isn't that these decisions were bad at the time. The problem is that we inherit them like religious doctrine, complete with rituals we don't understand but are afraid to change.

I once worked on a service that had a 15-step deployment process. Fifteen! Each step had its own script, its own validation, its own way to fail spectacularly. When I asked why, the answer was always the same: "Well, we added that step because of the incident in 2020..."

Nobody could remember what the incident actually was.

### The small pan

In Argentina—and I think in other LATAM countries too—we have a common story for this. Let me share it with you:

>A child notices that mom always makes omelettes in a tiny pan, so by the time the last portion is ready, the first one is cold. "Why don't we use the big pan?" the kid asks.  
>
>"I don't know," mom says. "My mom always made it that way."  
>
>So the child asks grandma the same question. "It's just habit, dear. My mom made it that way too."  
>
>Finally, the child visits great-grandma, determined to solve this mystery.  
>
>"Great-Grandma, why do you cook omelettes in the small pan?"  
>
>Great-grandma smiles: "Haven't you bought a new pan yet?"  

Turns out the "tradition" started because great-grandma's big pan was broken. Three generations later, everyone was still following a workaround for a problem that no longer existed.  


### My 500-line reality check

Last month, I decided to refactor a service class that had grown to 500 lines. Not because I was bored—because it was genuinely unmaintainable. Every bug fix required scrolling through a novel's worth of code. Onboarding new people meant explaining a dozen different responsibilities crammed into one file.

The refactor was clean: smaller classes, clear responsibilities, better tests. It worked perfectly. Performance actually improved.

The code review took an entire sprint.

Not because of technical issues. Not because of bugs. But because it "didn't look like how we usually structure things." The feedback was basically "this is probably better, but it's different, and different feels scary."

Here's the kicker: that 500-line monster started as a 50-line utility class. Nobody planned for it to become unmaintainable. It just felt easier to add "one more method" than to question whether the original structure still made sense.

### When bias becomes technical debt

This isn't just about code structure. I've seen teams spend weeks building elaborate workarounds rather than questioning whether their chosen framework still made sense. I've watched engineers implement increasingly complex solutions on top of shaky foundations because "we've always used this database" or "this is how we handle caching."

The scariest part? We get really good at justifying these decisions after the fact. "Our authentication system is complex because security is important." "Our deployment process has many steps because we value reliability." "Our codebase has a unique structure because our domain is special."

Sometimes these justifications are true. But often, they're just stories we tell ourselves to avoid the uncomfortable work of questioning inherited assumptions.

### The fresh eyes problem

Remember that new engineer who asked about the data transformation? They left the team six months later. Not because they couldn't handle the work, but because they got tired of being told "that's just how we do things" every time they spotted something weird.

Fresh eyes see inherited assumptions clearly. They haven't been conditioned to accept the quirks as normal. They're basically walking code smell detectors, and we treat them like they're the problem.

When someone new says "this seems unnecessarily complex," our first instinct should be curiosity, not defensiveness. But instead, we usually respond with some variation of "you'll understand when you've been here longer."

Translation: "you'll stop noticing the problems when you get used to them."

### Breaking the pattern (without breaking everything)

Look, I'm not suggesting we question every single decision every single day. That's a recipe for paralysis. But we need intentional moments of reflection.

**Actually listen to new people.** When someone fresh asks "why do we do X?", don't just explain the current process. Ask yourself if the reason still makes sense. That new engineer might be seeing something you've stopped noticing.

**Practice zero-based thinking.** Every few months, pick a part of your system and ask: "If we were building this from scratch today, knowing what we know now, would we make the same choices?" Sometimes the answer is yes. Sometimes it's "oh god, no."

**Measure the real costs.** That complex deployment process might feel "safe," but what's it actually costing you? Time? Developer happiness? Ability to respond to incidents quickly? Make the tradeoffs explicit.

**Create productive disagreement.** The engineer who says "why don't we try Y instead?" isn't being difficult. They're doing you a favor. I've learned to get genuinely excited when someone challenges my approach—it means they're thinking, not just copying.

### The path forward

Here's what I've learned: the strongest engineering cultures aren't built on unchanging traditions. They're built on the courage to continuously examine and improve their foundations.

"It was always done this way" should be the beginning of a conversation, not the end of one. The beginning of asking: "Why was it done this way? Does that reason still apply? What would we do differently if we started fresh?"

That 500-line refactor? It eventually got merged. Took three weeks of Slack discussions and a lot of explaining, but it happened. The result? The code became way more maintainable, onboarding time for that service dropped significantly, and—most importantly—the team started questioning other inherited patterns.

Turns out, once you start examining one assumption, it gets easier to examine others.
