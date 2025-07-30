---
title: "Shiny object syndrome"
description: "Stop adopting always the latest when they've been just launched"
pubDate: 'Jul 29 2022'
heroImage: '../../assets/blog/shiny-object.png'
---

## Stop adopting the latest tools just because they shine

GitHub Copilot Chat was barely out of beta when our team Slack exploded with excitement. "This changes everything!" someone posted. Three months later? Half the team had already moved on to Cursor. Last week, Claude Code became the new obsession.

Sound familiar?

I've watched this movie so many times I could write the script. Engineer discovers shiny new tool, gets hyped, evangelizes it to the team, then quietly abandons it when the next shiny thing appears.

It's the Pareto principle of tech adoption: 80% marketing sparkle, 20% actual improvements.

### What is shiny object syndrome?

Simple: it's when we chase whatever's new and trendy, then drop it the moment something newer appears. 

It's not just an engineer thing—it's human nature. Our brains are wired to think that more tools = more dopamine, and more skills = better engineer. But here's the catch: learning about cool new tools (totally fine!) is completely different from making them your go-to solution.

The difference between exploring and adopting? That's where things get messy.

### The observability mess I walked into

Once I got tasked with "improving observability across our key systems." Sounded straightforward enough.

Then I started digging into what tools we were actually using.

Holy. Shit.

We had adopted basically every trendy observability tool that had made it to the front page of Hacker News in the past two years. Datadog? Check. New Relic? Obviously. That cool new startup everyone was talking about? Yep, someone had signed us up.

Each team had gone with whatever caught their eye when they needed monitoring. Zero coordination. No "hey, maybe we should see what others are using first." Just pure impulse adoption.

### The mess this created

Here's what I found when I dug deeper:

**Nobody documented why they picked anything.** Tool decisions were happening in random Slack DMs. "Hey, should we use X or Y?" "I don't know, X looks cooler." Done. No follow-up, no reasoning, no nothing.

**New people were completely lost.** Imagine being the new engineer trying to debug a simple issue and discovering you need accounts for six different monitoring platforms. Fun times.

**We were basically winging it at scale.** No standards, no preferences, no "here's how we do monitoring at this company." Just chaos with fancy dashboards.

### Why this matters for platform engineering

When you're building SDKs and APIs that other teams depend on, every tool choice has multiplier effects. The fragmented tooling landscape meant our platform couldn't provide consistent interfaces or abstractions. Instead of building developer tools, we were constantly playing catch-up with different vendor integrations.

Questions I wish we'd asked earlier:
- Does this tool solve a problem that existing solutions don't address?
- How will this integrate with what teams are already using?
- Who will support this long-term?
- What's our exit strategy if this doesn't work out?

### A smarter way to think about tools

Look, I'm not saying you should avoid new tools. Staying current is literally part of the job. But there's a huge difference between being curious and being reckless.

**Actually analyze the problem first.** Does this shiny new thing solve a real issue, or are you just bored with your current setup? Bun might legitimately be faster than npm for your use case. Claude Code might actually fit your workflow better than Cursor. But that 47th React state management library that's "totally different this time"? Probably not worth the migration headache.

**Make tools justify their existence.** Don't just ask "is this tool good?" Ask "is this tool better enough to justify switching?" Big difference.

**Write down your reasoning.** Future you will curse present you for not documenting why you chose Tool A over Tool B. Trust me on this one.

### Questions worth asking before you adopt anything

Before you get excited about the next game-changing tool, try this:

- **Is this actually ready for production?** Or are you just impressed by the demo? There's a big difference.
- **How does this play with everything else?** Your existing tools, your team's knowledge, your current workflows—does it fit, or does it fight?
- **Who's going to maintain this thing?** Someone has to keep it updated, handle the inevitable issues, and train people on it. Is that someone you?
- **Can you measure the improvement?** If you can't quantify why this is better, maybe it's not actually better.

Here's the thing: the most productive teams I've worked with aren't running the latest everything. They're running boring, stable tools that just fit exactly or their needs. And honestly? That's kind of beautiful.
