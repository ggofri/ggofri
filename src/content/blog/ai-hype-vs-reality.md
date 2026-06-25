---
title: "AI hype vs. reality"
description: "What actually survives contact with production"
pubDate: 'May 27 2026'
---

## What actually survives contact with production

Someone in my feed posted another "AI changes everything" thread last Tuesday. New model. New demo. Incredible benchmark numbers. Forty-something retweets from people who haven't shipped anything with it yet.

I used to get excited about these. Now I mostly look for the production evidence. I can almost always tell when there isn't any.

Here's the pattern I've watched play out enough times to see the shape: a demo impresses, the discourse erupts, teams adopt early, and three months later half of them have quietly moved on. The tool that was going to replace your entire workflow is now a rarely-opened sidebar in someone's IDE.

This isn't cynicism. It's just the record.

### The Sounder demo that almost wasn't honest

We built Sounder to monitor signals in agentic systems—surface anomalies, detect when agents are drifting from their intended behavior, alert when something's going sideways before it becomes a production incident.

The demo was stunning. We ran it against a curated test environment with clean, well-labeled signals. The detection was sharp, the alerts were precise, the visualizations were genuinely impressive.

We showed it internally. People loved it. Someone said "this is the coolest thing I've seen this year."

Then we plugged it into a real production agentic workflow.

Three days in, it was nearly useless. The signals in production were noisy, ambiguous, and poorly defined at the source. Sounder was dutifully detecting and alerting on things that technically matched the patterns—but the patterns were wrong because the signal definitions were wrong.

The demo wasn't lying. It just wasn't honest about its assumptions.

### What the demo doesn't show you

Every impressive AI demo has a set of assumptions hidden inside it. The data is clean. The task is well-scoped. The failure modes are absent from the recording.

This isn't malicious. It's just the nature of demonstrations—you show the happy path. But when you adopt something based on a happy-path demo, you're committing resources to a promise about the other paths too.

The gap I watch for:

**What was the data like?** Clean benchmark data and production data are completely different things. Any evaluation that doesn't reflect the noise and ambiguity of real inputs is not telling you about real performance.

**What happened when it was wrong?** Demos don't show failure modes. Ask to see them. If the team doesn't have failure examples, they haven't been operating at scale.

**Is there reproducible evidence, or just a recording?** A video of a demo is not evidence. A published methodology with a repeatable evaluation is.

### Reproducible evidence as the baseline

This is the part where I sound like I'm asking everyone to publish academic papers. I'm not. But "I saw a demo and it looked good" is not a sufficient basis for real decisions.

Earlier this year I published two studies that came directly out of this frustration.

[The Intervention Penalty](https://zenodo.org/records/19457265) measured the actual cost of human checkpoints in AI coding governance workflows—not a feeling, but a measured cost in time and disruption. The finding is counterintuitive: more human checkpoints doesn't straightforwardly mean better outcomes. The location and frequency of intervention is a design variable with measurable consequences. That's the kind of thing you can only learn from evidence, not from watching a demo go well.

[AI in Cybersecurity](https://zenodo.org/records/19463970) looked at reproducible evidence on vulnerability discovery with AI assistance. The results are more nuanced than the demos suggest—real gains in specific areas, no gains or even regressions in others, depending heavily on how the tools are deployed and what context they operate in. The takeaway isn't "AI doesn't work in security." It's "claims need to be tested against reproducible evidence, not impressions."

Both papers took real effort to produce. They're also worth infinitely more as decision-making inputs than any demo I could have recorded.

### What actually survives

Here's the filter I use now. Three months after first contact with a production workflow, what's still running?

The tools that survive tend to have a few things in common:

**They solve a boring problem really well.** Not a spectacular problem. Not a demo-worthy problem. A problem someone was solving badly every day, now solved measurably better.

**They degrade gracefully.** When they get it wrong—and they will—the failure is recoverable and visible. Not silent and catastrophic.

**Someone measured the improvement.** Not "it feels better." Actual before-and-after numbers on something that matters.

**They fit the workflow that exists, not the workflow you wish you had.** This kills more AI tools than any technical limitation. The tool works great in the designed scenario and nowhere near as well in the actual messy one.

### The hype cycle isn't going anywhere

There will be another wave. Another "everything changes" moment. Another leaderboard upset, another demo that breaks the discourse.

Stay curious. Try things. Some of it is genuinely impressive. But maintain a higher standard than a demo before you commit your team's time and trust.

Ask for the evidence. Ask what the failure modes look like. Ask what happens at three months.

What's the last AI tool you're still using that you adopted more than six months ago?
